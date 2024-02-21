const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
	name: "mfe1",

	exposes: {
		"./Module": "./projects/mfe2/src/app/bookings/bookings.module.ts",
	},

	shared: {
		...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
	},
});
