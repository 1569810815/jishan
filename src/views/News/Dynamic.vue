<template>
  <Common :bg="dynamic">
    <template #title>公司动态</template>
    <template #subtitle>INDUSTRY NEWS</template>
  </Common>

  <div class="news-page">
    <div class="news-categories">
      <router-link to="/Information">新闻资讯</router-link>
      <router-link to="/Dynamic">公司动态</router-link>
    </div>

    <div class="news-list-container">
      <div v-for="(item, index) in paginatedData" :key="index" class="news-item" @click="goToDetail(item)" >
        <div class="news-content">
          <h3 class="news-title">{{ item.title }}</h3>
          <div class="news-meta">
            <span class="news-date">{{ item.date }}</span>
          </div>
          <p class="news-desc">{{ item.content }}</p>
        </div>

        <div class="news-image">
          <img :src="item.image" :alt="item.title" class="news-img">
        </div>
      </div>
    </div>

    <div class="pagination-container">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="newsItems.length"
        :page-size="pageSize"
        v-model:current-page="currentPage"
        @current-change="handlePageChange"
      />
    </div>
  </div>

  <Footer></Footer>
  <ToTop @go-first="scrollToTop" />
</template>

<script setup>
import Common from '@/components/Common.vue'
import { useNewsStore } from '@/stores/newsStore'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Footer from '@/components/Footer.vue';
import ToTop from '@/components/ToTop.vue';
import dynamic from '@/assets/Images/dynamic.png'
import anlibg from '@/assets/Images/anlibg.png'
import { ElPagination } from 'element-plus'
const router = useRouter()
const newsStore = useNewsStore()
const scrollToTop = () => {
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  }
}

const currentPage = ref(1)
const pageSize = ref(5)

const newsItems = ref([
  {
    id: 1,
    title: '领导们与积善之家的点滴',
    content: '在2018年国际老博会上，吴玉韶教授鼓励积善之家在为老服务行业快速发展，十分支持公益与养老相结合的模式。后又多次到访积善之家北京总部，共同探讨养老事业发展。吴玉韶教授不辞辛苦多次到访积善之家各地连锁项目，关心运营情况，对积善之家在全国开展社区嵌入式养老的运营模式给予高度评价和充分肯定，并为积善之家未来发展提出宝贵意见与建议。江西省委、省政府、省民政厅，南昌市、赣州市、抚州市、景德镇市市委、市政府、市人大、市政协等领导班子多次到北京积善总部、江西积善交流考察，鼓励积善做大做强，为地方养老发挥带头作用。',
    date: '2023-08-15',
    image: anlibg
  },
  {
    id: 2,
    title: '智慧养老市场规模预计2025年达5万亿元',
    content: '根据最新研究报告，中国智慧养老市场将保持20%以上的年复合增长率。',
    date: '2024-03-10',
    image: anlibg
  },
  {
    id: 3,
    title: '十五分钟养老服务圈 托起幸福“夕阳红”',
    content: '新增集团化养老服务平台、智慧养老监测中心等模块，功能更全面。',
    date: '2024-02-28',
    image: anlibg
  },
  {
    id: 4,
    title: '十五分钟养老服务圈 托起幸福“夕阳红”',
    content: '人民网郑州9月19日电（霍亚平）探索智慧养老、医养结合、加快养老产业人才培养……近年来，通过部门联动、社会参与、市场运作，形成以居家为基础、社区为依托、机构为补充的养老服务模式，构建居家社区机构相协调、医养康养相结合的养老服务体系，满足老年群体的多样化需求人民网郑州9月19日电（霍亚平）探索智慧养老、医养结合、加快养老产业人才培养……近年来，通过部门联动、社会参与、市场运作，形成以居家为基础、社区为依托、机构为补充的养老服务模式，构建居家社区机构相协调、医养康养相结合的养老服务体系，满足老年群体的多样化需求人民网郑州9月19日电（霍亚平）探索智慧养老、医养结合、加快养老产业人才培养……近年来，通过部门联动、社会参与、市场运作，形成以居家为基础、社区为依托、机构为补充的养老服务模式，构建居家社区机构相协调、医养康养相结合的养老服务体系，满足老年群体的多样化需求人民网郑州9月19日电（霍亚平）探索智慧养老、医养结合、加快养老产业人才培养……近年来，通过部门联动、社会参与、市场运作，形成以居家为基础、社区为依托、机构为补充的养老服务模式，构建居家社区机构相协调、医养康养相结合的养老服务体系，满足老年群体的多样化需求人民网郑州9月19日电（霍亚平）探索智慧养老、医养结合、加快养老产业人才培养……近年来，通过部门联动、社会参与、市场运作，形成以居家为基础、社区为依托、机构为补充的养老服务模式，构建居家社区机构相协调、医养康养相结合的养老服务体系，满足老年群体的多样化需求人民网郑州9月19日电（霍亚平）探索智慧养老、医养结合、加快养老产业人才培养……近年来，通过部门联动、社会参与、市场运作，形成以居家为基础、社区为依托、机构为补充的养老服务模式，构建居家社区机构相协调、医养康养相结合的养老服务体系，满足老年群体的多样化需求人民网郑州9月19日电（霍亚平）探索智慧养老、医养结合、加快养老产业人才培养……近年来，通过部门联动、社会参与、市场运作，形成以居家为基础、社区为依托、机构为补充的养老服务模式，构建居家社区机构相协调、医养康养相结合的养老服务体系，满足老年群体的多样化需求人民网郑州9月19日电（霍亚平）探索智慧养老、医养结合、加快养老产业人才培养……近年来，通过部门联动、社会参与、市场运作，形成以居家为基础、社区为依托、机构为补充的养老服务模式，构建居家社区机构相协调、医养康养相结合的养老服务体系，满足老年群体的多样化需求',
    date: '2024-02-28',
    image: anlibg
  },
  {
    id: 5,
    title: '京雅科技发布智慧养老服务平台2.1版本',
    content: '新增集团化养老服务平台、智慧养老监测中心等模块，功能更全面。',
    date: '2024-02-28',
    image: anlibg
  },
  {
    id: 6,
    title: '京雅科技发布智慧养老服务平台2.1版本',
    content: '新增集团化养老服务平台、智慧养老监测中心等模块，功能更全面。',
    date: '2024-02-28',
    image: anlibg
  },
])

