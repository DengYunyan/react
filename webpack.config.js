const path = require("path");
const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { AutoWebPlugin } = require('web-webpack-plugin');
const proxy = require("./proxy");
 
// 使用AutoWebPlugin，自动寻找 pages 目录下的所有目录，把每一个目录看成一个单页应用
const autoWebPlugin = new AutoWebPlugin(path.resolve(__dirname, `./src/pages`), {
  template: './template.html', // HTML 模版文件所在的文件路径
});
 
var config = {
  mode:"development",
  // AutoWebPlugin 会找为寻找到的所有单页应用，生成对应的入口配置，
  // autoWebPlugin.entry 方法可以获取到生成入口配置
  entry: autoWebPlugin.entry({
    // 这里可以加入你额外需要的 Chunk 入口
  }),
  output: {
    filename: '[name].[hash:8].js',// 给输出的文件名称加上 hash 值
    path: path.resolve(__dirname, './static'),
  },
  module:{
    rules:[{
            test:/\.(jsx|js)$/,
               use:{
               loader:'babel-loader',
               options:{
                   presets:[
                       "es2015","react"
                   ]
               }
           },
           exclude:/node_modules/
        },{
            test:/\.css$/,
            use:["style-loader","css-loader"]
        },
        {
            test:/\.less$/,
            use:["style-loader","css-loader","less-loader"]
        },{
            test:/\.(png|jpg|gif)$/,
            use:[{
                loader:'url-loader',
                options:{ 
                    limit:50000,
                    outputPath:'images'
                }
            }]
        }
    ]
},
resolve:{
    extensions: ['.js','.jsx','.json'],
    alias:{
        "@router":path.resolve("src/router"),
        "@components":path.resolve("src/components"),
        "@pages":path.resolve("src/pages"),
        "@assets":path.resolve("src/assets"),
        "@common":path.resolve("src/common")
    }
},
  plugins: [
    new CleanWebpackPlugin("static/*.*",{
        root:__dirname,
        verbose:true,
        dry:false
    }),
    // 单页面配置
    // new HtmlWebpackPlugin({
    //     title:"DENGYUNYAN",
    //     template:"./src/index.html",
    //     filename:"./index.html",
    //     // favicon:"",
    //     hash:true,
    //     showErrors:true,
    //     minify:{
    //         removeComments:true, // 去除注释
    //         collapseWhitespace:true, // 去除空格
    //         removeAttributeQuotes:true // 去除引号
    //     }
    // }),
    autoWebPlugin,
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    host:"localhost",
    port:"8888",
    open:true,
    hot:true,
    compress:true, // 服务端压缩
  }
};

// 配置代理
config.devServer.proxy = proxy;

module.exports = config;