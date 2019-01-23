<template>
  <div class="container">
    <mt-header title="Indicator">
      <mt-button icon="back" slot="left">返回</mt-button>
    </mt-header>

    <div class="container-body">
      <mt-button size="large">点击弹出 Indicator</mt-button>
      <mt-button size="large">可配置 spinner</mt-button>
      <mt-button size="large">点击弹出带有文字的 Indicator</mt-button>
    </div>
  </div>
</template>

<script>
import Button from '@components/button';
import Header from '@components/header';
import Indicator from '@components/indicator';

export default {
  name: "Indicator",
  components: {
    "mt-button": Button,
    "mt-header": Header,
    "mt-indicator": Indicator
  }
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