// 计算当前页显示的数据
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return newsItems.value.slice(start, end)
})

const handlePageChange = (val) => {
  currentPage.value = val
  scrollToTop()
}

const goToDetail = (item) => {
  newsStore.setCurrentNews(item);
  sessionStorage.setItem('currentNews', JSON.stringify(item));
  router.push({
    name: 'NewsDetail',
    params: { id: item.id }
  });
};
</script>

<style scoped>

.news-categories {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 40px;
  gap: 15px;
  padding: 0 20px;
}

.news-categories a {
  display: inline-block;
  padding: 10px 25px;
  border-bottom: 3px solid rgba(239, 32, 58, 0.1);
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* 鼠标悬停效果 */
.news-categories a:hover {
  background-color: rgba(239, 32, 58, 0.1);;
  color: #444;
  border-color: #d0d0d0;
}

/* 活动状态/当前路由样式 */
.news-categories a.router-link-active,
.news-categories a.router-link-exact-active {
  /* background-color: #2a8b8b; */
  color: #ef203a;
  border-color: #ef203a;
}


/* 页面容器 */
.news-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}




/* 新闻列表容器 */
.news-list-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-height: 800px;
}

/* 单条新闻项 */
.news-item {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);
}
.news-item:hover .news-title {
  color: #ef203a;
}
/* 左侧内容区 */
.news-content {
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.news-title {
  font-size: 20px;
  color: #333;
  margin: 0 0 15px;
  line-height: 1.4;
  font-weight: 600;
}

.news-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 14px;
}

.news-date {
  color: #999;
}

.news-desc {
  flex: 1;
  color: #666;
  line-height: 1.8;
  margin: 0 0 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 右侧图片区 */
.news-image {
  flex: 0 0 40%;
  max-width: 40%;
  overflow: hidden;
}

.news-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.news-item:hover .news-img {
  transform: scale(1.05);
}

/* 分页器样式 */
.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 20px 0;
}
:deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: #ef203a;
}

:deep(.el-pagination.is-background .el-pager li:not(.is-disabled):hover) {
  color: #ef203a;
}

:deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active:hover) {
  background-color: #ef203a;
  color: white;
}
/* 响应式设计 */
@media (max-width: 992px) {
  .news-content {
    padding: 25px;
  }
}
@media (max-width: 768px) {
  .news-categories {
    flex-wrap: wrap;
    gap: 10px;
  }

  .news-categories a {
    padding: 8px 15px;
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .news-item {
    flex-direction: column;
  }

  .news-image {
    flex: 0 0 100%;
    max-width: 100%;
    height: 200px;
    order: -1;
  }

  .news-content {
    padding: 20px;
  }

  .news-title {
    font-size: 18px;
  }

  .news-categories {
    gap: 10px;
  }

  .category-btn {
    padding: 8px 15px;
    font-size: 14px;
  }
}
</style>
