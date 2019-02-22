<template>
  <div class="container">
    <mt-header title="DatePicker">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="mt-content">
      <mt-button
        size="large"
        @click.native="dateTimePicker"
      >点击弹出 DateTime Picker</mt-button>
      <mt-button
        size="large"
        @click.native="datePicker"
      >点击弹出 Date Picker</mt-button>
      <mt-button
        size="large"
        @click.native="timePicker"
      >点击弹出 Time Picker</mt-button>
      <mt-button
        size="large"
        @click.native="customDatePicker"
      >自定义模板</mt-button>
      <mt-button
        size="large"
        @click.native="setDatePicker"
      >设定初始值</mt-button>
    </div>

    <mt-datepicker
      ref="datetimepicker"
      v-model="curDate"
      type="datetime"
      @confirm="getPickerResult"
    ></mt-datepicker>

    <mt-datepicker
      ref="datepicker"
      v-model="curDate"
      type="date"
      @confirm="getPickerResult"
    ></mt-datepicker>

    <mt-datepicker
      ref="timepicker"
      v-model="time"
      type="time"
      @confirm="getPickerResult"
    ></mt-datepicker>

    <mt-datepicker
      ref="customPicker"
      type="date"
      v-model="curDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="getPickerResult"
    ></mt-datepicker>

    <mt-datepicker
      ref="initTimePicker"
      type="time"
      v-model="initTime"
      @confirm="getPickerResult"
    ></mt-datepicker>
    <p>当前选择时间：{{ date }}</p>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";
import DatePicker from "@components/datepicker";

export default {
  name: "Datepicker",
  components: {
    "mt-header": Header,
    "mt-button": Button,
    "mt-datepicker": DatePicker
  },
  data() {
    return {
      date: null,
      type: "datetime",
      curDate: new Date(),
      time: '00:00',
      initTime: '00:00'
    };
  },
  methods: {
    dateTimePicker() {
      this.$refs.datetimepicker.show();
    },

    datePicker() {
      this.$refs.datepicker.show();
    },

    timePicker() {
      this.$refs.timepicker.show();
    },

    customDatePicker() {
      this.$refs.customPicker.show();
    },

    setDatePicker() {
      this.initTime = '04:30';
      this.$refs.initTimePicker.show();
    },

    getPickerResult(result) {
      this.date = result;
    }
  }
};
</script>

<style lang="scss" scoped>
.mt-content {
  padding-left: 10px;
  padding-right: 10px;

  .mint-button {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

p {
  text-align: center;
  font-size: 16px;
}
</style>
