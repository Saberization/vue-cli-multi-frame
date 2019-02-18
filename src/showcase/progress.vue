<template>
  <div class="container">
    <mt-header title="Progress">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="mt-body">
      <mt-cell title="默认" :isLink="false">
        <mt-progress></mt-progress>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";
import Progress from "@components/progress";
import Cell from "@components/cell";

export default {
  name: "Progress",
  components: {
    "mt-header": Header,
    "mt-button": Button,
    "mt-progress": Progress,
    "mt-cell": Cell
  }
}
</script>

<style lang="scss" scoped>
  
</style>