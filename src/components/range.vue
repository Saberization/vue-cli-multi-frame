<template>
  <mt-range
    v-model="value"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    :barHeight="barHeight"
    @input="changeRange"
  >
    <slot
      name="start"
      slot="start"
    ></slot>
    <slot
      name="end"
      slot="end"
    ></slot>
  </mt-range>
</template>

<script>
import { Range } from "mint-ui";

export default {
  name: "Range",
  components: {
    "mt-range": Range
  },
  model: {
    prop: 'rangeValue',
    event: 'custom-input'
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
    },
    rangeValue: Number
  },
  data() {
    return {
      value: 0
    }
  },
  methods: {
    changeRange() {
      this.$emit('custom-input', this.value);
    }
  },
  created () {
    this.value = this.rangeValue;
  }
};
</script>

<style lang="scss">
</style>