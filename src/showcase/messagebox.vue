<template>
  <div class="container">
    <mt-header title="Message Box">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="mt-content">
      <mt-button
        size="large"
        @click.native="showAlert"
      >打开 alert 提示框</mt-button>
      <mt-button
        size="large"
        @click.native="showConfirm"
      >打开 confirm 提示框</mt-button>
      <mt-button
        size="large"
        @click.native="showPrompt"
      >打开 prompt 提示框</mt-button>
    </div>
  </div>
</template>

<script>
import Button from "@components/button";
import Header from "@components/header";
import { MessageBox } from "mint-ui";

export default {
  name: "MessageBox",
  components: {
    "mt-button": Button,
    "mt-header": Header
  },
  methods: {
    showAlert() {
      // 方法1：alert 简写
      MessageBox("提示", "操作成功");

      // 方法2：传入一个对象
      // MessageBox({
      //   title: '提示',  // 提示框的标题
      //   message: '操作成功'  // 提示框的内容
      // });
    },

    showConfirm() {
      const Console = console;

      // 方法1：confirm 简写
      MessageBox.confirm("确定执行此操作?", "提示")
        .then(action => {
          // 点击确定按钮触发的函数
          Console.log(action);
        })
        .catch(err => {
          // 点击取消按钮触发的函数
          Console.log(err);
        });

      // 方法2：传入一个对象
      // MessageBox({
      //   title: '提示',  // 提示框的标题
      //   message: '确定执行此操作?',  // 提示框的内容
      //   showConfirmButton: true,  // 是否显示确认按钮 默认为 true
      //   showCancelButton: true,  // 是否显示取消按钮 默认为 false
      //   confirmButtonText: '确定',  // 确认按钮的文本
      //   confirmButtonHighlight: false,  // 是否将确认按钮的文本加粗显示 默认为 false
      //   cancelButtonHighlight: false,  // 是否将取消按钮的文本加粗显示 默认为 false
      //   closeOnClickModal: true  // 是否在点击遮罩时关闭提示光 true (alert 为 false)
      // })
      //   .then(action => {
      //     // 点击确定按钮触发的函数
      //     Console.log(action);
      //   })
      //   .catch(err => {
      //     // 点击取消按钮触发的函数
      //     Console.log(err);
      //   });
    },

    showPrompt() {
      const Console = console;

      // 方法1：prompt 简写
      MessageBox.prompt("请输入姓名", "提示")
        .then(({ value }) => {
          // 点击确定按钮触发的函数
          Console.log(value);
        })
        .catch(err => {
          // 点击取消按钮触发的函数
          Console.log(err);
        });

      // 方法2：传入一个对象
      // MessageBox({
      //   title: "提示", // 提示框的标题
      //   message: "请输入姓名", // 提示框的内容
      //   showConfirmButton: true, // 是否显示确认按钮 默认为 true
      //   showCancelButton: true, // 是否显示取消按钮 默认为 false
      //   confirmButtonText: "确定", // 确认按钮的文本
      //   confirmButtonHighlight: false, // 是否将确认按钮的文本加粗显示 默认为 false
      //   cancelButtonHighlight: false, // 是否将取消按钮的文本加粗显示 默认为 false
      //   closeOnClickModal: true, // 是否在点击遮罩时关闭提示光 true (alert 为 false)
      //   showInput: true, // 是否显示一个输入框，默认为 false,
      //   inputType: 'text', // 输入框的类型 默认为 text,
      //   inputValue: '', // 输入框的值
      //   inputPlaceholder: '' // 输入框的占位符
      // })
      //   .then(action => {
      //     // 点击确定按钮触发的函数
      //     Console.log(action);
      //   })
      //   .catch(err => {
      //     // 点击取消按钮触发的函数
      //     Console.log(err);
      //   });
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