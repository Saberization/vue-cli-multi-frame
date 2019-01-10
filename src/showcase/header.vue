<template>
  <div class="container">
    <mt-header title="固定在顶部" :fixed="!fixed" :hasHeaderBack="hasHeaderBack"></mt-header>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈" :fixed="fixed"></mt-header>
    <mt-header title="多个按钮" :hasHeaderRight="hasHeaderRight" :fixed="fixed"></mt-header>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";

export default {
  name: "Header",
  props: {
    title: String
  },
  components: {
    "mt-header": Header,
    "mt-button": Button
  },
  data() {
    return {
      hasHeaderBack: false,
      fixed: false,
      hasHeaderRight: true
    }
  }
};
</script>

<style lang="scss">
  .mint-header {
    margin-top: 50px;

    &:first-child {
      margin-top: 0;
    }
  }
</style>