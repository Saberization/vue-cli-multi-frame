export default {
  /**
   * 打开页面
   * @param {String} url 要打开的地址
   */
  openPage(url) {
    const location = window.location
    let pathname = location.pathname

    if (typeof pathname === 'string') {
      let pathArr = pathname.split('/')

      pathArr.length = pathArr.length - 1
      location.href = location.protocol + '//' + location.host + pathArr.join('/') + '/' + url
    }
  }
}