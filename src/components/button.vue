<template>
    <mt-button
        :plain="plain"
        :disabled="disabled"
        :type="type"
        :size="size"
        :icon="icon"
    >
    <span class="mint-button-icon">
      <slot name="icon"></slot>
    </span>
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

<style lang="scss">
    .mint-button::after {
        background-color: #e8e8e8 !important;
    }
</style>
