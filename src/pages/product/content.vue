<template>
  <div class="content-wrapper">
    <div class="loading-container" v-if="!pic">
      <div class="loading-wrapper">
        <me-loading />
      </div>
    </div>
    <me-scroll v-else>
      <div class="content">
        <img :src="pic" alt="" class="slider-img">
        <div class="sales">
          <span>￥<strong class="sales-price">{{price}}</strong></span>
          <span class="sales-count">{{count}}件已售</span>
        </div>
        <h3 class="title">{{name}}</h3>
        <div class="info">
          <span>快递包邮</span>
          <span>{{infoFirst}}</span>
          <span>{{infoSecond}}</span>
        </div>
        <div class="review">

        </div>
        <div class="seller">
          <div class="seller-info">
            <div class="seller-name">
              <h5 class="seller-name-text">{{sellerName}}</h5>
              <p><img class="seller-name-img"
                  src="https://gw.alicdn.com/tfs/TB1QoJUIwmTBuNjy1XbXXaMrVXa-84-36.png?getAvatar=avatar" alt=""></p>
            </div>
          </div>
          <div class="seller-score">
            <span >宝贝描述 4.8 </span>
            <span >卖家服务 4.8 </span>
            <span >物流服务 4.8 </span>
            </div>
        </div>
      </div>
    </me-scroll>
  </div>
</template>

<script>
  import MeLoading from 'base/loading';
  import MeScroll from 'base/scroll';
  export default {
    name: 'ProductContent',
    components: {
      MeScroll,
      MeLoading
    },
    data() {
      return {
        pic: '',
        name: '',
        price: '',
        count: '',
        infoFirst: '',
        infoSecond: '',
        sellerName: ''
      };
    },
    mounted() {
      this.pic = this.$route.params.pic;
      this.name = this.$route.params.name;
      this.price = this.$route.params.price;
      this.count = this.$route.params.count;
      this.infoFirst = this.$route.params.infoFirst;
      this.infoSecond = this.$route.params.infoSecond;
      this.sellerName = this.$route.params.sellerName;
    }
  };

</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .loading-container {
    position: absolute;
    top: 0;
    left: 0;
    @include flex-center();
    width: 100%;
    height: 100%;

    .mine-loading {
      color: #555;
      font-size: 14px;
    }
  }

  .content-wrapper {
    position: relative;
    height: 100%;
    padding-top: 50px;
  }

  .slider-img {
    width: 100%;
    height: 100%;
  }

  .sales {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background: linear-gradient(90deg, #ef3390, #ef3647);
    padding: 0 10px;
    color: #fff;

    &-price {
      font-size: 20px;
      font-weight: 400;
    }

    &-count {
      padding: 8px 10px;
      background-color: rgba(0, 0, 0, .15);
      border-radius: 4px;
    }
  }

  .title {
    padding: 10px;
    background-color: #fff;
    color: #051b28;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 0 10px;
    background-color: #fff;
    margin-bottom: 10px;
    color: #999;
  }

  .seller {
    padding: 10px;
    background-color: #fff;

    &-name {
      display: flex;
      flex-direction: column;
      justify-content: center;

      &-text {
        margin-bottom: 6px;
        color: #333;
        font-size: 16px;
        font-weight: 400;
      }

      &-img {
        height: 15px;
      }
    }
    &-score {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 40px;
      color: #999;
    }
  }

</style>
