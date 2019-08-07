<template>
  <div class="product">
    <header class="g-header-container">
      <product-header/>
    </header>
    <div class="g-view-container">
      <product-content/>
    </div>
    <div class="g-footer-container">
      <pro-tab/>
    </div>
  </div>
</template>

<script>
  import ProductHeader from './header';
  import ProductContent from './content';
  import ProTab from 'components/protab/';

  export default {
    name: 'Product',
    components: {
      ProductHeader,
      ProductContent,
      ProTab
    }
  };

</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .product {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

    position: absolute;
    top: 0;
    left: 0;
    z-index: $product-z-index;
  }

</style>
