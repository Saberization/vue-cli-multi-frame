<template>
  <mt-index-list>
    <mt-index-section index="A">
      <mt-cell title="Aaron"></mt-cell>
      <mt-cell title="Alden"></mt-cell>
      <mt-cell title="Austin"></mt-cell>
    </mt-index-section>
    <mt-index-section index="B">
      <mt-cell title="Baldwin"></mt-cell>
      <mt-cell title="Braden"></mt-cell>
    </mt-index-section>
    <mt-index-section index="Z">
      <mt-cell title="Zack"></mt-cell>
      <mt-cell title="Zane"></mt-cell>
    </mt-index-section>
  </mt-index-list>
</template>

<script>
import { IndexList, IndexSection } from "mint-ui";
import Cell from "@components/cell";

export default {
  name: "indexlist",
  components: {
    "mt-index-list": IndexList,
    "mt-index-section": IndexSection,
    "mt-cell": Cell
  }
};
</script>

<style lang="scss">
</style>