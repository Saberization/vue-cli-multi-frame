<template>
  <div class="container">
    <mt-header title="PullToRefresh">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>
    <div class="container-body">
      <mt-pulltorefresh url="http://yapi.demo.qunar.com/mock/43176/mock/getlist" ref="refresh">
        <ul>
          <li></li>
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
import PullToRefresh from '@components/pulltorefresh';

export default {
  name: "PullToRefresh",
  components: {
    "mt-header": Header,
    "mt-button": Button,
    "mt-cell": Cell,
    "mt-pulltorefresh": PullToRefresh
  },
  data() {
    return {
      list: [],
      allLoaded: true
    };
  },
  methods: {
  },
  mounted() {
    this.$refs.refresh.dataRequest((currentPage, requestCallback) => {
      requestCallback({
        token: 'RXBvaW50X1dlYlNlcml2Y2VfKiojIzA2MDE=',
        params: {
          pageindex: currentPage,
          pagesize: 10,
          keyword: ''
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.mint-loadmore {
  top: 40px;
}

ul {
  padding-left: 10px;
  background-color: #fff;
}
</style>