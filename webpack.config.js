//webpack配置文件
var webpack = require("webpack");
var path = require("path")
module.exports = {
	//入口 导入文件
	entry: './index.js',
	//出口 导出文件
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	//loader就是为了处理非JS类型的文件
	module: {
		rules: [{
			test: /\.txt$/,
			use: 'raw-loader'
		}, {
			test: /\.html$/,
			use: 'html-loader'
		}, {
			test: /\.json$/,
			use: 'json-loader'
		}, {
			test: /\.(png|jpg|gif)$/,
			use: 'url-loader'
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.vue$/,
			use: 'vue-loader'
		}, {
			test: /\.scss$/,
			use: 'sass-loader'
		}, {
         test: /\.less$/,
         use: 'less-loader'
      }]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	}
};