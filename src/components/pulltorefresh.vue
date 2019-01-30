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
  data() {
    return {
    };
  },
  methods: {
    loadTop() {
    },
    loadBottom() {
    },
    PullToRefresh(options) {
      console.log(options);
    }
  }
};
</script>