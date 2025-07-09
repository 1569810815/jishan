<template>
  <Common
    bg="https://www.huiyangtong.com/images/news-banner.webp"
  >
    <template #title>新闻资讯</template>
    <template #subtitle>汇养通 —— 汇养老，更轻松</template>
  </Common>

  <div class="common-layout">
    <el-container>
      <el-aside width="180px" class="aside">
        <el-button
          :class="['aside-btn', activeTab === 'news' ? 'active' : '']"
          type="primary"
          plain
          @click="switchTab('news')"
        >新闻动态</el-button>
        <el-button
          :class="['aside-btn', activeTab === 'trend' ? 'active' : '']"
          type="primary"
          plain
          @click="switchTab('trend')"
        >行业政策</el-button>
      </el-aside>
      <el-container>
        <el-main>
          <div class="news-list">
            <ul>
              <li
                v-for="item in pagedList"
                :key="item.tatle + item.time"
                class="news-card"
              >
                <img :src="item.img" alt="" class="news-img" />
                <div class="news-info">
                  <h3 class="news-title">{{ item.tatle }}</h3>
                  <p class="news-desc">{{ item.text }}</p>
                  <div class="news-footer">
                    <span class="news-time">{{ item.time }}</span>
                    <el-button type="primary" size="small" class="detail-btn">查看详情</el-button>
                  </div>
                </div>
              </li>
            </ul>
            <el-pagination
              class="news-pagination"
              background
              layout="prev, pager, next"
              :total="currentList.length"
              :page-size="pageSize"
              :current-page="currentPage"
              @current-change="handlePageChange"
            />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
  <Footer></Footer>
  <ToTop @go-first="scrollToTop" />
</template>

<script setup>
import Common from '@/components/Common.vue'
import { ref, computed } from 'vue'
import Footer from '@/components/Footer.vue';
import ToTop from '@/components/ToTop.vue';
const scrollToTop = () => {
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
const newsList = ref([
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'2026年底，养老机构医养结合服务覆盖率保持在100%', text:'为深入实施积极应对人口老龄化国家战略，加快推动全市养老服务高质量发展，近日，我市出台《东营市养老服务高质量发展三年行动计划（2024—2026年）》。', time:'2024-07-04'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'智慧养老平台助力机构数字化升级', text:'智慧养老平台通过信息化手段提升养老机构管理效率，实现服务智能化。', time:'2024-06-28'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'养老服务新政解读', text:'最新养老服务政策出台，推动行业健康发展。', time:'2024-06-20'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'智能硬件赋能养老', text:'多种智能硬件设备接入，提升老人安全保障。', time:'2024-06-15'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'社区养老服务创新模式', text:'社区养老服务不断创新，满足多样化养老需求。', time:'2024-06-10'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'医养结合发展趋势', text:'医养结合成为养老行业发展新趋势。', time:'2024-06-05'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'养老机构服务质量提升', text:'多举措提升养老机构服务质量，保障老人权益。', time:'2024-05-30'},
])

const trendList = ref([
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'行业动态一', text:'行业动态内容摘要一。', time:'2024-07-03'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'行业动态二', text:'行业动态内容摘要二。', time:'2024-06-29'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'行业动态三', text:'行业动态内容摘要三。', time:'2024-06-25'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'行业动态四', text:'行业动态内容摘要四。', time:'2024-06-18'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'行业动态五', text:'行业动态内容摘要五。', time:'2024-06-12'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'行业动态六', text:'行业动态内容摘要六。', time:'2024-06-06'},
  {img:'https://www.huiyangtong.com/uploads/image/20240704/1720086160.png', tatle:'行业动态七', text:'行业动态内容摘要七。', time:'2024-05-31'},
])

const activeTab = ref('news')
const pageSize = 5
const currentPage = ref(1)

const currentList = computed(() => activeTab.value === 'news' ? newsList.value : trendList.value)
const pagedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return currentList.value.slice(start, start + pageSize)
})

function switchTab(tab) {
  activeTab.value = tab
  currentPage.value = 1
}
function handlePageChange(page) {
  currentPage.value = page
}
</script>

<style scoped>
.common-layout {
  background: #f8faff;
  min-height: 100vh;
  padding: 0;
}
.aside {
  width: 30%;
  background: #f4f8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;
  border-radius: 0 18px 18px 0;
  min-height: 100vh;
}
.aside-btn {
  width: 15.625rem;
  height: 6rem;
  margin-bottom: 3rem;
  font-size: 2rem;
  letter-spacing: 1px;
  border-radius: 8px;
  border: none;
  background: #e8f0ff;
  color: #2C5AFF;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
}
.aside-btn.active,
.aside-btn:hover {
  background: skyblue !important;
  color: #fff !important;
}
.news-list {
  padding: 2.5rem 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.news-list ul {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.news-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(44,90,255,0.08);
  display: flex;
  flex-direction: row;
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.3s;
  min-height: 160px;
}
.news-card:hover {
  box-shadow: 0 8px 32px rgba(44,90,255,0.13);
  transform: translateY(-6px) scale(1.03);
}
.news-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  background: #f8faff;
  flex-shrink: 0;
}
.news-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1.2rem 1rem 1.2rem;
}
.news-title {
  font-size: 1.8rem;
  color: black;
  font-weight: 400;
  margin-bottom: 0.7rem;
  line-height: 1.4;
}
.news-desc {
  font-size: 1.2rem;
  color: #333;
  flex: 1;
  margin-bottom: 1.2rem;
  line-height: 1.7;
}
.news-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.news-time {
  color: #999;
  font-size: 1.2rem;
}
.detail-btn {
  font-size: 1.2rem;
  padding: 0.8sssssssem 1.2em;
}
.news-pagination {
  margin: 2.5rem auto 0 auto;
  text-align: center;
}
@media (max-width: 900px) {
  .aside { display: none; }
  .news-list { padding: 1rem 0.5vw; }
  .news-list ul { max-width: 98vw; }
  .news-card { flex-direction: column; min-height: 220px; }
  .news-img { width: 100%; height: 120px; }
}
</style>
