/* eslint-disable @typescript-eslint/no-non-null-assertion */
import express from 'express';
import { render } from '@jaredpalmer/after';
import routes from './routes';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
// const chunks = require(process.env.RAZZLE_CHUNKS_MANIFEST!);
// const chunks = require(process.env.RAZZLE_ASSETS_MANIFEST!.replace('assets.json', 'chunks.json'));

const server = express()
	.disable('x-powered-by')
	.use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
	.get('/*', async (req, res) => {
		try {
			const html = await render({
				req,
				res,
				routes,
				assets,
				chunks: {},
			});
			res.send(html);
		} catch (error) {
			console.error(error);
			res.json({ message: error.message, stack: error.stack });
		}
	});

export default server;
