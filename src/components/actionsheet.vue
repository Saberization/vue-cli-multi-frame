<template>
  <mt-actionsheet
    :actions="data"
    :cancelText="cancelText"
    :closeOnClickModal="closeOnClickModal"
    v-model="showVisible"
  ></mt-actionsheet>
</template>

<script>
import { Actionsheet } from "mint-ui";

export default {
  name: "ActionSheet",
  components: {
    "mt-actionsheet": Actionsheet
  },
  props: {
    actions: Array,
    cancelText: {
      type: String,
      default: "取消"
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    success: Function
  },
  data() {
    return {
      data: [],
      showVisible: false
    };
  },
  watch: {
    actions: {
      handler(newValue) {
        const that = this;

        if (newValue && Array.isArray(newValue)) {
          this.data = [];

          newValue.forEach(e => {
            this.data.push({
              name: e,
              method: function({ name }) { that.success && typeof that.success === 'function' && that.success(name); }
            });
          });
        }
      },
      deep: true
    }
  },
  methods: {
    show() {
      this.showVisible = true;
    },

    hide() {
      this.showVisible = false;
    },

    toggle() {
      this.showVisible = !this.showVisible;
    }
  },
  created() {
    const actions = this.actions;
    const that = this;

    if (actions && Array.isArray(actions)) {
      actions.forEach(e => {
        this.data.push({
          name: e,
          method: function({ name }) { that.success && typeof that.success === 'function' && that.success(name); }
        });
      });
    }
  }
};
</script>