<template>
  <mt-cell
    :title="title"
    :value="value"
    :label="label"
    :is-link="isLink"
    :to="to"
    :icon="icon"
  >
    <slot></slot>
  </mt-cell>
</template>

<script>
import { Cell } from "mint-ui";

export default {
  name: "Cell",
  components: {
    "mt-cell": Cell
  },
  props: {
    title: String,
    value: String,
    label: String,
    to: String,
    icon: String,
    isLink: {
      type: Boolean,
      default: true
    }
  }
};
</script>