<template>
  <div class="container">
    <searchbar v-model="searchValue" @enter="enter"></searchbar>
  </div>
</template>

<script>
import Searchbar from '@components/searchbar'

const Console = console;

export default {
  name: 'Search',
  components: {
    "searchbar": Searchbar
  },
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    enter() {
      Console.log(this.searchValue);
    }
  }
}
</script>