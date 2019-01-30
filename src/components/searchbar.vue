<template>
  <div class="em-srhbar">
    <span class="indexmintui mintui-searchbar icon-search"></span>
    <input
      type="text"
      class="em-srhbar-input"
      :placeholder="placeholder"
      @input="inputValue"
    >
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    placeholder: {
      type: String,
      default: "请输入搜索关键字"
    }
  },
  methods: {
    inputValue() {
      this.$emit('input', event.target.value);
    }
  }
};
</script>

<style lang="scss">
.em-srhbar {
  position: relative;
  padding: 7px 10px;
  background-color: #eaeaea;

  .em-srhbar-input {
    width: 89%;
    height: 30px;
    margin-bottom: 0;
    padding: 0 0 0 36px;
    border: 1px solid rgba(0, 0, 0, .2);
    font-size: 14px;
    border-radius: 15px;
  }

  .icon-search {
    position: absolute;
    top: 15px;
    left: 18px;
    color: #9e9e9e;
  }
}
</style>