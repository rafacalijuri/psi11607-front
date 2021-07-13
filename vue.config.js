module.exports = {
  publicPath: './',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://canais.caixa'
  }
}
