<template>
  <div class="container">
    <mt-header title="TabPullRefresh">
      <mt-button icon="back" slot="left">返回</mt-button>
    </mt-header>

    <div class="mt-content">
      <mt-navbar v-model="selected">
        <mt-tab-item id="0">tab1</mt-tab-item>
        <mt-tab-item id="1">tab2</mt-tab-item>
        <mt-tab-item id="2">tab3</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="selected" style="top: 100px;" :swipeable="true">
        <mt-tab-container-item id="0">
          <mt-pulltorefresh ref="refresh1">
            <ul id="listdata1">
              <li v-for="(v, i) in list" :key="i">
                <mt-cell :title="v.title"></mt-cell>
              </li>
            </ul>
          </mt-pulltorefresh>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";
import Cell from "@components/cell";
import PullToRefresh from "@components/pulltorefresh";
import { Navbar, TabItem } from "mint-ui";
import { TabContainer, TabContainerItem } from "mint-ui";

export default {
  name: "TabPullrefresh",
  components: {
    "mt-header": Header,
    "mt-button": Button,
    "mt-navbar": Navbar,
    "mt-tab-item": TabItem,
    "mt-pulltorefresh": PullToRefresh,
    "mt-cell": Cell,
    "mt-tab-container": TabContainer,
    "mt-tab-container-item": TabContainerItem
  },
  data() {
    return {
      selected: "0",
      list: []
    };
  },
  mounted() {
    const that = this;

    this.$refs.refresh1.PullToRefresh({
      // 请求地址 url
      url: "http://yapi.demo.qunar.com/mock/43176/mock/getlist",
      // 请求的数据，为函数时请将数据返回出去
      dataRequest(currPage) {
        return {
          token: "Aa7D5CA7-6D0d-BB60-9F95-e34EDC7eC0E7",
          params: {
            pageIndex: currPage,
            pageSize: 10,
            keyword: ''
          }
        };
      },
      success({ custom }, pageIndex) {
        if (pageIndex === 0) {
          that.list = custom.infolist;
        } else {
          custom.infolist.forEach(e => {
            that.list.push(e);
          });
        }
      }
    });
  },
};
</script>

<style scoped>
  .mt-content {
    padding-top: 40px;
  }
</style>