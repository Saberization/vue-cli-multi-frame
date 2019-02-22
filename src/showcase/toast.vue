<template>
  <div class="container">
    <mt-header title="Toast">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="mt-content">
      <mt-button
        type="default"
        size="large"
        @click.native="showToast"
      >点击弹出 Toast</mt-button>
      <mt-button
        type="default"
        size="large"
        @click.native="showIconToast"
      >点击弹出带有 icon 的 Toast</mt-button>
      <mt-button
        type="default"
        size="large"
        @click.native="customToast"
      >自定义 Toast 位置</mt-button>
    </div>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";
import { Toast } from "mint-ui";

export default {
  name: "toast",
  components: {
    "mt-button": Button,
    "mt-header": Header
  },
  methods: {
    showToast() {
      Toast('操作成功');
    },

    showIconToast() {
      Toast({
        message: '操作成功',
        iconClass: 'indexmintui mintui-toastsuccess'
      });
    },

    customToast() {
      Toast({
        message: '操作成功',
        position: 'bottom' // top、middle、bottom
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.mt-content {
  padding-left: 10px;
  padding-right: 10px;

  & > * {
    margin-bottom: 10px;
  }
}
</style>
