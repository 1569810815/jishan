<template>
  <Common :bg="informationImg">
    <template #title>新闻详情</template>
    <template #subtitle>NEWS DETAIL</template>
  </Common>

  <div class="news-detail-container">

    <div class="back-button" @click="goBack">
      <i class="el-icon-arrow-left"></i>
      返回列表
    </div>


    <h1 class="news-title">{{ newsDetail.title }}</h1>


    <div class="news-meta">
      <span class="news-date">{{ newsDetail.date }}</span>
    </div>


    <div class="news-image">
      <img :src="newsDetail.image" :alt="newsDetail.title" class="news-img">
    </div>


    <div class="news-content" v-html="newsDetail.content"></div>
  </div>

  <Footer></Footer>
  <ToTop @go-first="scrollToTop" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNewsStore } from '@/stores/newsStore'
import Common from '@/components/Common.vue'
import Footer from '@/components/Footer.vue'
import ToTop from '@/components/ToTop.vue'
import informationImg from '@/assets/Images/information.png'
// import dynamic from '@/assets/Images/dynamic.png'
const newsStore = useNewsStore()
const route = useRoute()
const router = useRouter()
onMounted(() => {
  const savedNews = sessionStorage.getItem('currentNews');
  if (savedNews) {
    newsDetail.value = JSON.parse(savedNews);
  } else if (newsStore.currentNews && newsStore.currentNews.id === parseInt(route.params.id)) {
    newsDetail.value = newsStore.currentNews;
  } else {
    fetchNewsDetail(route.params.id);
  }
});
const newsDetail = ref({
  title: '',
  date: '',
  image: '',
  content: ''
})

// 模拟根据ID获取详情数据
const fetchNewsDetail = (id) => {
  const allNews = []

  const found = allNews.find(item => item.id === parseInt(id)) || allNews[0]
  newsDetail.value = found
}

const goBack = () => {
  router.go(-1)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>

<style scoped>
.news-detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.back-button {
    background-image: url('@/assets/Images/fanhuiliebiao.png');
  background-size: cover;
  background-position: center;
  display: inline-flex;
  align-items: center;
  margin-bottom: 30px;
  padding: .625rem 2.5rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 4px;
}

.back-button:hover {
  background-color: #f5f5f5;
  /* color: #ef203a; */
  transform: translateY(-2px);
}

.back-button i {
  margin-right: 8px;
}

.news-title {
  font-size: 3rem;
  line-height: 1.4;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
}

.news-meta {
  margin-bottom: 30px;
  color: #999;
  font-size: 18px;
}

.news-image {
  margin-bottom: 3rem;
  overflow: hidden;
}

.news-img {
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: cover;
}

.news-content {
  line-height: 2.2;
  color: #777;
  font-size: 16px;
  margin-bottom: 5rem;
}

.news-content :deep(p) {
  margin-bottom: 1.5em;
}

.news-content :deep(ul) {
  padding-left: 20px;
  margin-bottom: 1.5em;
}

.news-content :deep(li) {
  margin-bottom: 0.5em;
}
.news-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.nav-button {
  flex: 1;
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  border-radius: 4px;
}

.nav-button:hover {
  background-color: #f5f5f5;
}

.nav-button.disabled {
  color: #999;
  cursor: not-allowed;
}

.nav-button.disabled:hover {
  background-color: transparent;
}

.prev-button {
  margin-right: 10px;
  justify-content: flex-start;
}

.next-button {
  margin-left: 10px;
  justify-content: flex-end;
}

.nav-button i {
  margin: 0 8px;
}
@media (max-width: 768px) {
  .news-title {
    font-size: 22px;
  }

  .news-content {
    font-size: 15px;
  }
}
</style>
