module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',      //按需加载的库名称
        styleLibraryName: 'theme-chalk'  //样式库
      }
    ]
  ]
}
