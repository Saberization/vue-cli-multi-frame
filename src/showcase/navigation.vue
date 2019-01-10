<template>
  <div class="container">
    <div class="showcase-group">
      <div
        v-for='(v, i) in components'
        :key='i'
      >
        <div class="sg-title">{{v.title}}</div>
        <cell
          v-for='(_v, _i) in v.category'
          :key='_i'
          :title='_v.title'
          :icon='_v.icon'
          :is-link='_v.isLink'
          :to='_v.to'
        >
        </cell>
      </div>
    </div>
  </div>
</template>

<script>
import '@assets/css/font.css';
import Cell from '@components/cell';

export default {
  name: 'ShowCase',
  components: {
    cell: Cell
  },
  data() {
    return {
      components: [
        {
          title: 'JS Components(JS 组件)',
          category: [
            {
              title: 'Toast',
              icon: 'toast',
              to: '/toast'
            },
            {
              title: 'Indicator',
              icon: 'indicator'
            },
            {
              title: 'Pull down',
              icon: 'pull-down'
            },
            {
              title: 'Pull up',
              icon: 'pull-up'
            },
            {
              title: 'Infinite scroll',
              icon: 'infinite-scroll'
            },
            {
              title: 'Message box',
              icon: 'message-box'
            },
            {
              title: 'Action sheet',
              icon: 'action-sheet'
            },
            {
              title: 'Popup',
              icon: 'popup'
            },
            {
              title: 'Swipe',
              icon: 'swipe'
            },
            {
              title: 'Lazy load',
              icon: 'lazyload'
            },
            {
              title: 'Range',
              icon: 'range'
            },
            {
              title: 'Progress',
              icon: 'progress'
            },
            {
              title: 'Picker',
              icon: 'picker'
            },
            {
              title: 'Datetime Picker',
              icon: 'time'
            },
            {
              title: 'Index List',
              icon: 'alphabet'
            },
            {
              title: 'Palette Button',
              icon: 'alphabet'
            }
          ]
        },
        {
          title: 'CSS Components(CSS 组件)',
          category: [
            {
              title: 'Header',
              icon: 'header',
              to: '/header'
            },
            {
              title: 'Tabbar',
              icon: 'tabbar'
            },
            {
              title: 'Navbar',
              icon: 'navbar'
            },
            {
              title: 'Button',
              icon: 'button',
              to: '/button'
            },
            {
              title: 'Cell',
              icon: 'cell'
            },
            {
              title: 'Cell Swipe',
              icon: 'cell'
            },
            {
              title: 'Spinner',
              icon: 'spinner'
            },
            {
              title: 'TabContainer',
              icon: 'panel'
            },
            {
              title: 'Search',
              icon: 'searchbar'
            }
          ]
        },
        {
          title: 'Form Components(表单组件)',
          category: [
            {
              title: 'Switch',
              icon: 'switch'
            },
            {
              title: 'Checklist',
              icon: 'checklist'
            },
            {
              title: 'Radio',
              icon: 'radio'
            },
            {
              title: 'Field',
              icon: 'field'
            },
            {
              title: 'Badge',
              icon: 'badge'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
.showcase-group {
  i {
    margin-top: 2px;
    font-size: 22px;
    color: #26a2ff;
    display: inline-block;
    width: 30px;
    vertical-align: middle;
    font-family: 'indexmintui' !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>