<template>
  <div class="container">
    <mt-header title="Toast">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="container-body">
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

    <mt-toast ref="toast"></mt-toast>
  </div>
</template>

<script>
import Header from "@components/header";
import Toast from "@components/toast";
import Button from "@components/button";

export default {
  name: "toast",
  components: {
    "mt-toast": Toast,
    "mt-button": Button,
    "mt-header": Header
  },
  methods: {
    showToast() {
      this.$refs.toast.showToast('操作成功');
    },

    showIconToast() {
      this.$refs.toast.showToast({
        message: '操作成功',
        iconClass: 'indexmintui mintui-toastsuccess'
      });
    },

    customToast() {
      this.$refs.toast.showToast({
        message: '操作成功',
        position: 'bottom'
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.container-body {
  padding: 10px;

  & > * {
    margin-bottom: 10px;
  }
}
</style>