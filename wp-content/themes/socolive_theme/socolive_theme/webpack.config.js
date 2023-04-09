const path = require("path");
console.log(__dirname);
console.log(path.resolve(__dirname, 'dist'));
module.exports = {
	mode: 'development',
	entry: './assets/js/app.js',
	output: {
	  filename: 'bundle.js',
	  path: path.resolve(__dirname, 'dist'),
	},
	// devServer: {
	// // path: path.join(__dirname, 'dist'),
	// 	//   compress: true,
	//   port: 8080,
	// },
	module: {
	  rules: [
		{
		  test: /\.js$/,
		  exclude: /node_modules/,
		  use: {
			loader: 'babel-loader',
			options: {
			  presets: [
				[
				  '@babel/preset-env',
				  {
					targets: {
					  node: 'current',
					},
				  },
				],
			  ],
			  plugins: ['@babel/plugin-transform-modules-commonjs'],
			},
		  },
		},
	  ],
	},
	watch:true
  };