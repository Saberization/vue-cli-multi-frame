<template>
  <mt-loadermore
    :top-method="loadTop"
    :bottom-method="loadBottom"
    :autoFill="settings.autoFill"
    :distanceIndex="settings.distanceIndex"
    :maxDistance="settings.maxDistance"
    :topPullText="settings.topPullText"
    :topDropText="settings.topDropText"
    :topLoadingText="settings.topLoadingText"
    :topDistance="settings.topDistance"
    :bottomPullText="settings.bottomPullText"
    :bottomDropText="settings.bottomDropText"
    :bottomLoadingText="settings.bottomLoadingText"
    :bottomDistance="settings.bottomDistance"
    :bottomAllLoaded="settings.bottomAllLoaded"
    :topMethod="settings.pullDown"
    :bottomMethod="settings.pullUp"
    ref="loadmore"
  >
    <slot></slot>
  </mt-loadermore>
</template>

<script>
import { Loadmore } from "mint-ui";
import Util from "@util/";

export default {
  name: "Loadmore",
  components: {
    "mt-loadermore": Loadmore
  },
  data() {
    return {
      settings: {},
      ajaxSettings: {}
    };
  },
  methods: {
    loadTop() {},
    loadBottom() {},
    PullToRefresh(options) {
      const ajaxSettings = options.ajaxSettings;

      // 设置下拉刷新配置
      this.setRefreshSetting(options.settings);
      // 设置 ajaxSetting
      this.setAjaxSetting(options.ajaxSettings);
    },
    
    /**
     * 设置下拉刷新配置
     * @param {Object} settings 配置项
     */
    setRefreshSetting(settings) {
      settings = settings || {};

      // 默认配置项
      const defaultSettings = {
        // 若为真，PullToRefresh 会自动检测并撑满其容器
        autoFill: true,
        // 手指移动与组件移动距离的比值
        distanceIndex: 2,
        // 组件可移动的最大距离（像素），若为 0 则不限制
        maxDistance: 0,
        // topStatus 为 pull 时加载提示区域的文字
        topPullText: "下拉刷新",
        // topStatus 为 drop 时加载提示区域的文字
        topDropText: "释放更新",
        // topStatus 为 loading 时加载提示区域的文字
        topLoadingText: "加载中...",
        // 触发 topMethod 的下拉距离阈值（像素）
        topDistance: 70,
        // 下拉刷新事件回调，每次下拉刷新后会触发
        pullDown() {},
        // bottomStatus 为 pull 时加载提示区域的文字
        bottomPullText: "上拉刷新",
        // bottomStatus 为 drop 时加载提示区域的文字
        bottomDropText: "释放更新",
        // bottomStatus 为 loading 时加载提示区域的文字
        bottomLoadingText: "加载中...",
        // 触发 bottomMethod 的上拉距离阈值（像素）
        bottomDistance: 70,
        // 上拉刷新事件回调，每次上拉刷新后会触发
        pullUp() {},
        // 若为真，则 bottomMethod 不会被再次触发
        bottomAllLoaded: false
      };

      if (settings && typeof settings === 'object') {
        Object.assign(defaultSettings, settings);
      }

      this.settings = settings;
    },

    setAjaxSetting() {

    }
  }
};
</script>