<template>
    <div class="container">
        <mt-header title="Cell">
            <mt-button icon="back" slot="left">返回</mt-button>
        </mt-header>

        <div class="mt-body">
            <mt-cell title="标题文字" :isLink="false"></mt-cell>
            <mt-cell title="标题文字" :isLink="false">说明文字</mt-cell>
            <mt-cell title="标题文字" icon="more" :isLink="false">带 icon</mt-cell>
            <mt-cell title="标题文字" :isLink="false">
                <span>icon 是图片</span>
                <img slot="icon" src="../assets/images/100x100.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="标题文字">带链接</mt-cell>
            <mt-cell title="标题文字">
                <span style="color: teal;">这里是元素</span>
            </mt-cell>
            <mt-cell title="标题文字">
                <mt-button type="primary">按钮</mt-button>
            </mt-cell>
            <mt-cell title="标题" label="描述信息"></mt-cell>
            <mt-cell title="原生跳转" label="跳转到 https://github.com/saberization" @click.native="openPage('https://github.com/saberization')">
            </mt-cell>
            <mt-cell title="路由跳转" label="跳转到 #navigation" to="/navigation">
            </mt-cell>
        </div>
    </div>
</template>

<script>
    import Header from "@components/header";
    import Button from "@components/button";
    import Cell from "@components/cell";
    import Util from "@util/";

    export default {
        name: "Cell",
        components: {
            "mt-header": Header,
            "mt-button": Button,
            "mt-cell": Cell
        },
        methods: {
            openPage(url) {
                Util.openPage(url);
            }
        }
    }
</script>

<style scoped>
    .mint-button--normal {
        width: 70px;
        height: 32px;
    }
</style>
