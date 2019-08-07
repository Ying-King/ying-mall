<template>
  <div class="g-tabbar">
    <a class="g-tabbar-item" href="javascript:;">
      <i class="iconfont icon-shop"></i>
      <span>店铺</span>
    </a>
    <a class="g-tabbar-item" href="javascript:;">
      <i class="iconfont icon-service"></i>
      <span>客服</span>
    </a>
    <a class="g-tabbar-item" href="javascript:;">
      <i class="iconfont icon-collect"></i>
      <span>收藏</span>
    </a>
    <div class="tabbar-btns">
      <button class="g-tabbar-item tabbar-btn tabbar-btn-cart">加入购物车</button>
      <button class="g-tabbar-item tabbar-btn tabbar-btn-buy">立即购买</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProTab'
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_mixins.scss";

  .tabbar-btns {
    display: flex;
    width: 60%;

    .tabbar-btn {
      flex: 1;
      border: none;
      color: #fff;
      font-size: 14px;
    }
  }
  .tabbar-btn-cart {
    background-color: #ff9500;
  }

  .tabbar-btn-buy {
    background-color: #ff0036;
  }

</style>
