<template>
    <mt-header
        :fixed="fixed"
        :title="title"
    >
        <router-link
            :to="backTo"
            slot="left"
        >
            <slot name="left"></slot>
        </router-link>

        <slot name="right" slot="right"></slot>
    </mt-header>
</template>

<script>
    import { Header } from "mint-ui";

    export default {
        name: "Header",
        components: {
            "mt-header": Header
        },
        props: {
            fixed: {
                type: Boolean,
                default: false
            },
            title: String,
            backTo: {
                type: String,
                default: "/"
            }
        }
    };
</script>
