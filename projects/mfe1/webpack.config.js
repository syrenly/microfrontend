const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
	name: "mfe1",
	exposes: {
		"./Component": "./projects/mfe1/src/app/flights/flights-search/flights-search.component",
	},
	shared: {
		...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
	},
});

