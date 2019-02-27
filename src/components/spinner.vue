<template>
    <mt-spinner
        :type="type"
        :color="color"
        :size="size"
    ></mt-spinner>
</template>

<script>
    import { Spinner } from 'mint-ui';

    export default {
        name: "Spinner",
        components: {
            "mt-spinner": Spinner
        },
        props: {
            type: {
                default: "0"
            },
            color: {
                type: String,
                default: "#ccc"
            },
            size: {
                type: Number,
                default: 28
            }
        }
    }
</script>

<style scoped>

</style>
