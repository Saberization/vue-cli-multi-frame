<style lang="scss" scoped>
#container {
  background-color: gray;
}
</style>

<template>
  <div id="container">
    <h1>{{ msg }}</h1>
    <button @click="openPage">跳转到 news.html</button>
  </div>
</template>

<script>
import Util from "@util/";

export default {
  name: "home",
  data() {
    return {
      msg: "首页"
    };
  },
  methods: {
    openPage() {
      Util.openPage("news.html");
    }
  },
  mounted() {
    Util.request({
      url: 'http://yapi.demo.qunar.com/mock/32711/getCommonSystem',
      data: ''
    })
      .then(function(response) {
        // do something...
      })
      .catch(function(err) {
        // err msg
      })
  }
};
</script>