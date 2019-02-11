<template>
  <div class="container">
    <mt-header title="Action sheet">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="mt-content">
      <mt-button
        size="large"
        @click.native="showAction"
      >点击上拉 action sheet</mt-button>
      <mt-button
        size="large"
        @click.native="showCancelAction"
      >不带取消按钮的 action sheet</mt-button>
    </div>

    <mt-actionsheet
      :actions="actions"
      :success="choiceCallback"
      ref="actionsheet1"
    ></mt-actionsheet>
    <mt-actionsheet
      :actions="actions"
      cancelText=""
      :success="choiceCallback"
      ref="actionsheet2"
    ></mt-actionsheet>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";
import Actionsheet from "@components/actionsheet";

export default {
  name: "ActionSheet",
  components: {
    "mt-header": Header,
    "mt-button": Button,
    "mt-actionsheet": Actionsheet
  },
  data() {
    return {
      actions: ["逢坂大河", "远坂凛", "Saber"],
      showVisible: false
    };
  },
  methods: {
    showAction() {
      this.$refs.actionsheet1.show();
    },

    showCancelAction() {
      this.$refs.actionsheet2.show();
    },

    // 选择后触发此函数
    choiceCallback(value) {
      const Console = console;

      Console.log(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.mt-content {
  padding: 10px;

  .mint-button {
    margin-bottom: 15px;
  }
}
</style>