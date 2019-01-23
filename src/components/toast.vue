<template></template>

<script>
import 'mint-ui/lib/style.css'
import { Toast } from 'mint-ui'

export default {
  name: 'toast',
  methods: {
    /**
     * @if params === Object
     * message {String} 文本内容
     * position {String} Toast 的位置 默认值middle
     * duration {Number} 持续时间 默认值 3000
     * className {String} Toast 的类名。可以为其添加样式
     * iconClass {String} icon 图标的类名
     */
    showToast(params) {
      Toast(params)
    }
  },
}
</script>