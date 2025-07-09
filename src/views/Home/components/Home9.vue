<template>
  <div class="home9">
    <div class="home9-header">
      <h3>新闻资讯</h3>
      <div class="tab-btns">
        <button
          :class="{active: activeTab === 'policy'}"
          @click="activeTab = 'policy'"
        >行业政策</button>
        <button
          :class="{active: activeTab === 'news'}"
          @click="activeTab = 'news'"
        >新闻动态</button>
      </div>
    </div>
    <div class="swiper-wrap">
      <Swiper
        :slides-per-view="3"
        :space-between="30"
        :slides-per-group="3"
        :loop="true"
        :loop-fill-group-with-blank="true"
        :pagination="{
          clickable: true,
          el: '.custom-pagination'
        }"
        :navigation="true"
        class="my-swiper"
      >
        <SwiperSlide
          v-for="item in (activeTab === 'policy' ? policyList : newsList)"
          :key="item.id"
        >
          <div class="slide-card">
            <img :src="item.img" alt="" />
            <div class="slide-title">{{ item.title }}</div>
            <div class="slide-desc">{{ item.desc }}</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="custom-pagination"></div>
    </div>
    <button class="more-btn" @click="goTo">更多{{ activeTab === 'policy' ? '行业政策' : '新闻动态' }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
const router = useRouter()
const activeTab = ref('policy')
const goTo = ()=>{
  if(activeTab.value === 'policy'){
    router.push('dynamic')
  }else{router.push('Information')}
}
const policyList = [
  { id: 1, img: 'https://placehold.co/320x180/2C5AFF/fff?text=政策1', title: '政策标题1', desc: '政策内容摘要1' },
  { id: 2, img: 'https://placehold.co/320x180/2C5AFF/fff?text=政策2', title: '政策标题2', desc: '政策内容摘要2' },
  { id: 3, img: 'https://placehold.co/320x180/2C5AFF/fff?text=政策3', title: '政策标题3', desc: '政策内容摘要3' },
  { id: 4, img: 'https://placehold.co/320x180/2C5AFF/fff?text=政策4', title: '政策标题4', desc: '政策内容摘要4' },
  { id: 5, img: 'https://placehold.co/320x180/2C5AFF/fff?text=政策5', title: '政策标题5', desc: '政策内容摘要5' },
  { id: 6, img: 'https://placehold.co/320x180/2C5AFF/fff?text=政策6', title: '政策标题6', desc: '政策内容摘要6' },
]
const newsList = [
  { id: 11, img: 'https://placehold.co/320x180/ff7a00/fff?text=新闻1', title: '新闻标题1', desc: '新闻内容摘要1' },
  { id: 12, img: 'https://placehold.co/320x180/ff7a00/fff?text=新闻2', title: '新闻标题2', desc: '新闻内容摘要2' },
  { id: 13, img: 'https://placehold.co/320x180/ff7a00/fff?text=新闻3', title: '新闻标题3', desc: '新闻内容摘要3' },
  { id: 14, img: 'https://placehold.co/320x180/ff7a00/fff?text=新闻4', title: '新闻标题4', desc: '新闻内容摘要4' },
  { id: 15, img: 'https://placehold.co/320x180/ff7a00/fff?text=新闻5', title: '新闻标题5', desc: '新闻内容摘要5' },
  { id: 16, img: 'https://placehold.co/320x180/ff7a00/fff?text=新闻6', title: '新闻标题6', desc: '新闻内容摘要6' },
]
</script>

<style scoped>
.home9 {
  width: 100vw;
  min-height: 100vh;
  background: #f8faff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 8rem 0 4vw 0;
  box-sizing: border-box;
}
.home9-header {
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
}
.home9-header h3 {
  font-size: 2.2vw;
  color: black;
  font-weight: bold;
  margin-bottom: 2rem;
  letter-spacing: 2px;
}
.tab-btns {
  display: flex;
  justify-content: center;
  gap: 2vw;
  margin-bottom: 2vw;
}
.tab-btns button {
  font-size: 1.1vw;
  padding: 0.7em 2.2em;
  border: none;
  border-radius: 8px;
  background: #e8f0ff;
  color: #2C5AFF;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.tab-btns button.active,
.tab-btns button:hover {
  background: #2C5AFF;
  color: #fff;
}
.swiper-wrap {
  width: 90vw;
  max-width: 1800px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.my-swiper {
  width: 100%;
  height: 32vw;
  min-height: 320px;
  max-height: 600px;
  margin-bottom: 1.5rem;
}
.slide-card {
  background: #fff;
  border-radius: 1.2vw;
  box-shadow: 0 2px 16px rgba(44,90,255,0.08);
  padding: 1.2vw 1vw 1.2vw 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 28vw;
  max-height: 600px;
  transition: box-shadow 0.2s, transform 0.3s;
}
.slide-card:hover {
  box-shadow: 0 8px 32px rgba(44,90,255,0.13);
  transform: translateY(-8px) scale(1.04);
}
.slide-card img {
  width: 100%;
  height: 12vw;
  min-height: 100px;
  max-height: 220px;
  object-fit: cover;
  border-radius: 0.8vw;
  margin-bottom: 1vw;
}
.slide-title {
  font-size: 1.3vw;
  color: #2C5AFF;
  font-weight: 600;
  margin-bottom: 1vw;
  text-align: center;
}
.slide-desc {
  font-size: 1vw;
  color: #666;
  text-align: center;
}
.custom-pagination {
  margin-top: 0.5rem;
  text-align: center;
}
.more-btn {
  margin-top: 2.2rem;
  font-size: 1.1vw;
  padding: 0.8em 2.5em;
  background: #2C5AFF;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 12px rgba(44,90,255,0.08);
}
.more-btn:hover {
  background: #1747b0;
}
@media (max-width: 1200px) {
  .home9-header h3 { font-size: 2.5rem; }
  .tab-btns button { font-size: 1.2rem; }
  .my-swiper { height: 380px; }
  .slide-card { min-height: 260px; }
  .slide-card img { height: 120px; }
  .slide-title { font-size: 1.3rem; }
  .slide-desc { font-size: 1rem; }
  .more-btn { font-size: 1rem; }
}
@media (max-width: 900px) {
  .swiper-wrap { width: 98vw; }
  .my-swiper { height: 260px; }
  .slide-card { min-height: 160px; padding: 0.7rem 0.3rem; }
  .slide-card img { height: 70px; }
  .slide-title { font-size: 1rem; }
  .slide-desc { font-size: 0.9rem; }
}
</style>
