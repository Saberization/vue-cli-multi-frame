<template>
  <mt-loadermore
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
      :topMethod="topMethod"
      :bottomMethod="bottomMethod"
      ref="loadmore"
    >
      <slot></slot>
      <mt-indicator ref="waiting"></mt-indicator>
    </mt-loadermore>
</template>

<script>
import { Loadmore } from "mint-ui";
import Util from "@util";
import Indicator from "@components/indicator";

export default {
  name: "Loadmore",
  components: {
    "mt-loadermore": Loadmore,
    "mt-indicator": Indicator
  },
  data() {
    return {
      settings: {},
      ajaxSettings: {},
      options: {
        // 接口请求的初始页面,根据不同项目服务器配置而不同,默认为0
        initPageIndex: 0,
        // 每次请求的最大超时时间，默认为6000
        timeout: 6000
      },
      url: null,
      pageIndex: null,
      requestData: null
    };
  },
  methods: {
    // 下拉刷新执行的方法
    topMethod() {
      const pullDown = this.settings.pullDown;
      const that = this;

      this.pageIndex = this.options.initPageIndex;
      this.dataRequest(this.pageIndex, function() {
        that.$refs.loadmore.onTopLoaded();
      });

      pullDown && typeof pullDown === "function" && pullDown();
    },
    // 上拉刷新执行的方法
    bottomMethod() {
      const pullUp = this.settings.pullUp;
      const that = this;

      this.pageIndex++;
      this.dataRequest(this.pageIndex, function() {
        that.$refs.loadmore.onBottomLoaded();
      });

      pullUp && typeof pullUp === "function" && pullUp();
    },
    /**
     * 初始化下拉刷新
     * @param {Object} options 配置项
     */
    PullToRefresh(options) {
      Object.assign(this.options, options);

      this.pageIndex = options.initPageIndex;
      // 设置下拉刷新配置
      this.setRefreshSetting(options.settings);
      // 设置 ajaxSetting
      this.setAjaxSetting(options.ajaxSettings);
      // 请求下拉数据
      this.dataRequest(this.pageIndex);
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
        pullDown: null,
        // bottomStatus 为 pull 时加载提示区域的文字
        bottomPullText: "上拉刷新",
        // bottomStatus 为 drop 时加载提示区域的文字
        bottomDropText: "释放更新",
        // bottomStatus 为 loading 时加载提示区域的文字
        bottomLoadingText: "加载中...",
        // 触发 bottomMethod 的上拉距离阈值（像素）
        bottomDistance: 70,
        // 上拉刷新事件回调，每次上拉刷新后会触发
        pullUp: null,
        // 若为真，则 bottomMethod 不会被再次触发
        bottomAllLoaded: false,
        // 延迟请求的时间，单位为毫秒，默认为 0
        delay: 0
      };

      if (settings && typeof settings === "object") {
        Object.assign(defaultSettings, settings);
      }

      this.settings = settings;
    },

    /**
     * 设置 ajax 配置项
     * @param {Object} ajaxSettings 配置项
     */
    setAjaxSetting(ajaxSettings) {
      ajaxSettings = ajaxSettings || {};
      ajaxSettings.timeout = this.options.timeout;

      Object.assign(this.ajaxSettings, ajaxSettings);
    },

    /**
     * 请求下拉刷新数据
     * @param {Number} pageIndex 页面 Index
     * @param {Function} complete 成功运行函数
     */
    dataRequest(pageIndex, complete) {
      const options = this.options;
      const url = options.url;
      const dataRequest = options.dataRequest;
      const success = options.success || new Function();
      const error = options.error || new Function();
      const Console = console;

      let requestData = null,
        requestDataBackValue = null;

      if (!url) {
        Console.error("接口地址不能为空");
        return;
      }

      if (typeof dataRequest !== "function") {
        Console.error("请求参数不能为空");
        return;
      }

      // 获取请求参数
      requestData = dataRequest(pageIndex, function(data) {
        requestDataBackValue = data;
      });

      if (requestData) {
        this.requestData = requestData;
      }

      if (requestDataBackValue) {
        this.requestData = requestDataBackValue;
      }

      const ajaxOptions = Object.assign(this.ajaxSettings, {
        url,
        data: requestData
      });

      Util.request(ajaxOptions)
        .then(response => {
          success(response.data, pageIndex, response);
          complete && typeof complete === "function" && complete();
        })
        .catch(err => {
          error(err);
          complete && typeof complete === "function" && complete();
        });
    },

    /**
     * 手动刷新
     */
    refresh() {
      const that = this;

      this.pageIndex = this.options.initPageIndex;
      this.$refs.waiting.showWaiting();
      this.dataRequest(this.pageIndex, function() {
        that.$refs.waiting.closeWaiting();
      });
    }
  }
};
</script>