<template>
    <div class="container">
        <mt-header title="Lazy Load">
            <mt-button
                icon="back"
                slot="left"
            >返回</mt-button>
        </mt-header>
    </div>
</template>

<script>
    import { TabContainer, TabContainerItem } from 'mint-ui';
    import Header from "@components/header";
    import Button from "@components/button";

    export default {
        name: "TabContainer",
        components: {
            "mt-header": Header,
            "mt-button": Button,
            "mt-tab-container": TabContainer,
            "mt-tab-container-item": TabContainerItem
        }
    }
</script>

<style scoped>

</style>
