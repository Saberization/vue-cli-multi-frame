<template>
  <div class="container">
    <mt-header title="固定在顶部" :fixed="fixed"></mt-header>

    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <mt-button icon="back" slot="left">返回</mt-button>
    </mt-header>

    <mt-header title="左侧仅文字">
      <mt-button slot="left">返回</mt-button>
    </mt-header>

    <mt-header title="右侧仅文字">
      <mt-button slot="right" @click.native="rightBtn">分享</mt-button>
    </mt-header>

    <mt-header title="仅图标">
      <mt-button slot="left" icon="back"></mt-button>
      <mt-button slot="right" icon="more" @click.native="rightBtn"></mt-button>
    </mt-header>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";
import { MessageBox } from "mint-ui";

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
      fixed: true,
      hasHeaderRight: true
    }
  },
  methods: {
    rightBtn() {
      MessageBox('提示', 'click');
    }
  },
};
</script>

<style lang="scss" scoped>
  .mint-header {
    margin-top: 45px;

    &:first-child {
      margin-top: 0;
    }

    &:nth-child(2) {
      top: 20px;
    }

    &:nth-child(3) {
      top: 80px;
    }

    &:nth-child(4) {
      top: 140px;
    }

    &:last-child {
      top: 200px;
    }
  }
</style>
