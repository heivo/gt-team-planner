import { asyncComponent } from '@jaredpalmer/after';

export default [
	{
		path: '/:slug',
		component: asyncComponent({
			loader: () => import('./App'),
		}),
	},
	{
		path: '',
		component: asyncComponent({
			loader: () => import('./App'),
		}),
	},
];
