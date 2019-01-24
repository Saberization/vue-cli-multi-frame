<template>
  <div class="container">
    <mt-header title="下拉刷新">
      <mt-button icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="container-body">
      <mt-pullrefresh>
        <li v-for="(v, i) in list" :key="i" class="list-item">
          <mt-cell :title="v.text"></mt-cell>
        </li>
      </mt-pullrefresh>
    </div>
  </div>
</template>

<script>
import Pullrefresh from "@components/pullrefresh";
import Header from "@components/header";
import Button from '@components/button';
import Cell from '@components/cell';

export default {
  name: "Pullrefresh",
  components: {
    "mt-pullrefresh": Pullrefresh,
    "mt-header": Header,
    "mt-button": Button,
    "mt-cell": Cell
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    for (let i = 0, len = 100; i < len; i++) {
      this.list.push({
        text: '列表' + i,
        index: i
      });
    }
  },
};
</script>

<style lang="scss">
  .list-item {
    padding-left: 10px;
    background-color: #fff;
  }
</style>