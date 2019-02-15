<template>
  <div class="container">
    <mt-header title="Gallery">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>

    <div class="mt-body">
      <mt-gallery
        :data="galleryData"
        maxImgHeight="250px"
      ></mt-gallery>
    </div>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";
import Gallery from "@components/gallery";

export default {
  name: "Gallery",
  components: {
    "mt-header": Header,
    "mt-button": Button,
    "mt-gallery": Gallery
  },
  data() {
    return {
      galleryData: [
        {
          guid: "47ee3fc6-ce5f-40b2-8abc-68bc3091f830",
          title:
            "testgaller1多了内容会有省略号省略号省略号省略号省略号省略号省略号省略号省略号",
          pic:
            "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery1.jpg"
        },
        {
          guid: "c0aa1496-f27a-4cd4-a6b6-57175e54ab67",
          title: "testgaller2",
          pic:
            "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery2.jpg"
        },
        {
          guid: "65b1bdb2-5ced-2d6d-14ed-84e7caf976d5",
          title: "testgaller3",
          pic:
            "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery3.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.mt-body {
  position: absolute;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>