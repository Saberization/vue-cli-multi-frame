<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
export default {
  name: "ShowCase"
};
</script>

<style lang="scss">
.sg-title {
  font-size: 20px;
  margin: 20px auto;
  text-align: center;
  display: block;
  line-height: 1;
}
</style>