<template>
  <div class="system">
    <Common
      :bg=shitixiangmu
    >
      <template #title>政企协同</template>
      <template #subtitle>针对养老公寓场景定制化打造，涵盖养老公寓房源配置、现有房源情况查看、公寓住户档案、客户跟进管理、长短租合同管理、入住流程管理、服务过程管理、物业管理、费用管理等功能。</template>
    </Common>
  </div>
  <div class="Entity-items">
    <div v-for="(item, index) in EntityItemsList" :key="index" class="entity-item" :class="{'reverse': index % 2 !== 0}">
      <div class="text-content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
      <div class="image-content">
        <img :src="item.image" :alt="item.title">
      </div>
    </div>
  </div>
  <ToTop @go-first="scrollToTop" />
  <Consultation></Consultation>
  <Footer></Footer>
</template>

<script setup>
import { ref } from 'vue'
import Common from '@/components/Common.vue'
import ToTop from '@/components/ToTop.vue';
import Footer from '@/components/Footer.vue';
import Consultation from '@/components/Consultation.vue';
import shitixiangmu from '@/assets/Images/shitixiangmu.png'
import anli from '@/assets/Images/anliImg.png'

const scrollToTop = () => {
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
const EntityItemsList = ref([
  {
    title:'社区嵌入式养老',
    description:'从“喘息服务”到“家庭养老照护床位”，积善之家以专业的养老服务企业为支点，把高品质机构服务送上门，业务拓展至居家项目以来，中标项目50余个，公司以“专业养老家庭化、居家养老标准化”为目标，建立统一的服务运行监管体系，积累了丰富的家庭养老照护床位运营管理经验，在二十余座城市累计建设及服务家庭养老床位总数三万余张，服务时长逾百万小时。',
    image:anli,
  },
  {
    title:'机构养老',
    description:'积善之家在全国范围内布局连锁养老机构，提供专业化、个性化的养老服务。每个机构都配备专业护理团队，提供医疗、康复、生活照料等全方位服务，满足老年人多样化需求。',
    image:anli
  }
])
</script>

<style scoped>
.Entity-items {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
}

.entity-item {
  display: flex;
  align-items:flex-start;
  margin-bottom: 6.25rem;
  gap: 100px;
}

.entity-item.reverse {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
}

.text-content h3 {
    font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  font-size: 1.6vw;
  color: #ef203a;
  margin: 3rem 0;
}

.text-content p {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
}

.image-content {
  flex: 1;
}

.image-content img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .entity-item {
    flex-direction: column;
    gap: 20px;
  }

  .entity-item.reverse {
    flex-direction: column;
  }

  .text-content, .image-content {
    width: 100%;
  }
}
</style>
