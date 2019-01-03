import Util from '@util/'

const getScreenApps = function () {
  return Util.request({
      url: 'http://yapi.demo.qunar.com/mock/32711/getCommonSystem',
      data: '',
      isAutoProxy: false
    })
}

export {
  getScreenApps
}