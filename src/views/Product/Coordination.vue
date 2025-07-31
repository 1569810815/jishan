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
  <div class="processbg">
    <h2>依据养老机构角色"核心痛点"针对性研发</h2>
    <ul>
      <li v-for="(item, index) in processList" :key="index">
        <span>{{ item.title }}</span>
      </li>
    </ul>
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

const processList = ref([
  {title:'缺乏获客入口开放能力'},
  {title:'各部门协作效率低'},
  {title:'预警不及时运营风险高'},
  {title:'年检资料准备耗时费力'},
  {title:'排版混乱/运力不畅'},
  {title:'年纪较长/学习难度高'},
  {title:'粗放式管理/运营成本高'},
  {title:'信息碎片化/服务不透明'},
  {title:'运营汇报'},
  {title:'运营汇报'},
  {title:'家属口碑'},
  {title:'铸就品牌'},

])
</script>

<style scoped>
.Entity-items {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8vh 0;
}

.entity-item {
  display: flex;
  align-items:flex-start;
  margin-bottom: 5vh;
  gap: 6vh;
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
  margin: 3vh 0;
}

.text-content p {
  font-size: .8vw;
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
.processbg {
  width: 100%;
  margin: 0 auto;
  background-image: url('@/assets/Images/anlibg2.png');
  background-size: cover;
  background-position: center;
  padding: 8vh 0;
}
.processbg h2 {
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  font-size: 1.8vw;
  color: #000;
  text-align: center;
}
.processbg ul {
  position: relative;
  max-width: 1200px;
  background: url('@/assets/Images/processbg.png') no-repeat center center;
  background-size: 100% auto;
  min-height: 700px;
  margin: 0 auto;
  list-style: none;
  padding: 0;
}

.processbg ul li {
  position: absolute;
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
    color: #000;
  font-size: 0.6vw;
}
.processbg ul li:nth-child(1) {
  top: 10%;
  left: 40%;
}

.processbg ul li:nth-child(2) {
  top: 10%;
  left: 60%;
}
.processbg ul li:nth-child(3) {
  top: 43%;
  left: 60%;
}
.processbg ul li:nth-child(4) {
  top: 43%;
  left: 40%;
}
.processbg ul li:nth-child(5) {
  top: 67%;
  left: 40%;
}
.processbg ul li:nth-child(6) {
  top: 67%;
  left: 60%;
}
.processbg ul li:nth-child(7) {
  top: 34.5%;
  left: 11.5%;
}
.processbg ul li:nth-child(8) {
  top: 34.5%;
  left: 88.5%;
}
.processbg ul li:nth-child(9) {
  transform: rotate(-32deg);
  font-size: 1.4vw;
  color: #ef203a;
  top: 30%;
  left: 25%;
}
.processbg ul li:nth-child(10) {
  transform: rotate(32deg);
  font-size: 1.4vw;
  color: #ef203a;
  top: 30%;
  left: 63%;
}
.processbg ul li:nth-child(11) {
  transform: rotate(32deg);
  font-size: 1.4vw;
  color: #ef203a;
  top: 72%;
  left: 24%;
}
.processbg ul li:nth-child(12) {
  transform: rotate(-32deg);
  font-size: 1.4vw;
  color: #ef203a;
  top: 72%;
  left: 64%;
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
