<template>
  <mt-picker
    :slots="slots"
    :valueKey="valueKey"
    :showToolbar="showToolbar"
    :visibleItemCount="visibleItemCount"
    :itemHeight="itemHeight"
    @change="onValuesChange"
  >
    <slot></slot>
  </mt-picker>
</template>

<script>
import { Picker } from "mint-ui";

export default {
  name: "Picker",
  components: {
    "mt-picker": Picker
  },
  props: {
    // slot 对象数组
    pickerData: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // 当 values 为对象数组时，作为文本显示在 Picker 中的对应字段的字段名
    valueKey: {
      type: String,
      default: "text"
    },
    // 是否在组件顶部显示一个 toolbar，内容自定义
    showToolbar: {
      type: Boolean,
      default: false
    },
    // slot 中可见备选值的个数
    visibleItemCount: {
      type: Number,
      default: 5
    },
    // 每个 slot 的高度
    itemHeight: {
      type: Number,
      default: 36
    }
  },
  data() {
    return {
      slots: [],
      values1: [],
      values2: [],
      values3: []
    };
  },
  watch: {
    pickerData: {
      handler(newValue) {
        this.slots = newValue;
      },
      deep: true
    }
  },
  methods: {
    onValuesChange(picker, values) {
      console.log(values);
    }
  },
  created() {
    const pickerData = this.pickerData;
    const that = this;

    if (pickerData && Array.isArray(pickerData)) {
      const slots = this.slots;

      slots[0] = {
        values: pickerData,
        className: "slot1"
      };

      const children = pickerData[0].children;

      if (children && Array.isArray(children)) {
        slots[1] = {
          values: children,
          className: "slot2"
        };

        const _children = children[0].children;

        if (_children && Array.isArray(_children)) {
          slots[2] = {
            values: _children,
            className: "slot3"
          };
        }
      }
    }
  }
};
</script>

<style lang="scss">
</style>