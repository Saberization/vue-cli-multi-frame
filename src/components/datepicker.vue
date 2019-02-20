<template>
    <mt-datepicker
        ref="datepicker"
        v-model="curDate"
        :type="type"
        :cancelText="cancelText"
        :startDate="startDate"
        :endDate="endDate"
        :startHour="startHour"
        :endHour="endHour"
        :yearFormat="yearFormat"
        :monthFormat="monthFormat"
        :dateFormat="dateFormat"
        :hourFormat="hourFormat"
        :minuteFormat="minuteFormat"
        @confirm="confirm"
    ></mt-datepicker>
</template>

<script>
    import { DatetimePicker } from "mint-ui";

    export default {
        name: "Datepicker",
        components: {
            "mt-datepicker": DatetimePicker
        },
        model: {
            prop: 'propCurDate',
            event: 'updateCurDate'
        },
        props: {
            type: {
                type: String,
                default: "datetime"
            },
            cancelText: {
                type: String,
                default: "取消"
            },
            confirmText: {
                type: String,
                default: "确定"
            },
            startDate: {
                type: Date,
                default: function () {
                    const today = new Date(),
                        todayYear = today.getFullYear();

                    return new Date(todayYear - 5 + "-01-01");
                }
            },
            endDate: {
                type: Date,
                default: function () {
                    const today = new Date(),
                        todayYear = today.getFullYear();

                    return new Date(todayYear + 10 + "-12-31");
                }
            },
            startHour: {
                type: Number,
                default: 0
            },
            endHour: {
                type: Number,
                default: 23
            },
            yearFormat: {
                type: String,
                default: "{value}"
            },
            monthFormat: {
                type: String,
                default: "{value}"
            },
            dateFormat: {
                type: String,
                default: "{value}"
            },
            hourFormat: {
                type: String,
                default: "{value}"
            },
            minuteFormat: {
                type: String,
                default: "{value}"
            },
            propCurDate: {
                default: function () {
                    return new Date();
                }
            }
        },
        watch: {
            propCurDate (newValue) {
                this.curDate = newValue;
            }
        },
        data () {
            return {
                curDate: null
            }
        },
        methods: {
            show () {
                this.$refs.datepicker.open();
            },

            hide () {
                this.$refs.datepicker.close();
            },
            confirm (date) {
                const appendZero = this.appendZero,
                    type = this.type;

                if (type === "datetime" || type === "date") {
                    const year = date.getFullYear(),
                        month = date.getMonth() + 1,
                        day = date.getDate(),
                        minutes = date.getMinutes(),
                        hour = date.getHours();

                    if (type === "datetime") {
                        this.$emit(
                            "confirm",
                            year +
                            "-" +
                            appendZero(month) +
                            "-" +
                            appendZero(day) +
                            " " +
                            appendZero(hour) +
                            ":" +
                            appendZero(minutes)
                        );
                    } else if (type === "date") {
                        this.$emit(
                            "confirm",
                            year + "-" + appendZero(month) + "-" + appendZero(day)
                        );
                    }
                } else if (type === 'time') {
                    this.$emit('confirm', date);
                }
            },

            appendZero (num) {
                if (num < 10) {
                    return "0" + num;
                }

                return num;
            },
        },
        created () {
            this.curDate = this.propCurDate;
        }
    };
</script>

<style lang="scss">
</style>
