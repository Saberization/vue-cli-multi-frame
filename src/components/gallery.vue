<template>
  <mt-swipe
    :auto="auto"
    :speed="speed"
    :defaultIndex="defaultIndex"
    :continuous="continuous"
    :showIndicators="showIndicators"
    :prevent="prevent"
    :stopPropagation="stopPropagation"
    :style="{maxHeight: maxImgHeight, minHeight: minImgHeight}"
  >
    <mt-swipe-item
      v-for="(v, i) in data"
      :key="i"
    >
      <img
        class="swipe-item-img"
        :src="v.pic"
        alt=""
      />
      <p class="swipe-item-title" v-if="v.title && v.title != ''">{{ v.title }}</p>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";

export default {
  name: "Gallery",
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem
  },
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // 自动播放的时间间隔（毫秒）
    auto: {
      type: Number,
      default: 3000
    },
    // 动画持时（毫秒）
    speed: {
      type: Number,
      default: 300
    },
    // 初始显示的轮播图的索引
    defaultIndex: {
      type: Number,
      default: 0
    },
    // 是否可以循环播放
    continuous: {
      type: Boolean,
      default: true
    },
    // 是否显示 indicators
    showIndicators: {
      type: Boolean,
      default: true
    },
    // 是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能
    prevent: {
      type: Boolean,
      default: true
    },
    // 是否在 touchstart 事件触发时阻止冒泡。
    stopPropagation: {
      type: Boolean,
      default: false
    },
    maxImgHeight: {
      type: String,
      default: '100%'
    },
    minImgHeight: {
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
  .swipe-item-img {
    width: 100%;
    height: 100%;
  }

  .swipe-item-title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 36px;
    line-height: 36px;
    padding-left: 10px;
    color: #fff;
    background: rgba(14, 14, 14, 0.43);
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>