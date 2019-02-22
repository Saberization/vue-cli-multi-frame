<template>
  <div class="container">
    <mt-header title="Indicator">
      <mt-button icon="back" slot="left">返回</mt-button>
    </mt-header>

    <div class="mt-content">
      <mt-button size="large" @click.native="showWaiting">点击弹出 Indicator</mt-button>
      <mt-button size="large" @click.native="showConfigurationWaiting">可配置 spinner</mt-button>
      <mt-button size="large" @click.native="showTextWaiting">点击弹出带有文字的 Indicator</mt-button>
    </div>

    <mt-indicator ref="waiting"></mt-indicator>
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
  },
  methods: {
    showWaiting() {
      this.$refs.waiting.showWaiting();

      setTimeout(() => {
        this.closeWaiting();
      }, 1300);
    },
    showConfigurationWaiting() {
      this.$refs.waiting.showWaiting({
        text: 'waiting',
        spinnerType: 'fading-circle' // 'snake' 'fading-circle' 'double-bounce' 'triple-bounce'，默认为 'snake'
      });

      setTimeout(() => {
        this.closeWaiting();
      }, 1300);
    },
    showTextWaiting() {
      this.$refs.waiting.showWaiting('带文字的 waiting');

      setTimeout(() => {
        this.closeWaiting();
      }, 1300);
    },
    closeWaiting() {
      this.$refs.waiting.closeWaiting();
    }
  },
};
</script>

<style lang="scss" scoped>
  .mt-content {
    padding-left: 10px;
    padding-right: 10px;

    & > * {
      margin-bottom: 10px;
    }
  }
</style>
