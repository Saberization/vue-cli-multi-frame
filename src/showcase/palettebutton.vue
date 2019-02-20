<template>
    <div class="container">
        <mt-header title="Palette Button">
            <mt-button icon="back" slot="left">返回</mt-button>
        </mt-header>

        <div class="mt-body">
            <mt-palette-button :class="{ 'btn-cls': true }" direction="rt" @show="showlog" @hide="hidelog" @toggle="togglelog">
                <div class="my-icon-button indexicon icon-popup palette-button-4-sub-0"></div>
                <div class="my-icon-button indexicon icon-popup palette-button-4-sub-0"></div>
                <div class="my-icon-button indexicon icon-popup palette-button-4-sub-0"></div>
            </mt-palette-button>
        </div>
    </div>
</template>

<script>
    import Header from "@components/header";
    import Button from "@components/button";
    import PaletteButton from "@components/palettebutton";

    const Console = console;

    export default {
        name: "PaletteButton",
        components: {
            "mt-header": Header,
            "mt-button": Button,
            "mt-palette-button": PaletteButton
        },
        methods: {
            showlog() {
                Console.log('show');
            },

            hidelog() {
                Console.log('hide');
            },

            togglelog() {
                Console.log('toggle');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mt-body {
        position: absolute;
        left: 30px;
        right: 30px;
        bottom: 30px;

        .btn-cls {
            color: #fff;

            & /deep/ .mint-main-button {
                background: rgb(38, 162, 255);
            }
        }

        .my-icon-button {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #26a2ff;
            color: #fff;
            line-height: 30px;
            text-align: center;
        }

        .icon-popup:before {
            content: "\e621";
        }
    }
</style>
