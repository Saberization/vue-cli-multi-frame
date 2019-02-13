<template>
  <div class="container">
    <mt-header title="Picker">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="mt-content">
      <h5>级联示例</h5>
      <mt-button size="large" @click.native="showPicker3">三级联动示例 ...</mt-button>
      <p>你选择的结果是: 北京市 东城区</p>
    </div>

    <mt-picker
      :pickerData="cityData3"
      ref="picker3"
    ></mt-picker>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";
import Picker from "@components/picker";
import cityData from "@assets/lib/city-data.js";
import cityData3 from "@assets/lib/city.data-3.js";

export default {
  name: "Picker",
  components: {
    "mt-header": Header,
    "mt-button": Button,
    "mt-picker": Picker
  },
  data() {
    return {
      cityData3: cityData3,
      cityData3Result: ""
    };
  },
  methods: {
    showPicker3() {
      this.$refs.picker3.show();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  .mt-content {
    padding: 10px;

    p {
      padding-left: 10px;
      margin-top: 10px;
      text-align: center;
      font-size: 16px;
    }

    h5 {
      font-size: 14px;
      font-weight: 400;
      color: #8f8f94;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    button {
      color: #000;
    }
  }
}
</style>