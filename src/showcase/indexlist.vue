<template>
  <div class="container">
    <mt-header title="Index List">
      <mt-button icon="back" slot="left">返回</mt-button>
    </mt-header>

    <div class="mt-body">
      <mt-index-list :listdata="listdata" @click="itemClick($event)"></mt-index-list>
    </div>
  </div>
</template>

<script>
import Header from '@components/header';
import Button from "@components/button";
import IndexList from "@components/indexlist";

export default {
  name: "indexlist",
  components: {
    'mt-button': Button,
    'mt-header': Header,
    'mt-index-list': IndexList
  },
  data() {
    return {
      listdata: [{
        tag: 'A',
        children: [{
          text: 'Aaron',
          attribute: {
            value: 'Aar'
          }
        }, {
          text: 'Alden',
          attribute: {
            value: 'Ald'
          }
        }, {
          text: 'Austin',
          attribute: {
            value: 'Aus'
          }
        }]
      }, {
        tag: 'B',
        children: [{
          text: 'Baldwin',
          attribute: {
            value: 'Bald'
          }
        }, {
          text: 'Braden',
          attribute: {
            value: 'Brad'
          }
        }]
      }, {
        tag: 'C',
        children: [{
          text: 'Carl',
          attribute: {
            value: 'Carl'
          }
        }, {
          text: 'Chandler',
          attribute: {
            value: 'Chan'
          }
        }, {
          text: 'Clyde',
          attribute: {
            value: 'Cly'
          }
        }]
      }, {
        tag: 'D',
        children: [{
          text: 'David',
          attribute: {
            value: 'Dav'
          }
        }]
      }, {
        tag: 'E',
        children: [{
          text: 'Edgar',
          attribute: {
            value: 'Edg'
          }
        }, {
          text: 'Elton',
          attribute: {
            value: 'Elt'
          }
        }]
      }, {
        tag: 'F',
        children: [{
          text: 'Floyd',
          attribute: {
            value: 'Flo'
          }
        }, {
          text: 'Freeman',
          attribute: {
            value: 'Free'
          }
        }]
      }, {
        tag: 'G',
        children: [{
          text: 'Gavin',
          attribute: {
            value: 'Gav'
          }
        }]
      }, {
        tag: 'H',
        children: [{
          text: 'Hector',
          attribute: {
            value: 'Hec'
          }
        }, {
          text: 'Henry',
          attribute: {
            value: 'Hen'
          }
        }]
      }, {
        tag: 'I',
        children: [{
          text: 'lan',
          attribute: {
            value: 'lan'
          }
        }]
      }]
    };
  },
  methods: {
    itemClick({ tag, attribute, text, el }) {
      const Console = console;

      Console.log('tag: ' + tag, 'text: ' + text, 'attribute: ' + JSON.stringify(attribute));
      Console.log(el);
    }
  }
}
</script>

<style type="scss">
  html,
  body {
    touch-action: none;
  }
</style>
