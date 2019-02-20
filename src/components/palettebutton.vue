<template>
    <mt-palette-button
        :content="content"
        :offset="offset"
        :direction="direction"
        :radius="radius"
        :mainButtonStyle="mainButtonStyle"
        @expand="showlog"
        @collapse="hidelog"
        @toggle="togglelog"
    >
        <slot></slot>
    </mt-palette-button>
</template>

<script>
    import { PaletteButton } from 'mint-ui';

    export default {
        name: "PaletteButton",
        components: {
            "mt-palette-button": PaletteButton
        },
        props: {
            // 主按钮内容
            content: {
                type: String,
                default: "+"
            },
            // 角度偏移量
            offset: {
                type: Number,
                default: Math.PI / 4
            },
            // 按钮展开方向: lt, t, rt, r, rb, b, lb, l
            direction: {
                type: String,
                default: 'lt'
            },
            // 按钮展开半径
            radius: {
                type: Number,
                default: 90
            },
            // 主按钮样式
            mainButtonStyle: {
                type: String,
                default: ''
            }
        },
        methods: {
            showlog () {
                this.$emit('show');
            },

            hidelog () {
                this.$emit('hide');
            },

            togglelog () {
                this.$emit('toggle');
            }
        }
    }
</script>
