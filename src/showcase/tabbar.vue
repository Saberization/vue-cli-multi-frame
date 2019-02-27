<template>
    <div class="container">
        <mt-header title="TabBar">
            <mt-button slot="left" icon="back">返回</mt-button>
        </mt-header>

        <div class="mt-content">
            <mt-tab-container v-model="selected" :swipeable="true">
                <mt-tab-container-item id="0">
                    <mt-cell v-for="v in 12" :key="v" title="菜单一"></mt-cell>
                </mt-tab-container-item>

                <mt-tab-container-item id="1">
                    <mt-cell v-for="v in 12" :key="v" title="菜单二"></mt-cell>
                </mt-tab-container-item>

                <mt-tab-container-item id="2">
                    <mt-cell v-for="v in 12" :key="v" title="菜单三"></mt-cell>
                </mt-tab-container-item>

                <mt-tab-container-item id="3">
                    <mt-cell v-for="v in 12" :key="v" title="菜单四"></mt-cell>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

        <mt-tabbar v-model="selected">
            <mt-tab-item id="0">
                <img src="../assets/images/100x100.png" slot="icon" alt="" />
                菜单一
            </mt-tab-item>

            <mt-tab-item id="1">
                <img src="../assets/images/100x100.png" slot="icon" alt="" />
                菜单二
            </mt-tab-item>

            <mt-tab-item id="2">
                <img src="../assets/images/100x100.png" slot="icon" alt="" />
                菜单三
            </mt-tab-item>

            <mt-tab-item id="3">
                <img src="../assets/images/100x100.png" slot="icon" alt="" />
                菜单四
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import Header from "@components/header";
    import Button from "@components/button";
    import Cell from "@components/cell";
    import { Tabbar, TabItem } from "mint-ui";
    import { TabContainer, TabContainerItem } from "mint-ui";

    export default {
        name: "Tabbar",
        components: {
            "mt-header": Header,
            "mt-button": Button,
            "mt-tabbar": Tabbar,
            "mt-tab-item": TabItem,
            "mt-tab-container": TabContainer,
            "mt-tab-container-item": TabContainerItem,
            "mt-cell": Cell
        },
        data() {
            return {
                selected: "0"
            }
        }
    }
</script>

<style scoped>
    .mt-content {
        position: absolute;
        top: 40px;
        left: 0;
        right: 0;
        bottom: 55px;
        padding-top: 0;
    }
</style>
