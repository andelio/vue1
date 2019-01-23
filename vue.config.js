module.exports={
    css: {
      extract:false,//css分离 生产环境下是 true，开发环境下是 false
      //modules: true, //开启css模块化
      loaderOptions:{//向 CSS 相关的 loader 传递选项
        css: {
          // 这里的选项会传递给 css-loader
        },
        postcss: {
          // 这里的选项会传递给 postcss-loader
        }
      }
    },
    devServer:{
      // proxy: 'http://localhost:3000',//告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://localhost:4000。
      // host: '0.0.0.0',
      port: 8003,
      open: true,
      // https: false,
      // proxy: null, // string | Object
    },
    lintOnSave:false, //关闭esling警告
    lintOnSave: process.env.NODE_ENV !== 'production', //生产构建时禁用
    productionSourceMap:false, //打包不携带map文件
  }