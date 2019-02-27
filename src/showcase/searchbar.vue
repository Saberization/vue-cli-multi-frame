<template>
  <div class="container">
    <mt-header title="Searchbar">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="mt-content">
      <searchbar
        v-model="searchValue"
        @enter="enter"
      ></searchbar>
    </div>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";
import Searchbar from "@components/searchbar";

const Console = console;

export default {
  name: "Search",
  components: {
    "mt-header": Header,
    "mt-button": Button,
    searchbar: Searchbar
  },
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    enter() {
      Console.log(this.searchValue);
    }
  }
};
</script>

<style scoped>
  .mt-content {
    padding-top: 40px;
  }
</style>