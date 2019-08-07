<template>
  <me-navbar class="header">
    <span class="title" slot="left">购物车</span>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>
<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'CartHeader',
    components: {
      MeNavbar
    }
  };

</script>
<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    border-bottom: 1px solid $header-bgc-translucent;
    background-color: $header-bgc-translucent;

    .title {
      color: $icon-color-default;
      font-size: $icon-font-size-sm;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }

</style>
