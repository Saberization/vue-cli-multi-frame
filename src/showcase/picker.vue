<template>
  <div class="container">
    <mt-header title="Picker">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="mt-content">
      <mt-picker :pickerData="cityData3"></mt-picker>
    </div>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";
import Picker from "@components/picker";
import cityData from "@assets/lib/city-data.js";
import cityData3 from "@assets/lib/city.data-3.js";

export default {
  name: 'Picker',
  components: {
    "mt-header": Header,
    "mt-button": Button,
    "mt-picker": Picker
  },
  data() {
    return {
      cityData3: cityData3
    };
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>