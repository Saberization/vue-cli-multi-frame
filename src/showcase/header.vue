<template>
  <div class="header">
    <router-link to="/navigation">
      <i class="page-back mintui mintui-back"></i>
    </router-link>
    <div class="header-title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;

  .header-title {
    font-size: 20px;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }

  .page-back {
    top: 12px;
    left: 10px;
    position: absolute;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
  }
}
</style>