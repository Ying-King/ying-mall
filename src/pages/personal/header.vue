<template>
  <me-navbar class="header">
    <i class="iconfont icon-setting" slot="left"></i>
    <span class="title" slot="center">个人中心</span>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>
<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'PersonalHeader',
    components: {
      MeNavbar
    }
  };

</script>
<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    border-bottom: 1px solid $header-bgc-translucent;
    text-align: center;

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
