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
      <mt-button size="large" @click.native="showPicker2">二级联动示例 ...</mt-button>
      <p>你选择的结果是: {{ cityData2Result }}</p>
      <mt-button size="large" @click.native="showPicker3">三级联动示例 ...</mt-button>
      <p>你选择的结果是: {{ cityData3Result }}</p>
    </div>

    <mt-picker
      :pickerData="cityData"
      ref="picker2"
      @confirm="pickerCity2Confirm"
      @cancel="pickerCancel"
    >城市选择</mt-picker>

    <mt-picker
      :pickerData="cityData3"
      ref="picker3"
      @confirm="pickerCity3Confirm"
      @cancel="pickerCancel"
    >城市选择</mt-picker>
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
      cityData: cityData,
      cityData3: cityData3,
      cityData3Result: "",
      cityData2Result: ""
    };
  },
  methods: {
    showPicker2() {
      this.$refs.picker2.show();
    },

    showPicker3() {
      this.$refs.picker3.show();
    },

    pickerCity2Confirm(item) {
      this.cityData2Result = item[0].text + ' ' + item[1].text;
    },

    pickerCity3Confirm(item) {
      this.cityData3Result = item[0].text + ' ' + item[1].text + ' ' + item[2].text;
    },

    // 点击取消按钮
    pickerCancel() {
      const Console = console;

      Console.log('click cencel');
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
      font-size: 16px;
      margin-bottom: 25px;
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
      margin-bottom: 10px;
    }
  }
}
</style>