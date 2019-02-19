<template>
  <div class="container">
    <mt-header title="Index List">
      <mt-button icon="back" slot="left">返回</mt-button>
    </mt-header>

    <div class="mt-body">
      <mt-index-list></mt-index-list>
    </div>
  </div>
</template>

<script>
import Header from '@components/header';
import Button from "@components/button";
import IndexList from "@components/indexlist";

export default {
  name: "indexlist",
  components: {
    'mt-button': Button,
    'mt-header': Header,
    'mt-index-list': IndexList
  }
}
</script>

<style lang="scss">
  
</style>