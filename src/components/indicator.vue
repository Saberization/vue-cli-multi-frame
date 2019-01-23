<template>
  <mt-indicator></mt-indicator>
</template>

<script>
import "mint-ui/lib/style.css";
import { Indicator } from "mint-ui";

export default {
  name: "Indicator",
  component: {
    "mt-indicator": Indicator
  },
  methods: {
    /**
     * @if params === Object
     * text {String} 文本内容
     * spinnerType {String} 加载图标的类型 'snake' 'fading-circle' 'double-bounce' 'triple-bounce'，默认为 'snake'
     */
    showWating(params) {
      Indicator.open(params);
    },

    closeWaiting() {
      Indicator.close();
    }
  }
};
</script>