// 这是webpack的配置文件
// 在这里可以直接写node代码

var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
    entry:path.resolve(__dirname, './src/index.js') , // 入器
    output:{
        path:'dist', // 输出目录
        filename:'bundle.js', // 输出的文件名
    },
    module:{
        loaders:[
            {
                test:/\.less$/,
                exclude:/node_modules/, // 禁止webpack去这个目录中查找
                loader:'style!css!less'  // -loader可以不写
            },
            {
                test:/\.js$/,
                exclude:/node_modules/, // 禁止webpack去这个目录中查找
                loader:'babel-loader',  // -loader可以省略
                // `npm install babel-loader --save-dev`
                query:{
                    presets:['react','es2015']
                    // `npm install babel-preset-es2015`
                    // `npm install babel-preset-react`
                }
            }
        ]
    },
    // 插件
    plugins:[
        new htmlWebpackPlugin({
            // 生成的html的文件名
            filename:'index.html',
            template:'./src/index.html' //要处理的html
        })
    ]
}

// loaders
// 1. less-loader 转换less语法 
//  1.1 `npm install less-loader --save-dev`
//      1.1.1 `npm install less --save-dev`
//  1.2 `npm install css-loader --save-dev`
//  1.3 `npm install style-loader --save-dev`

// 2.babel-loader 转换其他语法为es5语法 
//  2.1 `npm install babel-loader --save-dev`
//      2.1.1 `npm install babel-core --save-dev`  
//  2.2 `npm install babel-preset-es2015 --save-dev`  // 转换es6为es5
//  2.3  `npm install babel-preset-react --save-dev`  // 转换react为es5
// webpack 2.3 需要
//   `npm install webpack --save-dev`


// plugins
//  1. html-webpack-plugin  可以把html生成到输出目录,并且自动引用打包后的文件
//    `npm install html-webpack-plugin --save-dev`
