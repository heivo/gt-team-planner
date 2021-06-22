import { asyncComponent } from '@jaredpalmer/after';
import App from './App';

export default [
	{
		path: '/:encodedState',
		component: App,
	},
	{
		path: '',
		component: App,
	},
];
