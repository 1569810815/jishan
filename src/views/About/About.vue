<template>
  <div class="about">
    <Common
    bg="https://www.huiyangtong.com/images/news-banner.webp"
  >
    <template #title>关于京雅</template>
    <template #subtitle>ABOUT JINGYA</template>
  </Common>

  <img class="img" src="../../assets//Images/image5.png" alt="">
  <div class="company-intro">
    <!-- 顶部标题 -->
    <div class="intro-header">
      <h1 class="title">京雅科技</h1>
      <div class="divider"></div>
    </div>

    <!-- 公司简介 -->
    <div class="intro-content">
      <div class="intro-text">
        <p class="highlight">
          积善之家养老集团2011年成立，以首都北京为总部，辐射全国的积善之家养老集团，
          是一家由慰老公益机构成功转型为全国连锁品牌养老服务的首都名企。
        </p>

        <div class="timeline">
          <div
            v-for="(item, index) in timelineData"
            :key="index"
            class="timeline-item"
          >
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-dot"></div>
            <div class="timeline-content">{{ item.content }}</div>
          </div>
        </div>
      </div>

      <div class="intro-image">
        <img src="https://www.huiyangtong.com/images/institutions-banner.webp" alt="智慧养老">
      </div>
    </div>

    <!-- 核心技术 -->
    <div class="tech-section">
      <h3 class="section-title">核心技术</h3>
      <div class="tech-grid">
        <div
          v-for="(tech) in technologies"
          :key="tech.name"
          class="tech-card"
        >
          <div class="tech-icon">
            <img src="../../assets/Images/icon1.png" alt="">
          </div>
          <h4>{{ tech.name }}</h4>
          <p>{{ tech.description }}</p>
        </div>
      </div>
    </div>

    <!-- 合作伙伴 -->
      <div class="partners-section">
        <h3 class="section-title">战略合作伙伴</h3>
        <div class="partners-slider">
          <div
            v-for="(partner) in partners"
            :key="partner"
            class="partner-logo"
          >
            <img src="" :alt="partner">
          </div>
        </div>
      </div>
    </div>
    <!-- 荣誉证书 -->
    <div class="honor">
      <h3 class="section-title">荣誉证书</h3>
      <el-carousel :interval="2000" type="card" height="800px">
      <el-carousel-item v-for="item in 6" :key="item">
        <img src="https://is.huiyangtong.com/uploads/image/20230508/1683515530.jpg" alt="">
        <span>软件产品证书</span>
      </el-carousel-item>
    </el-carousel>
    </div>
    <div class="contact-section">
      <div class="contact-container">
        <!-- 公司地址 -->
        <div class="address-card">
          <h3 class="contact-title">公司地址</h3>
          <div class="address-info">
            <div class="address-item">
              <h4>北京总部</h4>
              <p>北京市朝阳区安贞里二区11号楼1层11-1</p>
            </div>
            <div class="address-item">
              <h4>上海分公司</h4>
              <p>上海市青浦区徐民路308号6号楼</p>
            </div>
          </div>
        </div>

        <!-- 联系我们 -->
        <div class="contact-card">
          <h3 class="contact-title">联系我们</h3>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span>联系电话：400-123-4567</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <span>邮箱：contact@jingya.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">🕒</span>
              <span>工作时间：周一至周五 9:00-18:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Consultation></Consultation>
  <Footer></Footer>
<ToTop @go-first="scrollToTop" />
</template>

