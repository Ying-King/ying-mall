<template>
  <div class="cart">
    <header class="g-header-container">
      <cart-header/>
    </header>
    <me-scroll>
      <img src="../../assets/img/cart.png">
    </me-scroll>
  </div>
</template>

<script>
  import CartHeader from './header';
  import MeScroll from 'base/scroll';
  export default {
    name: 'cart',
    components: {
      CartHeader,
      MeScroll
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .cart {
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
