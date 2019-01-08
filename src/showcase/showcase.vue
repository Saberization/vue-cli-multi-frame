<template>
  <div class="container">
    <div class="showcase-group">
      <div v-for="(v, i) in components">
        <div class="sg-title">{{v.title}}</div>
        <cell
          v-for="(_v, _i) in v.category"
          :title="_v.title"
          :icon="_v.icon"
          :is-link="_v.isLink"
        >
        </cell>
      </div>
    </div>
  </div>
</template>

<script>
import '@assets/css/font.css';
import Cell from "@components/cell";

export default {
  name: 'ShowCase',
  components: {
    'cell': Cell
  },
  data() {
    return {
      components: [{
        title: 'JS Components',
        category: [{
          title: 'Toast',
          icon: 'toast'
        }, {
          title: 'Indicator',
          icon: 'indicator'
        }, {
          title: 'Pull down',
          icon: 'pull-down'
        }, {
          title: 'Pull up',
          icon: 'pull-up'
        }, {
          title: 'Infinite scroll',
          icon: 'infinite-scroll'
        }, {
          title: 'Message box',
          icon: 'message-box'
        }, {
          title: 'Action sheet',
          icon: 'action-sheet'
        }, {
          title: 'Popup',
          icon: 'popup'
        }, {
          title: 'Swipe',
          icon: 'swipe'
        }, {
          title: 'Lazy load',
          icon: 'lazyload'
        }, {
          title: 'Range',
          icon: 'range'
        }, {
          title: 'Progress',
          icon: 'progress'
        }, {
          title: 'Picker',
          icon: 'picker'
        }, {
          title: 'Datetime Picker',
          icon: 'time'
        }, {
          title: 'Index List',
          icon: 'alphabet'
        }, {
          title: 'Palette Button',
          icon: 'alphabet'
        }]
      }, {
        title: 'CSS Components',
        category: [{
          
        }]
      }]
    }
  }
};
</script>

<style lang="scss">
.showcase-group {
  .sg-title {
    font-size: 20px;
    margin: 20px auto;
    text-align: center;
    display: block;
    line-height: 1;
  }

  i {
    margin-top: 2px;
    font-size: 22px;
    color: #26a2ff;
    display: inline-block;
    width: 30px;
    vertical-align: middle;
    font-family: "indexmintui" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>