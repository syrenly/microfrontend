const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
	name: "mfe2",

	exposes: {
		"./routes": "./projects/mfe2/src/app/bookings/bookings.routes",
	},

	shared: {
		...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
	},
});
