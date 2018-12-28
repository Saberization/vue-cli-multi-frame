module.exports = {
  // 生产环境
  build: {
    // 部署应用包时的基本 URL
    baseUrl: '/',
    // 生产环境构建文件的目录
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: '',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: 'index.html',
    // 生成文件名后面是否带 hash 值
    filenameHashing: true,
    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
    lintOnSave: true,
    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: false,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    transpileDependencies: [],
    // 是否生成 SourceMap
    productionSourceMap: true,
    // 是否设置 link script 标签中的 crossorigin 属性
    crossorigin: undefined,
    // 是否设置 link script 标签上启用 SRI
    integrity: false,
    // 参数会通过 webpack-merge 合并到最终配置里
    configureWebpack: {}
  },

  // 开发环境
  dev: {
    // 部署应用包时的基本 URL
    baseUrl: '/',
    // 生产环境构建文件的目录
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: '',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: 'index.html',
    // 生成文件名后面是否带 hash 值
    filenameHashing: true,
    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
    lintOnSave: true,
    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: false,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    transpileDependencies: [],
    // 是否生成 SourceMap
    productionSourceMap: false,
    // 是否设置 link 标签中的 crossorigin 属性
    crossorigin: undefined,
    // 是否设置 link script 标签上启用 SRI，如果构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性
    integrity: false,
    // 参数会通过 webpack-merge 合并到最终配置里
    configureWebpack: {}
  }
}