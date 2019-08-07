<template>
  <swiper :options="swiperOption" ref='swiper'>
    <!-- 下拉 -->
    <div class="mine-scroll-pull-down" v-if="pullDown">
      <me-loading :text="pullDownText" inline ref="pullDownLoading"/>
    </div>
    <!-- 滚动内容 -->
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <!-- 上拉 -->
    <div class="mine-scroll-pull-up" v-if="pullUp">
      <me-loading :text="pullUpText" inline ref="pullUpLoading"/>
    </div>
    <!-- 滚动条 -->
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import MeLoading from '../../base/loading';
  import {
    PULL_DOWN_HEIGHT,
    PULL_DOWN_TEXT_INIT,
    PULL_DOWN_TEXT_START,
    PULL_DOWN_TEXT_ING,
    PULL_DOWN_TEXT_END,
    PULL_UP_HEIGHT,
    PULL_UP_TEXT_INIT,
    PULL_UP_TEXT_START,
    PULL_UP_TEXT_ING,
    PULL_UP_TEXT_END
  } from './config';

  export default {
    name: 'MeScroll',
    components: {
      swiper,
      swiperSlide,
      MeLoading
    },
    props: {
      scrollbar: {
        type: Boolean,
        default: true
      },
      data: {
        type: [Array, Object]
      },
      pullDown: {
        type: Boolean,
        default: false
      },
      pullUp: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      data() {
        this.update();
      }
    },
    created() {
      this.init();
    },
    methods: {
      update() {
        this.$refs.swiper && this.$refs.swiper.swiper.update();
      },
      scrollToTop(speed, runCallbacks) {
        this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, speed, runCallbacks);
      },
      init() {
        this.pulling = false;
        this.pullDownText = PULL_DOWN_TEXT_INIT;
        this.pullUpText = PULL_DOWN_TEXT_INIT;// 没有
        this.swiperOption = {
          direction: 'vertical', // 垂直滑动
          slidesPerView: 'auto', // sliders 数量自适应
          freeMode: true, // 为true则变为free模式，slide会根据惯性滑动可能不止一格
          setWrapperSize: true, // Swiper使用flexbox布局，在Wrapper上添加等于slides相加的宽或高
          scrollbar: { // 设置滚动条
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true
          },
          on: {
            sliderMove: this.scroll, // 手指触碰Swiper并拖动slide时执行
            touchEnd: this.touchEnd, // 触摸释放时执行
            transitionEnd: this.scrollEnd // 向上滑动时监听scrollEnd
          }
        };
      },

      scroll() {
        const swiper = this.$refs.swiper.swiper;
        // 监控什么时候出现回到顶部

        this.$emit('scroll', swiper.translate, this.$refs.swiper.swiper);

        if (this.pulling) {
          return;
        }
        console.log(swiper.translate);
        if (swiper.translate > 0) { // 下拉
          if (!this.pullDown) {
            return;
          }
          if (swiper.translate > PULL_DOWN_HEIGHT) { // 修改加载文字
            this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START);
          } else {
            this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
          }
        } else if (swiper.isEnd) { // 上拉
          if (!this.pullUp) {
            return;
          }

          const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'));

          if (isPullUp) {
            this.$refs.pullUpLoading.setText(PULL_UP_TEXT_START);
          } else {
            this.$refs.pullUpLoading.setText(PULL_UP_TEXT_INIT);
          }
        }
      },
      scrollEnd() {
        const swiper = this.$refs.swiper.swiper;

        this.$emit('scroll-end', swiper.translate, swiper, this.pulling);
      },
      touchEnd() {
        if (this.pulling) {
          return;
        }
        const swiper = this.$refs.swiper.swiper;

        if (swiper.translate > PULL_DOWN_HEIGHT) { // 下拉
          if (!this.pullDown) {
            return;
          }
          this.pulling = true;
          swiper.allowTouchMove = false; // 禁止触摸
          swiper.setTransition(swiper.params.speed);
          swiper.setTranslate(PULL_DOWN_HEIGHT);
          swiper.params.virtualTranslate = true; // 定住不给回弹
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING);
          this.$emit('pull-down', this.pullDownEnd); // 触发一个事件
        } else if (swiper.isEnd) { // 底部
          const totalHeight = parseInt(swiper.$wrapperEl.css('height'));
          const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > totalHeight;

          if (isPullUp) { // 上拉
            if (!this.pullUp) {
              return;
            }
            this.pulling = true;
            swiper.allowTouchMove = false; // 禁止触摸
            swiper.setTransition(swiper.params.speed);
            swiper.setTranslate(-(totalHeight + PULL_UP_HEIGHT - swiper.height));
            swiper.params.virtualTranslate = true; // 定住不给回弹
            this.$refs.pullUpLoading.setText(PULL_UP_TEXT_ING);
            this.$emit('pull-up', this.pullUpEnd);
          }
        }
      },
      pullDownEnd() {
        const swiper = this.$refs.swiper.swiper;

        this.pulling = false;
        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END);
        swiper.params.virtualTranslate = false; // 可以回弹
        swiper.allowTouchMove = true; // 可以触摸
        swiper.setTransition(swiper.params.speed);
        swiper.setTranslate(0);
        setTimeout(() => {
          this.$emit('pull-down-transition-end');
        }, swiper.params.speed);
      },
      pullUpEnd() {
        const swiper = this.$refs.swiper.swiper;
        this.pulling = false;
        this.$refs.pullUpLoading.setText(PULL_UP_TEXT_END);
        swiper.params.virtualTranslate = false;
        swiper.allowTouchMove = true;
      }
    }
  };
</script>
<style lang="scss" scoped>
  .swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  };

  .swiper-slide {
    height: auto;
  }
  .mine-scroll-pull-up,
  .mine-scroll-pull-down {
    position: absolute;
    left: 0;
    width: 100%;
  }
  .mine-scroll-pull-down {
    bottom: 100%;
    height: 80px;
  }

  .mine-scroll-pull-up {
    top: 100%;
    height: 30px;
  }
</style>
