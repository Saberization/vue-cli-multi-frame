<template>
  <mt-range v-model="rangeValue" @input="changeRange">
    <slot name="start" slot="start"></slot>
    <slot name="end" slot="end"></slot>
  </mt-range>
</template>

<script>
  import { Range } from 'mint-ui';

  export default {
    name: 'Range',
    components: {
      "mt-range": Range
    },
    props: {
      // 最小值
      min: {
        type: Number,
        default: 0
      },
      // 最大值
      max: {
        type: Number,
        default: 100
      },
      // 步长
      step: {
        type: Number,
        default: 1
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 滑槽的线宽（像素）
      barHeight: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        rangeValue: 0
      }
    },
    methods: {
      changeRange() {
        this.$emit('input', this.rangeValue);
      }
    }
  }
</script>

<style lang="scss">
  
</style>