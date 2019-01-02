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
  export default {
    name: 'home',
    data() {
      return {
        msg: 'home.vue'
      }
    },
    methods: {
      openPage() {
        window.location.href = '/news.html';
      }
    }
  }
</script>