<script setup>
import {ref} from 'vue'
import Consultation from '@/components/Consultation.vue'
import Common from '@/components/Common.vue'
import ToTop from '@/components/ToTop.vue';
import Footer from '@/components/Footer.vue';
const scrollToTop = () => {
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

const timelineData = ref([
  {
    year: '2020年',
    content: '智慧养老服务平台1.0版本研发完成，包含安全保障、生活照料、健康服务和亲情互动4大类15个功能模块'
  },
  {
    year: '2021年',
    content: '智慧养老服务平台1.1版本研发完成，增加基于安卓平台的咨询预约、机能评估等模块'
  },
  {
    year: '2022年',
    content: '智慧养老服务平台1.2版本研发完成，增加门禁管理、衣物分拣、运维异常上报等功能'
  },
  {
    year: '2023年',
    content: '智慧养老服务平台2.0版本研发完成，增加智慧养老安全卫士、基于H5的跨平台微信端服务程序'
  },
  {
    year: '2024年',
    content: '智慧养老服务平台2.1版本研发完成，增加集团化养老服务平台、智慧养老监测中心等模块'
  }
])

const technologies = ref([
  {
    name: '物联网技术',
    description: '实现各种智能设备的互联互通，全面监测老年人健康和生活状况'
  },
  {
    name: '大数据技术',
    description: '处理大量健康数据、行为数据，提取有价值信息支持决策'
  },
  {
    name: '云计算技术',
    description: '实现资源共享和弹性扩展，提高平台性能和可靠性'
  },
  {
    name: '人工智能',
    description: '对健康状况、行为模式进行预测分析，提供个性化服务'
  }
])

const partners = ref([
  'LonBon来邦',
  '云芯科技',
  '百度健康',
  '上海恩谷',
  '湖南东晟',
  '软富云',
  '亿家宜护',
  '欧孚通信'
])
</script>



<style scoped>
.about{
  padding-bottom: 200px;
}

.img{
  width: 100%;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.honor{
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.honor h1{
  margin: 3.125rem 0;
  font-size: 3.125rem;
  font-weight: normal;
}
.honor span{
  display: inline-block;
  color: black;
  margin-top: 1.25rem;
  font-size: 2rem;
  font-weight: normal;
}






.company-intro {
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding: 4rem 2rem;
  /* background-color: #fff; */
  color: #333;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  overflow: hidden;
}

/* 标题区域 */
.intro-header {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-size: 3.125rem;
  font-weight: 600;
  color: black;
  font-weight: 400;
  margin-bottom: 1rem;
}

.divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #2C5AFF, #00C6FF);
  margin: 1.5rem auto;
  border-radius: 2px;
}

/* 内容区域 */
.intro-content {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 4rem;
}

.intro-text {
  flex: 1;
  min-width: 300px;
}

.highlight {
  font-size: 1.5rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f8faff;
  border-left: 4px solid #2C5AFF;
  border-radius: 0 8px 8px 0;
}

.intro-image {
  flex: 1;
  min-width: 300px;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(44, 90, 255, 0.1);
}

.intro-image img {
  width: 100%;
  height: 100%;
  display: block;
}

/* 时间线样式 */
.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #2C5AFF, #00C6FF);
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
}

.timeline-year {
  font-size: 1.4rem;
  font-weight: 400;
  color: #2C5AFF;
  margin-bottom: 0.5rem;
}

.timeline-dot {
  position: absolute;
  left: -30px;
  top: 5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #2C5AFF;
  border: 3px solid #f8faff;
}

.timeline-content {
  line-height: 1.6;
  font-size: 1.2rem;
  padding: 1rem;
  border-bottom: 2px solid #ccc;
}





/* 技术展示部分 */
.tech-section {
  margin: 4rem 0;
}

.section-title {
  text-align: center;
  font-weight: 400;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #333;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #2C5AFF, #00C6FF);
  margin: 1rem auto 0;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.tech-card {
  border-right: 1px solid #ccc;
  border-radius: 2px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.tech-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(44, 90, 255, 0.1);
}

.tech-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.tech-card p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* 合作伙伴部分 */
.partners-section {
  margin: 4rem 0;
}

.partners-slider {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.partner-logo {
  flex: 0 0 calc(25% - 2rem);
  min-width: 150px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  padding: 1rem;
  transition: transform 0.3s;
}

.partner-logo:hover {
  transform: scale(1.05);
}

.partner-logo img {
  max-width: 100%;
  max-height: 100%;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s;
}

.partner-logo:hover img {
  filter: grayscale(0);
  opacity: 1;
}





.contact-section {
  width: 100%;
  padding: 4rem 0;
  margin-top: 4rem;
}

.contact-container {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  font-weight: 500;
  position: relative;
  padding-bottom: 1rem;
}

.contact-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #2C5AFF, #00C6FF);
}

.address-card,
.contact-card {
  padding-left: 2.5rem;
}

.address-item {
  margin-bottom: 1.5rem;
}

.address-item h4 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.address-item p {
  color: #666;
  line-height: 1.6;
  font-size: 1.3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  color: #333;
}

.contact-icon {
  font-size: 1.6rem;
  width: 40px;
  height: 40px;
  background: #f0f5ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2C5AFF;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    width: 90%;
  }

  .address-card,
  .contact-card {
    padding: 1.5rem;
  }

  .contact-title {
    font-size: 1.5rem;
  }
}
</style>


