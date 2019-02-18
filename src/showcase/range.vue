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
      <mt-cell title="默认" :isLink="false" :label="'value: ' + value1">
        <mt-range v-model="value1"></mt-range>
      </mt-cell>

      <mt-cell title="预设 Value" :isLink="false" :label="'value: ' + value2">
        <mt-range v-model="value2"></mt-range>
      </mt-cell>

      <mt-cell title="左右文字" :isLink="false" :label="'value: ' + value3">
        <mt-range v-model="value3">
          <div slot="start">0</div>
          <div slot="end">100</div>
        </mt-range>
      </mt-cell>

      <p>自定义</p>
      <mt-cell title="定义步长" :isLink="false" :label="'value: ' + value4">
        <mt-range v-model="value4" :step="10"></mt-range>
      </mt-cell>

      <mt-cell title="定义区间" :isLink="false" :label="'value: ' + value5">
        <mt-range v-model="value5" :min="10" :max="90"></mt-range>
      </mt-cell>

      <mt-cell title="定义线宽" :isLink="false" :label="'value: ' + value6">
        <mt-range v-model="value6" :barHeight="4"></mt-range>
      </mt-cell>

      <mt-cell title="设置为无效" :isLink="false" :label="'value: ' + value7">
        <mt-range v-model="value7" :disabled="true"></mt-range>
      </mt-cell>

      <p>场景举例</p>
      <mt-cell title="字体大小" :isLink="false" :label="'value: ' + value8">
        <mt-range v-model="value8" :step="2" :min="14" :max="22">
          <div slot="start">14</div>
          <div slot="end" style="font-size: 22px;">22</div>
        </mt-range>
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
      value1: 0,
      value2: 20,
      value3: 0,
      value4: 0,
      value5: 10,
      value6: 0,
      value7: 0,
      value8: 14
    }
  }
};
</script>

<style lang="scss" scoped>
  p {
    font-size: 14px;
    margin-top: 15px;
    padding-left: 15px;
    margin-bottom: 10px;
  }

  .mint-cell /deep/ .mint-cell-value {
    flex: 2.5;
  }

  .mint-cell .mt-range {
    width: 100%;
  }
</style>