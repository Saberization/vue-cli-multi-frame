<template>
    <div class="container">
        <mt-header title="Spinner">
            <mt-button
                icon="back"
                slot="left"
            >返回
            </mt-button>
        </mt-header>

        <div class="mt-content">
            <mt-cell title="Spinner type0">
                <mt-spinner :type="0"></mt-spinner>
            </mt-cell>

            <mt-cell title="Spinner type1">
                <mt-spinner :type="1" color="#26a2ff"></mt-spinner>
            </mt-cell>

            <mt-cell title="Spinner type2">
                <mt-spinner :type="2" color="rgb(100, 100, 100)"></mt-spinner>
            </mt-cell>

            <mt-cell title="Spinner type3">
                <mt-spinner :type="3" color="teal" :size="30"></mt-spinner>
            </mt-cell>
        </div>
    </div>
</template>

<script>
    import Header from "@components/header";
    import Button from "@components/button";
    import Spinner from "@components/spinner";
    import Cell from "@components/cell";

    export default {
        name: "Spinner",
        components: {
            "mt-header": Header,
            "mt-button": Button,
            "mt-spinner": Spinner,
            "mt-cell": Cell
        },
    }
</script>
