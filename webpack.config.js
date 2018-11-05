const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(HtmlWebpackPlugin);

console.log('WEBPACK START')
/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {	
	module: {		
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
				resolve: {
					extensions: ['.js', '.jsx'],
				}
			},
			{
				test: /\.css$/,

				use: [
					{
						loader: 'style-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader'
					}
				]
			},
			// {
			// 	test: /\.html$/,
			// 	use: [
			// 	  {
			// 		loader: "html-loader",
			// 		options: { minimize: true }
			// 	  }
			// 	]
			//   }
		]
	},

	entry: {
		app: './src/app.js',
		vendor: './src/vendor.js'
	},

	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'development',
	//devtool:'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			hash: true,
			template: './src/index.html',
			filename: 'index.html'
		}
		),
		new UglifyJSPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},
	 devServer: {
		contentBase: './dist',
		hot: true
	}
};
