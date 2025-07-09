<template>
  <Swiper
    :modules="[Pagination,Mousewheel]"
    direction="vertical"
    :pagination="{ clickable: true }"
    :mousewheel="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="mySwiper"
  >
    <SwiperSlide>
    <Home1 :active="activeIndex === 0"></Home1>
    </SwiperSlide>


    <SwiperSlide>
    <Home2 :active="activeIndex === 1"></Home2>
    </SwiperSlide>

    <SwiperSlide>
      <Home3 :active="activeIndex === 2"></Home3>
    </SwiperSlide>

    <SwiperSlide>
      <Home4 :active="activeIndex === 3"></Home4>
    </SwiperSlide>

    <SwiperSlide>
      <Home5 :active="activeIndex === 4"></Home5>
    </SwiperSlide>

    <SwiperSlide>
      <Home6 :active="activeIndex === 5"></Home6>
    </SwiperSlide>

    <SwiperSlide>
      <Home7 :active="activeIndex === 6"></Home7>
    </SwiperSlide>

    <SwiperSlide>
      <Home8 :active="activeIndex === 7"></Home8>
    </SwiperSlide>

    <SwiperSlide>
      <Home9 :active="activeIndex === 8"></Home9>
    </SwiperSlide>
  </Swiper>
  <ToTop @go-first="goToFirstSlide" />
</template>

<script setup>
// import Footer from '@/components/Footer.vue'
import ToTop from '@/components/ToTop.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination,Mousewheel } from 'swiper/modules'
import {ref} from 'vue'
import Home1 from './components/Home1.vue'
import Home2 from './components/Home2.vue'
import Home3 from './components/Home3.vue'
import Home4 from './components/Home4.vue'
import Home5 from './components/Home5.vue'
import Home6 from './components/Home6.vue'
import Home7 from './components/Home7.vue'
import Home8 from './components/Home8.vue'
import Home9 from './components/Home9.vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'

const activeIndex = ref(0)
const swiperRef = ref(null)
const onSwiper = (swiper) => {
  swiperRef.value = swiper
  activeIndex.value = swiper.activeIndex
}
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
  console.log(22);

}
const goToFirstSlide = () => {
  if (swiperRef.value && swiperRef.value.slideTo) {
    swiperRef.value.slideTo(0)
  }
}
</script>

<style scoped>
.mySwiper {
  width: 100vw;
  height: 100vh;
}

.swiper-slide {
  display: block;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: visible;
  /* 不要设置overflow-y: auto; */
}

/* 响应式适配 */
@media (max-width: 900px) {
  .mySwiper {
    width: 100vw;
    height: 100dvh;
    min-height: 100dvh;
  }
  .swiper-slide {
    padding: 0;
    margin: 0;
    min-height: 100dvh;
    background: #fff;
    box-sizing: border-box;
  }
}
@media (max-width: 600px) {
  .mySwiper {
    width: 100vw;
    height: 100dvh;
    min-height: 100dvh;
  }
  .swiper-slide {
    min-height: 100dvh;
    padding: 0;
    margin: 0;
    background: #fff;
  }
}
</style>
