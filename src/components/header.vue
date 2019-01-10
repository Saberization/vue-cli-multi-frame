<template>
  <mt-header
    :fixed="fixed"
    :title="title"
  >
    <router-link
      :to="backTo"
      slot="left"
      v-if="hasHeaderBack"
    >
      <mt-button icon="back">{{ backText }}</mt-button>
    </router-link>

    <mt-button v-if="hasHeaderRight" icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>
import "mint-ui/lib/style.css";
import { Header } from "mint-ui";
import Button from "./button";

export default {
  name: "Header",
  components: {
    "mt-header": Header,
    "mt-button": Button
  },
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    title: String,
    backTo: {
      type: String,
      default: '/'
    },
    backText: {
      type: String,
      default: '返回'
    },
    hasHeaderRight: {
      type: Boolean,
      default: false
    },
    hasHeaderBack: {
      type: Boolean,
      default: true
    }
  }
};
</script>