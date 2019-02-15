<template>
  <div class="container">
    <mt-header title="Range">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="mt-body">
      <p>基本功能</p>
      <mt-cell title="默认" :isLink="false" :label="'value: ' + value">
        <mt-range v-model="value"></mt-range>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import Button from "@components/button";
import Header from "@components/header";
import Range from "@components/range";
import Cell from "@components/cell";

export default {
  name: "Range",
  components: {
    "mt-button": Button,
    "mt-header": Header,
    "mt-range": Range,
    "mt-cell": Cell
  },
  data() {
    return {
      value: 0
    }
  }
};
</script>

<style lang="scss" scoped>
  p {
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding-left: 15px;
  }

  .mint-cell /deep/ .mint-cell-value {
    flex: 2.5;
  }

  .mint-cell .mt-range {
    width: 100%;
  }
</style>