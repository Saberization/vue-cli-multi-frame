<template>
  <div class="container">
    <mt-header title="PullToRefresh">
      <mt-button icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="container-body">
      <pulltorefresh :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
          <li v-for="(v, i) in list" :key="i">{{ v }}</li>
        </ul>
      </pulltorefresh>
    </div>
  </div>
</template>

<script>
import { getRefreshList } from '@model/'
import Header from '@components/header'
import Button from "@components/button"
import { Loadmore } from 'mint-ui'

export default {
  name: "PullToRefresh",
  components: {
    "mt-header": Header,
    "mt-button": Button,
    "pulltorefresh": Loadmore
  },
  data() {
    return {
      list: [],
      allLoaded: true
    }
  },
  methods: {
    loadTop() {

    },
    loadBottom() {

    }
  },
  mounted() {
    getRefreshList({
      pageindex: 0,
      pagesize: 10,
      keyword: ''
    })
    .then((response) => {
      const data = response.data;

      this.list = data.custom.infolist;
    })
    .catch(() => {

    })
  },
}
</script>

<style lang="scss" scoped>
  .mint-loadmore {
    position: absolute;
    top: 40px;
    bottom: 0;
  }
</style>