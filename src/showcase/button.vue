<template>
  <div class="container">
    <mt-header title="Button">
      <mt-button icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="mt-content">
      <div class="page-button-group">
        <mt-button type="default" size="large">default</mt-button>
        <mt-button type="primary" size="large">primary</mt-button>
        <mt-button type="danger" size="large">danger</mt-button>
      </div>

      <div class="page-button-group">
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
      </div>

      <div class="page-button-group">
        <mt-button type="default" size="small">default</mt-button>
        <mt-button type="primary" size="small">primary</mt-button>
        <mt-button type="danger" size="small">danger</mt-button>
      </div>

      <div class="page-button-group">
        <mt-button disabled size="large">default</mt-button>
        <mt-button disabled type="primary" size="large">primary</mt-button>
        <mt-button plain size="large">default</mt-button>
        <mt-button plain type="danger" size="large">danger</mt-button>
      </div>

      <div class="page-button-group">
        <mt-button icon="more">按钮带图标</mt-button>
        <mt-button>
          <img src="./images/100x100.png" height="20" width="20" alt="" slot="icon">
          带自定义图标
        </mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@components/header';
import Button from "@components/button";

export default {
  name: "Button",
  components: {
    'mt-button': Button,
    'mt-header': Header
  }
};
</script>

<style lang="scss" scoped>
  .mt-content {
    padding-left: 10px;
    padding-right: 10px;

    .page-button-group > * {
      margin-bottom: 15px;
    }

    .mint-button--normal,
    .mint-button--small {
      margin-right: 5px;
    }
  }
</style>
