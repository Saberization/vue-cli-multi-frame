<template>
    <mt-cell-swipe
        :title="title"
        :icon="icon"
        :to="to"
        :value="value"
        :label="label"
        :is-link="isLink"
        :left="left"
        :right="right"
    >
        <slot></slot>
        <slot name="icon" slot="icon"></slot>
    </mt-cell-swipe>
</template>

<script>
    import { CellSwipe } from 'mint-ui';

    export default {
        name: "CellSwipe",
        components: {
            "mt-cell-swipe": CellSwipe
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: ''
            },
            to: {
                type: String,
                default: ''
            },
            value: {
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            isLink: {
                type: Boolean,
                default: true
            },
            left: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            right: {
                type: Array,
                default: function () {
                    return [];
                }
            }
        }
    }
</script>
