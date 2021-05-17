import express from 'express';
import { decodeSlug } from './context/useHistoryStore';
import graphQLClient from './graphQLClient';
import { GetHeroImagesQuery, GetHeroImagesDocument } from './graphql/schema';
import sharp from 'sharp';
import fetch from 'node-fetch';

let app = require('./server').default;

if (module.hot) {
	module.hot.accept('./server', () => {
		console.log('🔁  HMR Reloading `./server`...');
		try {
			app = require('./server').default;
		} catch (error) {
			console.error(error);
		}
	});
	console.info('✅  Server-side HMR Enabled!');
}

// This will extract the env during production execution.. PORT will not be inlined during build
const getEnv = (c: string) => process.env[c];

const port = parseInt(getEnv('PORT') ?? '3000', 10);

export default express()
	.use('/img', async (req, res) => {
		const slug = req.path.substr(1);
		const { h0, h1, h2, h3 } = decodeSlug(slug);
		const data = await graphQLClient.request<GetHeroImagesQuery>(GetHeroImagesDocument);
		const img0 = data.heroCollection?.items.find((hero) => hero?.sys.id.startsWith(h0))?.image?.url;
		const img1 = data.heroCollection?.items.find((hero) => hero?.sys.id.startsWith(h1))?.image?.url;
		const img2 = data.heroCollection?.items.find((hero) => hero?.sys.id.startsWith(h2))?.image?.url;
		const img3 = data.heroCollection?.items.find((hero) => hero?.sys.id.startsWith(h3))?.image?.url;

		try {
			const img = sharp({
				create: {
					width: 650,
					height: 170,
					channels: 4,
					background: { r: 1, g: 1, b: 1, alpha: 0.5 },
				},
			})
				.jpeg()
				.composite([
					{
						input: Buffer.from(await fetch(img0 ?? '').then((r) => r.arrayBuffer())),
						left: 10,
						top: 10,
					},
					{
						input: Buffer.from(await fetch(img1 ?? '').then((r) => r.arrayBuffer())),
						left: 170,
						top: 10,
					},
					{
						input: Buffer.from(await fetch(img2 ?? '').then((r) => r.arrayBuffer())),
						left: 330,
						top: 10,
					},
					{
						input: Buffer.from(await fetch(img3 ?? '').then((r) => r.arrayBuffer())),
						left: 490,
						top: 10,
					},
				]);
			res.contentType('image/jpeg');
			res.end(await img.toBuffer(), 'binary');
		} catch (err) {
			console.error(err);
		}
	})
	.use((req, res) => app.handle(req, res))
	.listen(port, () => {
		console.log(`> App started http://localhost:${port}`);
	});
