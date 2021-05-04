import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './App';

let assets: any;

const syncLoadAssets = () => {
	assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const cssLinksFromAssets = (assets: any, entrypoint: string) => {
	return assets[entrypoint]
		? assets[entrypoint].css
			? assets[entrypoint].css.map((asset: any) => `<link rel="stylesheet" href="${asset}">`).join('')
			: ''
		: '';
};

const jsScriptTagsFromAssets = (assets: any, entrypoint: string, extra = '') => {
	return assets[entrypoint]
		? assets[entrypoint].js
			? assets[entrypoint].js.map((asset: any) => `<script src="${asset}"${extra}></script>`).join('')
			: ''
		: '';
};

export const renderApp = (req: express.Request, res: express.Response) => {
	const context: any = {};

	const markup = renderToString(
		<StaticRouter context={context} location={req.url}>
			<App />
		</StaticRouter>
	);

	if (context.url) {
		return { redirect: context.url };
	} else {
		const html =
			// prettier-ignore
			`<!doctype html>
				<html lang="en">
				<head>
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta charSet='utf-8' />
					<title>GT Party Builder</title>
					<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5" />
					<meta name="theme-color" content="#000000" />
					${cssLinksFromAssets(assets, 'client')}
				</head>
				<body>
					<noscript>You need to enable JavaScript to run this app.</noscript>
					<div id="root">${markup}</div>
					${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
				</body>
			</html>`;

		return { html };
	}
};

const server = express()
	.disable('x-powered-by')
	.use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
	.get('/*', (req: express.Request, res: express.Response) => {
		const { html = '', redirect = false } = renderApp(req, res);
		if (redirect) {
			res.redirect(redirect);
		} else {
			res.send(html);
		}
	});

export default server;
