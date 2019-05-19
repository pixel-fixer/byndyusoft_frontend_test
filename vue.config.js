module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/byndyusoft/' : '/',
    configureWebpack: {
        optimization: {
          splitChunks: false
        }
     }
  }