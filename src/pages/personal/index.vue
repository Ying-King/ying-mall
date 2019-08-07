<template>
  <div class="personal">
    <header class="g-header-container">
      <personal-header/>
    </header>
    <me-scroll ref="scroll">
      <img src="https://moco.imooc.com/html/vue/static/img/personal.57ffd39.png" alt="">
    </me-scroll>
  </div>
</template>

<script>
  import PersonalHeader from './header';
  import MeScroll from 'base/scroll';

  export default {
    name: 'Personal',
    components: {
      PersonalHeader,
      MeScroll
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .personal {
    overflow:hidden;
    width:100%;
    height:100%;

    .header {
      background-color: $header-bgc-translucent;
    }

    img {
      margin-top: 50px;
      width: 100%;
    }
  }
</style>
