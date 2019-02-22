<template>
  <div class="container">
    <mt-header title="Progress">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="mt-content">
      <mt-cell
        title="默认"
        :isLink="false"
      >
        <mt-progress></mt-progress>
      </mt-cell>

      <mt-cell
        title="设置 value"
        :isLink="false"
      >
        <mt-progress :value="30"></mt-progress>
      </mt-cell>

      <mt-cell
        title="左右文字"
        :isLink="false"
      >
        <mt-progress :value="30">
          <div slot="start">0%</div>
          <div slot="end">100%</div>
        </mt-progress>
      </mt-cell>

      <mt-cell
        title="定义线宽"
        :isLink="false"
      >
        <mt-progress
          :value="80"
          :bar-height="5"
        >
        </mt-progress>
      </mt-cell>

      <mt-button
        size="large"
        type="primary"
        :class="{ uploadBtn: true }"
        @click.native="upload"
      >上传文件</mt-button>
      <mt-progress
        :value="value"
        :class="{ uploadProgress: true }"
        v-if="showProgress"
      >
        <div slot="end">{{ value }}%</div>
      </mt-progress>
    </div>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";
import Progress from "@components/progress";
import Cell from "@components/cell";
import { Toast } from "mint-ui";

export default {
  name: "Progress",
  components: {
    "mt-header": Header,
    "mt-button": Button,
    "mt-progress": Progress,
    "mt-cell": Cell
  },
  data() {
    return {
      value: 0,
      showProgress: false
    };
  },
  methods: {
    upload() {
      this.showProgress = true;

      const timmer = setInterval(() => {
        if (this.value === 100) {
          clearInterval(timmer);
          this.showProgress = false;
          Toast({
            message: "上传成功",
            position: "bottom"
          });
        } else {
          this.value++;
        }
      }, 10);
    }
  }
};
</script>

<style lang="scss" scoped>
.mt-content {
  .mint-cell /deep/ .mint-cell-value {
    flex: 2.5;
  }

  .mt-progress {
    width: 100%;
  }

  .uploadBtn {
    width: 86%;
    margin: 30px auto auto auto;
  }

  .uploadProgress {
    width: 86%;
    margin: 5px auto auto auto;
  }
}
</style>
