<template>
  <Common
    bg="https://www.huiyangtong.com/images/news-banner.webp"
  >
    <template #title>新闻中心</template>
    <template #subtitle>NEWS</template>
  </Common>
  <div class="news-section">
    <div class="danamic">
      <h3>新闻资讯</h3>
      <a class="more-link" @click="goTo('information')">查看更多新闻资讯 &gt;</a>
      <ul>
        <li v-for="item in policyPreview" :key="item.tatle + item.time">
          <img :src="item.img" :alt="item.tatle" />
          <div class="info">
            <h3>{{ item.tatle }}</h3>
            <p class="ellipsis">{{ item.text }}</p>
            <span class="news-time">{{ item.time }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="information">
      <h3>行业动态</h3>
      <a class="more-link" @click="goTo('dynamic')">查看更多行业动态 &gt;</a>
      <ul>
        <li v-for="item in newsPreview" :key="item.tatle + item.time">
          <img :src="item.img" :alt="item.tatle" />
          <div class="info">
            <h3>{{ item.tatle }}</h3>
            <p class="ellipsis">{{ item.text }}</p>
            <span class="news-time">{{ item.time }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <Footer></Footer>
  <ToTop @go-first="scrollToTop" />
</template>

<script setup>
import Common from '@/components/Common.vue'
import { useRouter } from 'vue-router'
import Footer from '@/components/Footer.vue';
import ToTop from '@/components/ToTop.vue';
const scrollToTop = () => {
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
const router = useRouter()

// 以下数据与 Information.vue 和 Dynamic.vue 保持一致
const policyPreview = [
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'2026年底，养老机构医养结合服务覆盖率保持在100%', text:'为深入实施积极应对人口老龄化国家战略，加快推动', time:'2024-07-04'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'智慧养老平台助力机构数字化升级', text:'智慧养老平台通过信息化手段提升养老机构管理效率，实现服务智能化。', time:'2024-06-28'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'养老服务新政解读', text:'最新养老服务政策出台，推动行业健康发展。', time:'2024-06-20'},
]
const newsPreview = [
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'行业动态一', text:'行业动态内容摘要一。', time:'2024-07-03'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'行业动态二', text:'行业动态内容摘要二。', time:'2024-06-29'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'行业动态三', text:'行业动态内容摘要三。', time:'2024-06-25'},
]

function goTo(type) {
  if (type === 'information') {
    router.push('/information')
  } else if (type === 'dynamic') {
    router.push('/dynamic')
  }
}
</script>

<style scoped>
.news-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vw;
  padding: 3rem 0 4rem 0;
}
.danamic, .information {
  padding: 2.8rem 2.5rem 2.5rem 2.5rem;
  width: 96vw;
  max-width: 1600px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.danamic h3, .information h3 {
  font-size: 2.3rem;
  color: black;
  font-weight: 400;
  margin-bottom: 1.5rem;
}
.more-link {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  cursor: pointer;
  align-self: flex-end;
  transition: color 0.2s;
}
.more-link:hover {
  color: #1747b0;
  text-decoration: underline;
}
.danamic ul, .information ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.danamic li, .information li {
  display: flex;
  align-items: flex-start;
  gap: 2.2rem;
  margin-bottom: 2.2rem;
  padding: 2rem 2rem;
  border-bottom: 1px solid #ccc;
  transition: box-shadow 0.2s, transform 0.2s;
  width: 100%;
}
.danamic li:last-child, .information li:last-child {
  margin-bottom: 0;
}
.danamic li:hover, .information li:hover {
  box-shadow: 0 12px 36px rgba(44,90,255,0.13);
  transform: translateY(-6px) scale(1.02);
}
.danamic img, .information img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 14px;
  background: #fff;
  flex-shrink: 0;
}
.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  justify-content: center;
}
.info h3 {
  font-size: 2rem;
  color: black;
  font-weight: 400;
  margin: 0;
}
.info p.ellipsis {
  font-size: 1.25rem;
  color: #333;
  margin: 0;
  line-height: 1.7;
  display: -webkit-box;
  /* -webkit-line-clamp: 2; */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  word-break: break-all;
}
.news-time {
  color: #999;
  font-size: 1.1rem;
  margin-top: 0.2rem;
}
@media (max-width: 1100px) {
  .danamic, .information { padding: 1.2rem 0.5rem; width: 99vw; }
  .danamic img, .information img { width: 100px; height: 100px; }
  .danamic li, .information li { padding: 1rem 0.5rem; gap: 1rem; }
  .danamic h3, .information h3 { font-size: 1.3rem; }
  .info h3 { font-size: 1.1rem; }
  .info p.ellipsis { font-size: 1rem; }
}
</style>
