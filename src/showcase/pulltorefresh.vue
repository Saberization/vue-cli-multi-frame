<template>
  <div class="container">
    <mt-header title="PullToRefresh">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>
    <div class="container-body">
      <searchbar @enter="enterSearch"></searchbar>
      <mt-pulltorefresh ref="refresh">
        <ul>
          <li
            v-for="(v, i) in list"
            :key="i"
          >
            <mt-cell :title="v.title"></mt-cell>
          </li>
        </ul>
      </mt-pulltorefresh>
    </div>
  </div>
</template>

<script>
import { getRefreshList } from "@model/";
import Header from "@components/header";
import Button from "@components/button";
import Cell from "@components/cell";
import PullToRefresh from "@components/pulltorefresh";
import Searchbar from "@components/searchbar";

// 重新赋值避免 ESLINT 报错
const Console = console;

export default {
  name: "PullToRefresh",
  components: {
    "mt-header": Header,
    "mt-button": Button,
    "mt-cell": Cell,
    "mt-pulltorefresh": PullToRefresh,
    searchbar: Searchbar
  },
  data() {
    return {
      list: [],
      searchValue: ""
    };
  },
  methods: {
    enterSearch(value) {
      console.log(value);
    }
  },
  mounted() {
    const that = this;

    this.$refs.refresh.PullToRefresh({
      // 请求地址 url
      url: "http://yapi.demo.qunar.com/mock/43176/mock/getlist",
      // 请求的数据，为函数时请将数据返回出去
      dataRequest(currPage, requestCallback) {
        return {
          token: "Aa7D5CA7-6D0d-BB60-9F95-e34EDC7eC0E7",
          params: {
            pageIndex: currPage,
            pageSize: 10,
            keyword: that.searchValue
          }
        };
      },
      // 每次请求成功后的回调函数，回调的数据是处理过后的
      success({ custom }, pageIndex) {
        if (pageIndex === 0) {
          that.list = custom.infolist;
        } else {
          custom.infolist.forEach(e => {
            that.list.push(e);
          });
        }
      },
      // 每次请求失败后的回调，默认不做处理
      error(error) {
        Console.error(error);
      },
      // 接口请求的初始页面,根据不同项目服务器配置而不同,默认为0
      initPageIndex: 0,
      // 每次请求的最大超时时间，默认为6000
      timeout: 6000,
      // 下拉刷新配置
      settings: {
        // 若为真，PullToRefresh 会自动检测并撑满其容器
        autoFill: true,
        // 手指移动与组件移动距离的比值
        distanceIndex: 2,
        // 组件可移动的最大距离（像素），若为 0 则不限制
        maxDistance: 0,
        // topStatus 为 pull 时加载提示区域的文字
        topPullText: "下拉刷新",
        // topStatus 为 drop 时加载提示区域的文字
        topDropText: "释放更新",
        // topStatus 为 loading 时加载提示区域的文字
        topLoadingText: "加载中...",
        // 触发 topMethod 的下拉距离阈值（像素）
        topDistance: 50,
        // 下拉刷新事件回调，每次下拉刷新后会触发
        pullDown() {
          Console.log("pull down");
        },
        // bottomStatus 为 pull 时加载提示区域的文字
        bottomPullText: "上拉刷新",
        // bottomStatus 为 drop 时加载提示区域的文字
        bottomDropText: "释放更新",
        // bottomStatus 为 loading 时加载提示区域的文字
        bottomLoadingText: "加载中...",
        // 触发 bottomMethod 的上拉距离阈值（像素）
        bottomDistance: 50,
        // 上拉刷新事件回调，每次上拉刷新后会触发
        pullUp() {
          Console.log("pull up");
        },
        // 若为真，则 bottomMethod 不会被再次触发
        bottomAllLoaded: false
      },
      // ajax的配置项
      ajaxSettings: {
        contentType: "application/x-www-form-urlencoded"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.mint-loadmore {
  top: 86px;
}

ul {
  padding-left: 10px;
  background-color: #fff;
}
</style>