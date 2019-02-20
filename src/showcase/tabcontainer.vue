<template>
    <div class="container">
        <mt-header title="Lazy Load">
            <mt-button
                icon="back"
                slot="left"
            >返回</mt-button>
        </mt-header>

        <div class="mt-body">
            <!-- 核心代码 -->
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="tab-container1">
                    <mt-cell v-for="v in 12" :key="v" :title="'tab-container' + v"></mt-cell>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
    import { TabContainer, TabContainerItem } from 'mint-ui';
    import Header from "@components/header";
    import Button from "@components/button";
    import Cell from "@components/cell";

    export default {
        name: "TabContainer",
        components: {
            "mt-header": Header,
            "mt-button": Button,
            "mt-tab-container": TabContainer,
            "mt-tab-container-item": TabContainerItem,
            "mt-cell": Cell
        },
        data() {
            return {
                active: 'tab-container1'
            }
        }
    }
</script>

<style scoped>

</style>
