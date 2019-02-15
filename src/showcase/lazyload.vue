<template>
  <div class="container">
    <mt-header title="Lazy Load">
      <mt-button
        icon="back"
        slot="left"
      >返回</mt-button>
    </mt-header>
    <div class="mt-body">
      <ul>
        <li
          v-for="(v, i) in imgList"
          :key="i"
        >
          <!-- 使用 v-lazy 指令来控制图片的懒加载 -->
          <img
            v-lazy="v"
            alt=""
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "@components/header";
import Button from "@components/button";

export default {
  name: "LazyLoad",
  components: {
    "mt-header": Header,
    "mt-button": Button
  },
  data() {
    return {
      imgList: [
        "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery1.jpg",
        "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery2.jpg",
        "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery3.jpg",
        "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery4.jpg",
        "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery1.jpg",
        "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery2.jpg",
        "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery3.jpg",
        "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery4.jpg",
        "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery1.jpg",
        "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery2.jpg",
        "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery3.jpg",
        "https://fe.epoint.com.cn/m7showcase/showcase/widgets/gallery/images/testgallery4.jpg"
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
  padding: 10px;

  ul li {
    background-color: #ddd;
    margin-bottom: 10px;
    text-align: center;

    img {
      width: 100%;
      height: 100%;
    }

    // 替代未加载图片的 loading 效果，提升用户体验
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }
}
</style>