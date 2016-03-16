module.exports = {
	context: __dirname + "/components",
	entry: "./main_component.js",
	loaders: ["react-hot", "babel-loader"],

	output: {
		filename: "main_component.js",
		path: __dirname + "/prod",
	},
}
