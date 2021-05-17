import { asyncComponent } from '@jaredpalmer/after';
import App from './App';

export default [
	{
		path: '/:slug',
		component: App,
	},
	{
		path: '',
		component: App,
	},
];
