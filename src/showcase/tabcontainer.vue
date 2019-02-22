<template>
    <div class="container">
        <mt-header title="Lazy Load">
            <mt-button
                icon="back"
                slot="left"
            >返回</mt-button>
        </mt-header>

        <div class="mt-content">
            <div class="tab-top">
                <mt-button @click.native="tabChange(1)">tab1</mt-button>
                <mt-button @click.native="tabChange(2)">tab2</mt-button>
                <mt-button @click.native="tabChange(3)">tab3</mt-button>
            </div>

            <!-- 核心代码 -->
            <mt-tab-container v-model="active" :swipeable="true">
                <mt-tab-container-item id="tab-container1">
                    <mt-cell v-for="v in 12" :key="v" title="tab-container1"></mt-cell>
                </mt-tab-container-item>

                <mt-tab-container-item id="tab-container2">
                    <mt-cell v-for="v in 12" :key="v" title="tab-container2"></mt-cell>
                </mt-tab-container-item>

                <mt-tab-container-item id="tab-container3">
                    <mt-cell v-for="v in 12" :key="v" title="tab-container3"></mt-cell>
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
        },
        methods: {
            tabChange(index) {
                this.active = 'tab-container' + index;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tab-top {
        margin-bottom: 10px;

        .mint-button {
            margin-left: 15px;
        }
    }
</style>
