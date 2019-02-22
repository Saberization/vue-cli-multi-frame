<template>
  <div class="container">
    <mt-header title="Popup">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="mt-content">
      <mt-button
        size="large"
        @click.native="showMiddlePopup"
      >中间弹出 popup</mt-button>
      <mt-button
        size="large"
        @click.native="showTopPopup"
      >上侧弹出 popup</mt-button>
      <mt-button
        size="large"
        @click.native="showRightPopup"
      >右侧弹出 popup</mt-button>
      <mt-button
        size="large"
        @click.native="showLeftPopup"
      >左侧弹出 popup</mt-button>
      <mt-button
        size="large"
        @click.native="showBottomPopup"
      >下侧弹出 popup</mt-button>
    </div>

    <mt-popup
      ref="middlePopup"
      :class="{ 'mint-popup-1': true }"
    >
      <h1>popup</h1>
      <p>popup --- list1</p>
      <p>popup --- list2</p>
      <p>popup --- list3</p>
    </mt-popup>

    <mt-popup
      position="top"
      ref="topPopup"
      :modal="false"
      :class="{ 'mint-popup-2': true }"
    >
      <p>更新成功</p>
    </mt-popup>

    <mt-popup
      position="right"
      ref="rightPopup"
      :class="{ 'mint-popup-3': true }"
    >
      <mt-button size="large" type="primary" @click.native="closeRightPopup">关闭 popup</mt-button>
    </mt-popup>

    <mt-popup
      position="left"
      ref="leftPopup"
      :class="{ 'mint-popup-3': true }"
    >
      <mt-button size="large" type="primary" @click.native="closeLeftPopup">关闭 popup</mt-button>
    </mt-popup>

    <mt-popup
      position="bottom"
      ref="bottomPopup"
      :modal="false"
      :class="{ 'mint-popup-2': true }"
    >
      <p>更新成功</p>
    </mt-popup>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";
import Popup from "@components/popup";

export default {
  name: "Popup",
  components: {
    "mt-header": Header,
    "mt-button": Button,
    "mt-popup": Popup
  },
  data() {
    return {
      position: "",
      modal: ""
    };
  },
  methods: {
    showMiddlePopup() {
      this.$refs.middlePopup.show();
    },

    showTopPopup() {
      this.$refs.topPopup.show();

      setTimeout(() => {
        this.$refs.topPopup.hide();
      }, 1200);
    },

    showRightPopup() {
      this.$refs.rightPopup.show();
    },

    showLeftPopup() {
      this.$refs.leftPopup.show();
    },

    showBottomPopup() {
      this.$refs.bottomPopup.show();

      setTimeout(() => {
        this.$refs.bottomPopup.hide();
      }, 1200);
    },

    closeRightPopup() {
      this.$refs.rightPopup.hide();
    },

    closeLeftPopup() {
      this.$refs.leftPopup.hide();
    }
  }
};
</script>

<style lang="scss" scoped>
.mt-content {
  padding-left: 10px;
  padding-right: 10px;

  .mint-button {
    margin-bottom: 15px;
  }
}

.mint-popup-1 {
  width: 200px;
  border-radius: 8px;
  padding: 10px;

  h1 {
    font-size: 20px;
    color: #26a2ff;
  }

  p {
    margin-bottom: 10px;
  }
}

.mint-popup-2 {
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: rgba(0, 0, 0, .7);

  p {
    color: #fff;
    line-height: 50px;
  }
}

.mint-popup-3 {
  width: 80%;
  height: 100%;
  text-align: center;
  background-color: #fff;

  & > .mint-button--large {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
