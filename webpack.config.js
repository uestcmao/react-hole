var webpack = require("webpack");
var path = require("path");
module.exports = {
	entry: {
		"app": "./index.js"
	}, //已多次提及的唯一入口文件
	output: {
		path: __dirname + "/src/pub", //打包后的文件存放的地方
		publicPath: "/pub/",
		filename: "[name].js" //打包后输出文件的文件名
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.css$/,
			loader: "style-loader!css-loader?modules"
		}]
	}
}