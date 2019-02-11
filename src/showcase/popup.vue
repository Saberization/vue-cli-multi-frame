<template>
  <div class="container">
    <mt-header title="Popup">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="mt-content">
      <mt-button>中间弹出 popup</mt-button>
      <mt-button>上侧弹出 popup</mt-button>
      <mt-button>右侧弹出 popup</mt-button>
      <mt-button>下侧弹出 popup</mt-button>
    </div>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";

export default {
  name: 'Popup',
  components: {
    "mt-header": Header,
    "mt-button": Button
  }
}
</script>

<style lang="scss" scoped>
  .mt-content {
  padding: 10px;

  .mint-button {
    margin-bottom: 15px;
  }
}
</style>