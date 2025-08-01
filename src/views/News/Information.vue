<template>
  <Common :bg="informationImg">
    <template #title>积善之家资讯</template>
    <template #subtitle>NEWS</template>
  </Common>

  <div class="news-page">
    <div class="news-categories">
      <router-link to="/Information">新闻资讯</router-link>
      <router-link to="/Dynamic">公司动态</router-link>
    </div>

    <div class="news-list-container">
      <div
        v-for="(item, index) in paginatedData"
        :key="index"
        class="news-item"
        @click="goToDetail(item)"
      >
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
        background="true"
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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useNewsStore } from '@/stores/newsStore'
import Footer from '@/components/Footer.vue';
import ToTop from '@/components/ToTop.vue';
import informationImg from '@/assets/Images/information.png'
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
    title: '《居家养老上门服务基本规范》国家标准正式发布',
    content: '近日，《居家养老上门服务基本规范》国家标准（GB/T 43153-2023）正式发布，这是我国针对居家养老上门服务发布的首个国家标准，将为合理界定居家养老上门服务范围、规范供给主体资质条件及供给流程内容要求等提供基本依据，对于推动居家养老服务标准化、规范化、专业化发展具有现实意义。该标准是在全面总结各地实践做法基础上，适应居家养老服务发展需要编制而成的。标准主要内容分为5个部分，包括“术语和定义”、“总体要求”、“服务内容”、“服务流程及要求”、“服务评价与改进”。其中，“总体要求”明确了服务组织、服务人员所应具备的基本条件和服务应达到的基本要求；“服务内容”包括生活照料、基础照护、健康管理、探访关爱、精神慰藉、委托代办、家庭生活环境适老化改造等7项服务，涵盖了居家养老所需的主要专业化服务内容；“服务流程”明确了从咨询接待、老年人能力评估、签订服务协议、服务准备到服务实施等一系列程序性要求；“服务评价与改进”明确了服务评价形式及对评价发现问题改进反馈的要求。下一步，民政部将指导各地认真做好《居家养老上门服务基本规范》国家标准的宣贯实施，适时针对具体服务内容制定相对细化的配套标准，进一步增强标准的指引性和可操作性，推动有效提高居家养老上门服务的精准度和精细化水平，不断增强广大老年人居家养老的获得感、幸福感、安全感。',
    date: '2023-08-15',
    image: anlibg
  },
  {
    id: 2,
    title: '智慧养老市场规模预计2025年达5万亿元',
    content: '中国智慧养老行业正以年均20%以上的增速重塑银发经济格局。根据中研普华产业研究院《2025-2030年中国智慧养老行业市场深度调研及投资战略预测报告》，2025年中国智慧养老市场规模预计突破7.21万亿元，较2023年增长20.2%，其中智能穿戴设备、家庭服务机器人、智能家居等细分领域占比从2020年的35%跃升至2025年的55%，成为驱动行业增长的核心引擎。2024年，中国智慧养老行业迎来标志性突破：上海“9073”模式(90%居家、7%社区、3%机构)实现智慧化适配改造，覆盖超200万老年人;江苏无锡藕塘护理院引入康养机器人“藕爷”，护理效率提升40%，人力成本降低25%;安徽安庆市构建“1+1+10”市级养老服务信息平台，整合全市227家养老机构数据，累计提供服务超72万人次。这些案例标志着中国智慧养老行业正从“技术验证”向“规模落地”转型。',
    date: '2024-03-10',
    image: anlibg
  },
  {
    id: 3,
    title: '我国有9000万"低龄老年人"，银发经济发展潜力巨大',
    content: '3月23日，民政部副部长唐承沛在中国发展高层论坛2025年年会的专题研讨会上表示，预计2035年之前的10年左右时间，是本世纪剩余时间内我国人口老龄化程度较低的时期，也是积极应对人口老龄化的重要"窗口期"。他指出，要看到我国人口老龄化蕴藏着的独特发展机遇，未来银发经济发展潜力巨大，预计到2035年，银发经济占GDP比重将从6%上升到9%。',
    date: '2024-02-28',
    image: anlibg
  },
  {
    id: 4,
    title: '京雅科技发布智慧养老服务平台2.1版本',
    content: '新增集团化养老服务平台、智慧养老监测中心等模块，功能更全面。',
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

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return newsItems.value.slice(start, end)
})

const handlePageChange = (val) => {
  currentPage.value = val
  scrollToTop()
}

// 新增点击跳转详情页方法
const goToDetail = (item) => {
  // 保存到store
  newsStore.setCurrentNews(item)
  // 同时保存到sessionStorage防止刷新丢失
  sessionStorage.setItem('currentNews', JSON.stringify(item))
  router.push({
    name: 'NewsDetail',
    params: { id: item.id }
  })
}
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
  border-bottom: 3px solid #e0e0e0;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}


.news-categories a:hover {
  background-color: #f0f0f0;
  color: #444;
  border-color: #d0d0d0;
}


.news-categories a.router-link-active,
.news-categories a.router-link-exact-active {
  color: #ef203a;
  border-color: #ef203a;
}



.news-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}



.news-list-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-height: 800px;
}

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
