'use strict';

/**
 * https://gist.github.com/mattlubner/4a3eff31455180e8dac8ad8cf1b17ed1
 *
 * The passed list of environment variables will be removed from the nodejs
 * instance of webpack.DefinePlugin, so they can be resolved dynamically at
 * runtime.
 * @example
 * // Include this in the plugins array exported by razzle.config.js
 * const nodeRuntimeVarsPlugin = createRazzlePluginNodeRuntimeVars('PORT', 'HOST');
 * @param  {String} ...nodeRuntimeVars
 * @return {Function}
 */
const createRazzlePluginNodeRuntimeVars =
	(...nodeRuntimeVars) =>
	(config, { target, dev }, webpack) => {
		if (target !== 'node') {
			// Don't change dotenv build-time behavior for the client bundle
			return config;
		}
		const definePluginIndex = config.plugins.findIndex(
			(plugin) => plugin instanceof webpack.DefinePlugin && plugin.definitions
		);
		if (typeof definePluginIndex !== 'undefined') {
			const nodeRunetimeVarsBlacklist = nodeRuntimeVars.map((name) => `process.env.${name}`);
			const filteredDefinitions = _.omitBy(config.plugins[definePluginIndex].definitions, (value, key) =>
				nodeRunetimeVarsBlacklist.includes(key)
			);
			config.plugins[definePluginIndex] = new webpack.DefinePlugin(filteredDefinitions);
		}
		return config;
	};

export default createRazzlePluginNodeRuntimeVars;

module.exports = {
	plugins: ['scss', createRazzlePluginNodeRuntimeVars('PORT')],
};
