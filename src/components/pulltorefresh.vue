<template>
  <mt-loadermore
    :top-method="loadTop"
    :bottom-method="loadBottom"
    ref="loadmore"
  >
    <slot></slot>
  </mt-loadermore>
</template>

<script>
import { Loadmore } from "mint-ui";
import Util from "@util/";

export default {
  name: "Loadmore",
  components: {
    "mt-loadermore": Loadmore
  },
  props: {
    url: {
      type: String,
      required: true
    },
    initPageIndex: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    isDebug: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 0
    },
    headers: Object,
    contentType: String
  },
  data() {
    return {
      requestData: null,
      requestCallback: null
    };
  },
  methods: {
    dataRequest(callback) {
      this.requestCallback = callback;

      let data = callback && typeof callback === 'function' && callback(this.initPageIndex, this.getRequestData);

      if (data && typeof data === 'object') {
        this.requestData = data;
        // request ajax
        this.requestAjax();
      }
    },
    getRequestData(params) {
      if (params && typeof params === 'object') {
        this.requestData = params;
        // request ajax
        this.requestAjax();
      }
    },
    loadTop() {},
    loadBottom() {

    },
    requestAjax() {
      Util.request({
        url: this.url,
        data: this.requestData,
        type: 'post'
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      });
    }
  }
};
</script>

<style lang="scss">
</style>