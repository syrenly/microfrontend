const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
	name: "mfe1",
	exposes: {
		"./routes": "./projects/mfe1/src/app/flights/flights.routes",
		"./HotelComponent": "./projects/mfe1/src/app/hotel/hotel.component",
	},
	shared: {
		...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
	},
});

