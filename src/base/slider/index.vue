<template>
  <swiper :options="swiperOption" :key="keyId">
    <slot></slot>
    <!-- 分页器 -->
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import {swiper} from 'vue-awesome-swiper';
  export default {
    name: 'MeSlider',
    components: {
      swiper
    },
    props: {
      direction: { // 定义 Slides 的滑动方向
        type: String,
        default: 'horizontal', // 默认水平
        validator(value) { // 验证值，只允许水平或垂直
          return [
            'horizontal',
            'vertical'
          ].indexOf(value) > -1;
        }
      },
      interval: { // 控制是否自动轮播
        type: Number,
        default: 3000, // 设置轮播速度默认为3秒
        validator(value) { // 验证 value 大于0则开启
          return value >= 0;
        }
      },
      loop: { // 设置为true 则开启loop模式(无缝滚动)。
        type: Boolean,
        default: true
      },
      pagination: { // 设置为true 则有分页器。
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default() {
          return [];
        }
      }

    },
    data() {
      return {
        keyId: Math.random()
      };
    },
    watch: {
      data(newData) {
        if (newData.length === 0) {
          return;
        }
        this.swiperOption.loop = newData.length === 1 ? false : this.loop;
        this.keyId = Math.random();
      }

    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.swiperOption = {
          watchOverflow: true, // 仅有1个slide，swiper无效
          direction: this.direction, // 切换方向
          autoplay: this.interval ? { // 通过 interval 开启自动轮播
            delay: this.interval, // 自动切换的时间间隔
            disableOnInteraction: false// 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
          } : false,
          slidesPerView: 1, // 设置slider容器能够同时显示的sliders数量
          loop: this.data.length <= 1 ? false : this.loop, // 无缝滚动
          pagination: { // 设置分页器
            el: this.pagination ? '.swiper-pagination' : null
          }
        };
      }
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }

</style>
