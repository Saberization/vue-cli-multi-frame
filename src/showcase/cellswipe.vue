<template>
    <div class="container">
        <mt-header title="Cell Swipe">
            <mt-button icon="back" slot="left">返回</mt-button>
        </mt-header>

        <div class="mt-content">
            <p>拖拽(滑动)显示功能按钮，点击按钮触发事件</p>
            <mt-cell-swipe title="左滑显示删除按钮" :right="deleteSwipeMenu"></mt-cell-swipe>
            <mt-cell-swipe title="右滑显示删除按钮" :left="deleteSwipeMenu"></mt-cell-swipe>

            <p>拖拽(滑动)显示多功能菜单</p>
            <mt-cell-swipe title="左滑显示多功能菜单" :right="moreSwipeMenu"></mt-cell-swipe>
            <mt-cell-swipe title="右滑显示多功能菜单" :left="moreSwipeMenu"></mt-cell-swipe>
        </div>
    </div>
</template>

<script>
    import Header from "@components/header";
    import Button from "@components/button";
    import Cellswipe from "@components/cellswipe";
    import { MessageBox } from "mint-ui";

    const Console = console;

    export default {
        name: "cellswipe",
        components: {
            "mt-header": Header,
            "mt-button": Button,
            "mt-cell-swipe": Cellswipe
        },
        data() {
            return {
                deleteSwipeMenu: [{
                    content: '删除',
                    style: { background: '#dd524d', color: '#fff' },
                    handler: () => {

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
                }],

                moreSwipeMenu: [{
                    content: "添加",
                    style: { background: "#03a9f4", color: "#fff" },
                    handler: () => {
                        MessageBox.confirm("确定添加此操作?", "提示")
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
                    content: '删除',
                    style: { background: '#dd524d', color: '#fff' },
                    handler: () => {

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
                }]
            };
        }
    }
</script>

<style scoped>
    p {
        font-size: 14px;
        color: #8f8f94;
        padding: 10px;
    }

    p:first-child {
        padding-top: 0;
    }
</style>
