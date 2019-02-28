<template>
  <div class="container">
    <mt-header title="Navbar">
      <mt-button
        slot="left"
        icon="back"
      >返回</mt-button>
    </mt-header>

    <div class="mt-content">
      <mt-navbar v-model="selected">
        <mt-tab-item id="0">选项一</mt-tab-item>
        <mt-tab-item id="1">选项二</mt-tab-item>
        <mt-tab-item id="2">选项三</mt-tab-item>
      </mt-navbar>

      <mt-cell
        title="当前选中"
        :class="{ cut: true }"
      > {{ selected }} </mt-cell>

      <mt-tab-container
        v-model="selected"
        :swipeable="true"
        style="top: 110px;"
      >
        <mt-tab-container-item id="0">
          <mt-cell
            v-for="v in 12"
            :key="v"
            :title="'内容' + v"
          ></mt-cell>
        </mt-tab-container-item>

        <mt-tab-container-item id="1">
          <mt-cell
            v-for="v in 12"
            :key="v"
            :title="'测试' + v"
          ></mt-cell>
        </mt-tab-container-item>

        <mt-tab-container-item id="2">
          <mt-cell
            v-for="v in 12"
            :key="v"
            :title="'选项' + v"
          ></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";
import Cell from "@components/cell";
import { Navbar, TabItem } from "mint-ui";
import { TabContainer, TabContainerItem } from "mint-ui";

export default {
  name: "Navbar",
  components: {
    "mt-header": Header,
    "mt-button": Button,
    "mt-cell": Cell,
    "mt-navbar": Navbar,
    "mt-tab-item": TabItem,
    "mt-tab-container": TabContainer,
    "mt-tab-container-item": TabContainerItem
  },
  data() {
    return {
      selected: "0"
    };
  }
};
</script>

<style scoped>
.cut {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
