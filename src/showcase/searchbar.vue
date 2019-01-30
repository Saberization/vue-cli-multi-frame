<template>
  <div class="container">
    <searchbar v-model="searchValue"></searchbar>
  </div>
</template>

<script>
import Searchbar from '@components/searchbar'

export default {
  name: 'Search',
  components: {
    "searchbar": Searchbar
  },
  data() {
    return {
      searchValue: ""
    };
  }
}
</script>