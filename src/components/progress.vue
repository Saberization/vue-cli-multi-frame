<template>
  <mt-progress :value="20" :bar-height="5"></mt-progress>
</template>

<script>
  import { Progress } from 'mint-ui';

  export default {
    name: 'Progress',
    components: {
      "mt-progress": Progress
    }
  };
</script>

<style lang="scss">
  
</style>