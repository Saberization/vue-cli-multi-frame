<template>
  <mt-button
    :plain="plain"
    :disabled="disabled"
    :type="type"
    :size="size"
    :icon="icon"
  >
    <slot></slot>
  </mt-button>
</template>

<script>
import { Button } from "mint-ui";

export default {
  name: "Button",
  components: {
    "mt-button": Button
  },
  props: {
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
    icon: String
  }
};
</script>