<template>
  <div class="home-container" @wheel="handleWheel" ref="containerRef">
    <Swiper
      :modules="[Pagination, Mousewheel]"
      direction="vertical"
      :pagination="{ clickable: true }"
      :mousewheel="true"
      :speed="600"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="main-swiper"
      :style="{ transform: `translateY(-${footerOffset}px)` }"
    >
      <SwiperSlide>
        <Home1 :active="activeIndex === 0" />
        <Consultation />
      </SwiperSlide>
      <SwiperSlide><Home2 :active="activeIndex === 1" /></SwiperSlide>
      <SwiperSlide><Home3 :active="activeIndex === 2" /></SwiperSlide>
      <SwiperSlide><Home4 :active="activeIndex === 3" /></SwiperSlide>
      <SwiperSlide><Home5 :active="activeIndex === 4" /></SwiperSlide>
      <SwiperSlide><Home6 :active="activeIndex === 5" /></SwiperSlide>
      <SwiperSlide><Home7 :active="activeIndex === 6" /></SwiperSlide>
      <SwiperSlide><Home8 :active="activeIndex === 7" /></SwiperSlide>
      <SwiperSlide><Home9 :active="activeIndex === 8" /></SwiperSlide>
    </Swiper>

    <ToTop @go-first="goToFirstSlide" />
    <Footer
      ref="footerRef"
      :class="{ 'footer-visible': isFooterVisible }"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'


import Footer from '@/components/Footer.vue'
import ToTop from '@/components/ToTop.vue'
import Consultation from '@/components/Consultation.vue'
import Home1 from './components/Home1.vue'
import Home2 from './components/Home2.vue'
import Home3 from './components/Home3.vue'
import Home4 from './components/Home4.vue'
import Home5 from './components/Home5.vue'
import Home6 from './components/Home6.vue'
import Home7 from './components/Home7.vue'
import Home8 from './components/Home8.vue'
import Home9 from './components/Home9.vue'

const activeIndex = ref(0)
const swiperRef = ref(null)
const isFooterVisible = ref(false)
const isAnimating = ref(false)
const footerRef = ref(null)
const containerRef = ref(null)
const footerHeight = ref(0)
const footerOffset = ref(0)
const scrollState = ref('normal')

const isLastSlide = computed(() => activeIndex.value === 8)

onMounted(() => {
  if (footerRef.value?.$el) {
    footerHeight.value = footerRef.value.$el.offsetHeight
  }
})

const handleWheel = (e) => {
  if (isAnimating.value) return

  const isScrollingDown = e.deltaY > 0

  if (isLastSlide.value) {
    if (isScrollingDown) {

      if (scrollState.value === 'normal') {
        scrollState.value = 'can-show-footer'
      }
      else if (scrollState.value === 'can-show-footer' && !isFooterVisible.value) {
        showFooter()
      }
    } else {

      if (scrollState.value === 'footer-shown') {
        hideFooter()
      }
      else if (scrollState.value === 'can-show-footer') {
        scrollState.value = 'normal'
      }
    }
  }
}

const showFooter = () => {
  isAnimating.value = true
  isFooterVisible.value = true
  scrollState.value = 'footer-shown'


  footerOffset.value = footerHeight.value

  setTimeout(() => {
    isAnimating.value = false
  }, 600)
}

const hideFooter = () => {
  isAnimating.value = true


  isFooterVisible.value = false
  footerOffset.value = 0

  setTimeout(() => {
    isAnimating.value = false
    scrollState.value = 'normal'
  }, 600)
}

const onSwiper = (swiper) => {
  swiperRef.value = swiper
  activeIndex.value = swiper.activeIndex
}

const onSlideChange = (swiper) => {
  const newIndex = swiper.activeIndex
  const isLeavingLastSlide = activeIndex.value === 8 && newIndex !== 8

  activeIndex.value = newIndex

  if (isLeavingLastSlide) {

    if (isFooterVisible.value) {
      hideFooter()
    } else {
      scrollState.value = 'normal'
    }
  } else if (isLastSlide.value) {

    scrollState.value = 'normal'
  }
}

const goToFirstSlide = () => {
  if (swiperRef.value?.slideTo) {
    swiperRef.value.slideTo(0)
  }
  if (isFooterVisible.value) {
    hideFooter()
  }
}
</script>

<style scoped>
:deep(.swiper-pagination-bullet-active) {
  background-color: #ef203a !important;
}
.home-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.main-swiper {
  width: 100vw;
  height: 100vh;
  transition: transform 0.6s ease;
}

.swiper-slide {
  width: 100vw;
  height: 100vh;
  background: #fff;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
  transition: transform 0.6s ease;
  z-index: 100;
}

.footer-visible {
  transform: translateY(0);
}

@media (max-width: 900px) {
  .main-swiper,
  .swiper-slide {
    height: 100dvh;
  }
}
</style>
