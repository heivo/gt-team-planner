import express from 'express';

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
	.use((req, res) => app.handle(req, res))
	.listen(port, () => {
		console.log(`> App started http://localhost:${port}`);
	});
