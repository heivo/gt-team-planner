import { deserializeState } from './context/useBrowserHistoryState';
import graphQLClient from './graphQLClient';
import { GetHeroImagesQuery, GetHeroImagesDocument } from './graphql/schema';
import sharp, { OverlayOptions } from 'sharp';
import fetch from 'node-fetch';
import { decode } from 'universal-base64';
import { RequestHandler } from 'express';

const IMG_SIZE = 150;
const FRAME_SIZE = 10;
const SLOT_GAP = 10;
const TEAM_GAP = 20;

const getImgPosition = (teamNumber: number, slotNumber: number) => ({
	left: FRAME_SIZE + slotNumber * (IMG_SIZE + SLOT_GAP),
	top: FRAME_SIZE + teamNumber * (IMG_SIZE + TEAM_GAP),
});

interface ImageInfo {
	url: string;
	left: number;
	top: number;
}

const isImageInfo = (value: ImageInfo | { url: string | null | undefined }): value is ImageInfo => value.url != null;

const ogImgMiddleware: RequestHandler = async (req, res) => {
	const data = await graphQLClient.request<GetHeroImagesQuery>(GetHeroImagesDocument);

	const getHeroImgUrl = (id: string | undefined) =>
		id ? data.heroCollection?.items.find((hero) => hero?.sys.id.startsWith(id))?.image?.url : null;

	const deserialzedTeams = deserializeState(decode(req.params.encodedState ?? ''));

	const imgInfos = deserialzedTeams
		.map((team, teamNumber) => {
			const ids = [team.h0, team.h1, team.h2, team.h3];
			return ids.map((id, slotNumber) => ({
				url: getHeroImgUrl(id),
				...getImgPosition(teamNumber, slotNumber),
			}));
		})
		.flat()
		.filter(isImageInfo);

	const teamSeparator = await sharp({
		create: {
			width: 650,
			height: 1,
			channels: 3,
			background: { r: 0x2f, g: 0x30, b: 0x36 },
		},
	})
		.jpeg()
		.toBuffer();

	const composite = await Promise.all<OverlayOptions>(
		imgInfos
			.map(async ({ url, left, top }) => {
				const input = await fetch(url)
					.then((r) => r.arrayBuffer())
					.then(Buffer.from);
				const overlayOptions: OverlayOptions = { input, left, top };
				return overlayOptions;
			})
			.concat(
				deserialzedTeams.slice(1).map((_, teamNumber) =>
					Promise.resolve({
						input: teamSeparator,
						top: FRAME_SIZE + IMG_SIZE + TEAM_GAP / 2 + teamNumber * (IMG_SIZE + TEAM_GAP),
						left: 0,
					})
				)
			)
			.flat()
	);

	try {
		const img = sharp({
			create: {
				width: 650,
				height: FRAME_SIZE * 2 + deserialzedTeams.length * IMG_SIZE + (deserialzedTeams.length - 1) * TEAM_GAP,
				channels: 3,
				background: { r: 0, g: 0, b: 0 },
			},
		})
			.jpeg()
			.composite(composite);
		res.contentType('image/jpeg');
		res.end(await img.toBuffer(), 'binary');
	} catch (err) {
		console.error(err);
	}
};

export default ogImgMiddleware;
