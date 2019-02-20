<template>
    <mt-popup
        position="bottom"
        ref="popup"
        :modal="modal"
        :closeOnClickModal="closeOnClickModal"
    >
        <mt-picker
            :slots="slots"
            :valueKey="valueKey"
            :showToolbar="showToolbar"
            :visibleItemCount="visibleItemCount"
            :itemHeight="itemHeight"
            @change="onValuesChange"
            ref="picker"
        >
            <div class="picker-toolbar-con">
                <mt-button
                    size="small"
                    :class="{ 'btn-cancel': true }"
                    @click.native="cancel"
                >取消
                </mt-button>
                <slot></slot>
                <mt-button
                    size="small"
                    :class="{ 'btn-confirm': true }"
                    @click.native="confirm"
                >确定
                </mt-button>
            </div>
        </mt-picker>
    </mt-popup>
</template>

<script>
    import { Picker } from "mint-ui";
    import Popup from "@components/popup";
    import Button from "@components/button";

    export default {
        name: "Picker",
        components: {
            "mt-picker": Picker,
            "mt-popup": Popup,
            "mt-button": Button
        },
        props: {
            // slot 对象数组
            pickerData: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            // 当 values 为对象数组时，作为文本显示在 Picker 中的对应字段的字段名
            valueKey: {
                type: String,
                default: "text"
            },
            // 是否在组件顶部显示一个 toolbar，内容自定义
            showToolbar: {
                type: Boolean,
                default: true
            },
            // slot 中可见备选值的个数
            visibleItemCount: {
                type: Number,
                default: 5
            },
            // 每个 slot 的高度
            itemHeight: {
                type: Number,
                default: 36
            },
            modal: {
                type: Boolean,
                default: true
            },
            closeOnClickModal: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            slots: function () {
                const pickerData = this.pickerData;
                let result = [];

                if (pickerData && Array.isArray(pickerData) && pickerData.length >= 1) {
                    result[0] = {
                        flex: 1,
                        values: pickerData,
                        className: "slot1"
                    };

                    const children = pickerData[0].children;

                    if (children && Array.isArray(children) && children.length >= 1) {
                        result[1] = {
                            flex: 1,
                            values: children,
                            className: "slot2"
                        };

                        const _children = children[0].children;

                        if (_children && Array.isArray(_children) && _children.length >= 1) {
                            result[2] = {
                                flex: 1,
                                values: _children,
                                className: "slot3"
                            };
                        }
                    }
                }

                return result;
            }
        },
        methods: {
            onValuesChange (picker, values) {
                const children = (values.length >= 1 && values[0].children) || [];
                const slot1_value = picker.getSlotValue(0) || {};

                let result = [
                    {
                        text: slot1_value.text,
                        value: slot1_value.value
                    }
                ];

                if (children && Array.isArray(children) && children.length >= 1) {
                    picker.setSlotValues(1, children);

                    const slot2_value = picker.getSlotValue(1) || {};

                    result.push({
                        text: slot2_value.text,
                        value: slot2_value.value
                    });

                    const _children = values[1].children;

                    if (_children && Array.isArray(_children) && _children.length >= 1) {
                        picker.setSlotValues(2, _children);

                        const slot3_value = picker.getSlotValue(2) || {};

                        result.push({
                            text: slot3_value.text,
                            value: slot3_value.value
                        });
                    }
                }

                if (result[0].text) {
                    this.$emit("change", result);
                }
            },

            // 获取选择 picker 的结果
            getSelectedResult () {
                const picker = this.$refs.picker;
                const slot1_value = picker.getSlotValue(0);
                const slot2_value = picker.getSlotValue(1);
                const slot3_value = picker.getSlotValue(2);

                let result = [
                    {
                        text: slot1_value.text,
                        value: slot1_value.value
                    }
                ];

                if (slot2_value && typeof slot2_value === "object") {
                    result.push({
                        text: slot2_value.text,
                        value: slot2_value.value
                    });

                    if (slot3_value && typeof slot3_value === "object") {
                        result.push({
                            text: slot3_value.text,
                            value: slot3_value.value
                        });
                    }
                }

                return result;
            },

            cancel () {
                this.hide();
                this.$emit("cancel");
            },

            confirm () {
                this.hide();
                this.$emit("confirm", this.getSelectedResult());
            },

            show () {
                this.$refs.popup.show();
            },

            hide () {
                this.$refs.popup.hide();
            },

            toggle () {
                this.$refs.popup.toggle();
            }
        }
    };
</script>

<style lang="scss" scoped>
    .picker {
        .picker-toolbar-con {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 20px;
            padding-right: 20px;
            height: 100%;
            border-bottom: 1px solid #ebedf0;

            .btn-cancel,
            .btn-confirm {
                background-color: transparent;
                box-shadow: none;
                color: #1989fa;
                font-size: 16px;

                &:active {
                    background-color: #e8e8e8;
                }
            }
        }
    }
</style>
