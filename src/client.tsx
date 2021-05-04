import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import routes from './routes';

ensureReady(routes).then((data) =>
	hydrate(
		<BrowserRouter>
			<After data={data} routes={routes} transitionBehavior="instant" />
		</BrowserRouter>,
		document.getElementById('root')
	)
);

if (module.hot) {
	module.hot.accept();
}
