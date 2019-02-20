<template>
    <mt-progress :value="value" :bar-height="barHeight">
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
    </mt-progress>
</template>

<script>
    import { Progress } from 'mint-ui';

    export default {
        name: 'Progress',
        components: {
            "mt-progress": Progress
        },
        props: {
            value: {
                type: Number,
                default: 0
            },
            barHeight: {
                type: Number,
                default: 3
            }
        }
    };
</script>

<style lang="scss">

</style>
