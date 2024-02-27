const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
	name: "mfe1",
	exposes: {
		"./routes": "./projects/mfe1/src/app/flights/flights.routes",
		"./Component": "./projects/mfe1/src/app/app.component.ts",
		"./Component": "./projects/mfe1/src/app/flights/flights-search/flights-search.component",
	},
	shared: {
		...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
	},
});

