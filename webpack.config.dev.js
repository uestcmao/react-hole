var webpack = require('webpack');
module.exports = {
	entry: {
		index: './index.js'
	},
	//入口文件输出配置
	output: {
		path: 'public',
		filename: 'sapp.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
			query: {
				presets: ['es2015', 'react', 'stage-3']
			}
		}]
	}
};