<template>
    <div class="container">
        <mt-header title="Cell Swipe">
            <mt-button icon="back" slot="left">返回</mt-button>
        </mt-header>

        <div class="mt-body">
            <mt-cell-swipe title="左滑显示删除按钮" :right="rightSwipe"></mt-cell-swipe>
            <mt-cell-swipe title="右滑显示删除按钮"></mt-cell-swipe>
        </div>
    </div>
</template>

<script>
    import Header from "@components/header";
    import Button from "@components/button";
    import Cellswipe from "@components/cellswipe";
    import { MessageBox } from "mint-ui";

    export default {
        name: "cellswipe",
        components: {
            "mt-header": Header,
            "mt-button": Button,
            "mt-cell-swipe": Cellswipe
        },
        data() {
            return {
                rightSwipe: [{
                    content: '删除',
                    style: { background: '#dd524d', color: '#fff' },
                    handler: () => {
                        const Console = console;

                        MessageBox.confirm("确定删除此操作?", "提示")
                            .then(action => {
                                // 点击确定按钮触发的函数
                                Console.log(action);
                            })
                            .catch(err => {
                                // 点击取消按钮触发的函数
                                Console.log(err);
                            });
                    }
                }, {
                    content: '提交'
                }]
            };
        }
    }
</script>

<style scoped>

</style>
