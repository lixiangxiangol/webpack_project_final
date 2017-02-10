'use strict';

var webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map',
    entry: "./app/main.js", //已多次提及的唯一入口文件
    output: {
        path: "./public", //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    module: { //在配置文件里添加JSON loader
        loaders: [{
            test: /\.json$/,
            loader: "json-loader"
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules' //添加对样式表的处理
        }]
    },
    plugins: [new webpack.LoaderOptionsPlugin({
        options: {
            postcss: function postcss() {
                return [require('autoprefixer')];
            }
        }
    }), new webpack.BannerPlugin("Copyright Flying Unicorns inc.")],
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    }
};

//# sourceMappingURL=webpack.config-compiled.js.map