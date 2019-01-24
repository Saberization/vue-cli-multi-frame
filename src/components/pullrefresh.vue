<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="disabled"
      :infinite-scroll-distance="distance"
      :infinite-scroll-immediate-check="immediateCheck"
      :infinite-scroll-listen-for-event="evtCallback"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import { InfiniteScroll } from "mint-ui";

export default {
  name: "Pullrefresh",
  directives: {
    InfiniteScroll
  },
  props: {
    // 若为真，则无限滚动不会被触发
    disabled: {
      type: Boolean,
      default: false
    },
    // 触发加载方法的滚动距离阈值（像素）
    distance: {
      type: Number,
      default: 20
    },
    // 若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。
    immediateCheck: {
      type: Boolean,
      default: true
    },
    // 一个 event，被执行时会立即检查是否需要执行加载方法。
    evtCallback: Function
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    loadMore() {
      if (Array.isArray(this.list) && this.list.length < 1) {
        return;
      }
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  }
};
</script>