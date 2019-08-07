<template>
  <me-navbar class="header">
    <i class="iconfont icon-back" slot="left" @click="goBack"></i>
    <span class="title" slot="center">商品详情</span>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>
<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'ProductHeader',
    components: {
      MeNavbar
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  };

</script>
<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    border-bottom: 1px solid $border-color;
    background-color: $header-bgc-translucent;
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
