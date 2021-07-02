/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import ogImgMiddleware from './ogImgMiddleware';

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

// This will extract the env during production execution, PORT will not be inlined in build output.
const getRuntimeEnv = (c: string) => process.env[c];

const port = parseInt(getRuntimeEnv('PORT') ?? '3000', 10);

export default express()
	.use('/img/:encodedState', ogImgMiddleware)
	.use((req, res) => app.handle(req, res))
	.listen(port, () => {
		console.log(`> App started http://localhost:${port}`);
	});
