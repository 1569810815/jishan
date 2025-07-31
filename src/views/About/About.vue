<template>
  <div class="about">
    <Common
    :bg=aboutbg1
  >
    <template #title>关于积善之家</template>
    <template #subtitle>ABOUT US</template>
  </Common>

  <div class="introduction">
    <h2>立足行业十年，懂开发更懂养老</h2>
    <p>积善之家专注康养智慧管理平台，解决客户多种困扰</p>
    <ul>
      <li v-for="(item, index) in introductionData" :key="index">
        <p>{{ item.text }}</p>
      </li>
    </ul>
  </div>
  <div class="company-intro">
    <!-- 顶部标题 -->
    <div class="intro-header">
      <h1 class="title">发展历程</h1>
      <p>积善之家大事记</p>

    </div>

    <!-- 公司简介 -->
    <div class="intro-content">
    <div class="intro-text">
      <div class="timeline">
        <div
          v-for="(item, index) in timelineData"
          :key="index"
          class="timeline-item"
        >
          <div class="timeline-year">{{ item.year }}</div>
          <div class="timeline-dot"></div>
          <div class="timeline-right">
            <div class="timeline-title">{{ item.tatle }}</div>
            <div class="timeline-content">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <!-- 核心技术 -->
    <div class="tech-section">
      <h1 class="section-title">核心技术</h1>
      <p>自主研发的全栈技术矩阵</p>
      <div class="tech-grid">
        <div
          v-for="(tech) in technologies"
          :key="tech.name"
          class="tech-card"
        >
          <div class="tech-icon">
            <img :src=tech.img alt="">
          </div>
          <h4>{{ tech.name }}</h4>
          <p>{{ tech.description }}</p>
        </div>
      </div>
    </div>

    <!-- 合作伙伴 -->
      <div class="partners-section">
        <h3 class="section-title">战略合作伙伴</h3>
        <p>携手全球顶尖企业，共建行业生态</p>
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
      <p>品质背书：认证即承诺</p>
      <el-carousel :interval="3000" type="card" indicator-position="outside">
      <el-carousel-item v-for="item in 6" :key="item">
        <img src="https://is.huiyangtong.com/uploads/image/20230508/1683515530.jpg" alt="">
        <span>软件产品证书</span>
      </el-carousel-item>
    </el-carousel>
    </div>
  <div class="contact-section">
    <section id="contact" class="contact-section">
      <h2>联系我们</h2>
    </section>
    <p>开启合作第一步</p>
<div class="contact-images">
          <div class="image-item">
            <img :src="lianxiwomen1" alt="免费体验">
            <span>免费体验</span>
          </div>
          <div class="image-item">
            <img :src="lianxiwomen2" alt="预约演示">
            <span>预约演示</span>
          </div>
          <div class="image-item">
            <img :src="lianxiwomen3" alt="价格咨询">
            <span>价格咨询</span>
          </div>
          <div class="image-item">
            <img :src="lianxiwomen4" alt="联系我们">
            <span>联系我们</span>
          </div>
        </div>
    <div class="contact-container">
      <div class="contact-left">
        <div
          v-for="(address, index) in addressList"
          :key="index"
          class="address-tab"
          :class="{ 'active': activeTab === index }"
          @click="activeTab = index"
        >
          {{ address.name }}
        </div>
      </div>

      <div class="contact-right">

        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon">📍 公司地址：</span>
            <span>{{ currentAddress.address }}</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📞 联系电话：</span>
            <span>{{ currentAddress.phone }}</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">✉️ 邮箱：</span>
            <span>Jishanyanglao@163.com</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">🕒 工作时间：</span>
            <span>周一至周五 9:00-18:00</span>
          </div>
        </div>

        <div class="gaode-map">
          <gaode
            :lat="currentAddress.lat"
            :lng="currentAddress.lng"
            :address-list="addressList"
            :active-index="activeTab"
          />
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
import {ref,computed} from 'vue'
import gaode from '@/components/gaode.vue';
import Consultation from '@/components/Consultation.vue'
import Common from '@/components/Common.vue'
import ToTop from '@/components/ToTop.vue';
import Footer from '@/components/Footer.vue';
import aboutbg1 from '@/assets/Images/aboutbg1.png'
import hexinjishu1 from '@/assets/Images/hexinjishu1.png'
import hexinjishu2 from '@/assets/Images/hexinjishu2.png'
import hexinjishu3 from '@/assets/Images/hexinjishu3.png'
import hexinjishu4 from '@/assets/Images/hexinjishu4.png'
import lianxiwomen1 from '@/assets/Images/lianxiwomen1.png'
import lianxiwomen2 from '@/assets/Images/lianxiwomen2.png'
import lianxiwomen3 from '@/assets/Images/lianxiwomen3.png'
import lianxiwomen4 from '@/assets/Images/lianxiwomen4.png'
const activeTab = ref(0)

const currentAddress = computed(() => {
  return addressList.value[activeTab.value]
})

const scrollToTop = () => {
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
const introductionData = ref([
  {text:'提升品牌建设力'},
  {text:'大大提高客户跟单转化率'},
  {text:'运营风险有跟踪闭环'},
  {text:'服务质量标控有抓手'},
  {text:'解放管理层聚焦关注点'},
  {text:'易用友好的体验设计'},
  {text:'集团合规管控到位'},
  {text:'营销引流增长'},

])
const timelineData = ref([
  {
    year: '现在',
    tatle:'敬请期待！我们，还在路上...',
    content: ''
  },
  {
    year: '2024年',
    tatle:'自主研发',
    content: '成立 "积善京雅" 合资公司，自主研发智慧养老服务平台，推动服务流程数字化、监管数据可视化，开启 "传统养老" 向 "智慧养老" 的模式革新。'
  },
  {
    year: '2021年',
    tatle:'快速发展',
    content: '启动托管加盟业务战略布局，成功托管北京百床养老项目“北石槽镇养老照料中心";同年成立"贵阳善和”运营首个百床养老机构--云岩区吉善康养中心。'
  },
  {
    year: '2015年',
    tatle:'正式落地',
    content: '正式创立“积善之家"养老品牌，公司更名为"北京积善之家养老服务有限公司”，在北京建立首家居家养老服务站标志养老业务正式落地。'
  },
  {
    year: '2011年',
    tatle:'公司成立',
    content: '公司成立，锚定养老领域战略赛道，开启 "公益探索 + 产业布局" 双轨发展之路。'
  },
])

const technologies = ref([
  {
    name: '物联网技术',
    description: '实现各种智能设备的互联互通，全面监测老年人健康和生活状况',
    img:hexinjishu1
  },
  {
    name: '大数据技术',
    description: '处理大量健康数据、行为数据，提取有价值信息支持决策',
    img:hexinjishu2
  },
  {
    name: '云计算技术',
    description: '实现资源共享和弹性扩展，提高平台性能和可靠性',
    img:hexinjishu3
  },
  {
    name: '人工智能',
    description: '对健康状况、行为模式进行预测分析，提供个性化服务',
    img:hexinjishu4
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
  '欧孚通信',
  '欧孚通信',
  '欧孚通信',
  '欧孚通信',
  '欧孚通信',
  '欧孚通信',
  '欧孚通信',
  '欧孚通信',
  '欧孚通信',

])

const addressList = ref([
  { name: '北京总部',address:'北京市丰台区东高地小区积善之家康养中心',phone:'400-900-1173', lng: 116.4572, lat: 39.8101 },
  { name: '上海',address:'上海市上海市上海市上海市上海市',phone:'222222', lng: 121.47506, lat: 31.21915 },
  { name: '柳州',address:'柳州柳州柳州柳州柳州', phone:'333333',lng: 109.40475, lat: 24.2625 },
  { name: '西安',address:'陕西省西安市长安区积善之家康养中心', phone:'444444',lng: 108.94587, lat: 34.24723 },
  { name: '郑州',address:'河南省郑州市河南省郑州市河南省郑州市', phone:'444444',lng: 113.67377, lat: 34.7559 },

]);

</script>



<style scoped>
.about {
  padding-bottom: 200px;
  overflow: hidden;
}
.introduction {
  background-image: url('@/assets/Images/introductionbg1.png');
  background-size: cover;
  background-position: center;
  padding: 5rem;
}

.introduction h2 {
  text-align: center;
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  font-size: 2vw;
  line-height: 1.2;
  margin: 1vw 0;
}

.introduction p {
  color: #666;
  font-size: 1.1vw;
  margin-top: 2.5rem;
  margin-bottom: 3.75rem;
  padding: 1vw 0;
  line-height: 1.7;
  text-align: center;
}

.introduction ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5vw;
  padding: 2rem;
  background-image: url('@/assets/Images/introductionbg2.png');
  background-size: 15%;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.introduction ul li {
  text-align: center;
  font-size: 2rem;
  color: #333;
}

.introduction ul li p {
  background-image: url('@/assets/Images/introductionbg3.png');
  background-size: 100% 100%;
  color: #000;
  background-position: center;
}

.introduction ul li:nth-child(2) p,
.introduction ul li:nth-child(7) p {
  color: rgba(0, 0, 0, 0.6);
}

.introduction ul li:nth-child(4) {
  grid-column: 1;
  transform: translateX(25%);
}

.introduction ul li:nth-child(5) {
  grid-column: 3;
  transform: translateX(-25%);
}

.honor {
  padding: 9.375rem 0;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
}
.honor::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  background-image: url('@/assets/Images/hexinjishubg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}
:deep(.el-carousel__indicator button) {
  background-color: #666;
  margin-top: 5rem;
}
:deep(.el-carousel__indicator.is-active button) {
  background-color: #ef203a;
}
:deep(.el-carousel__indicators) {
  bottom: 100px;
}
.honor span {
  display: inline-block;
  color: black;
  margin-top: 1.25rem;
  font-size: 2rem;
  font-weight: normal;
}

.company-intro {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: #333;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.intro-header {
  text-align: center;
  margin-bottom: 3rem;
}

.intro-header p,
.tech-section p,
.partners-section p,
.honor p {
  color: #666;
  font-size: 1.1vw;
  margin-top: 2.5rem;
  margin-bottom: 3.75rem;
  padding: 1vw 0;
  line-height: 1.7;
  text-align: center;
}

.title,
.section-title {
  text-align: center;
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  font-size: 2vw;
  line-height: 1.2;
  margin: 1vw 0;
}

.timeline {
  position: relative;
  padding-left: 300px;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #FFB071 ,#EF203A);
}

.timeline-item {
  position: relative;
  padding-bottom: 3rem;
  min-height: 100px;
}

.timeline-year {
  position: absolute;
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  left: -150px;
  width: 100px;
  text-align: left;
  font-size: 1.8rem;
  font-weight: 400;
  color: #ef203a;
  top: 0;
}

.timeline-dot {
  position: absolute;
  left: -7px;
  top: 5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #ef203a;
  border: 3px solid #f8faff;
  z-index: 1;
}

.timeline-right {
  margin-left: 30px;
  padding-left: 30px;
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.timeline-content {
  line-height: 1.8;
  font-size: 1.2rem;
  color: #666;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed #ddd;
}

.timeline-item:last-child .timeline-content {
  border-bottom: none;
  padding-bottom: 0;
}

.tech-section {
  position: relative;
  margin: 4rem 0;
  padding: 4rem 0;
  z-index: 1;
}


.tech-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  background-image: url('@/assets/Images/hexinjishubg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.tech-card {
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
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.tech-card p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
}

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

.contact-section {
  width: 100%;
  margin-top: 8rem;
  text-align: center;

}

.contact-section h2 {
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  font-size: 2vw;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.contact-section p {
  color: #666;
  font-size: 1.1vw;
  margin-top: 2.5rem;
  margin-bottom: 3.75rem;
  padding: 1vw 0;
  line-height: 1.7;
  text-align: center;
}

.contact-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  align-items: stretch;
  padding: 2rem;
}

.contact-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  height: 100%;
  box-shadow: 6px 0 10px -4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}


.address-tab {
  padding: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  font-weight: 500;
}

.address-tab:hover {
   background: rgba(239, 32, 58, 0.1);
  color: #ef203a;
  border-left: 0.35vw solid #ef203a;
}

.address-tab.active {
  position: relative;
  color: #ef203a;
  font-weight: bold;
}

.contact-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 8px;
  padding: 2rem;
  height: 100%;
}

.contact-info {
  padding: 2rem;
  border-radius: 8px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: #333;
}

.contact-icon {
  font-weight: 600;
  margin-right: 0.5rem;
  min-width: 120px;
  text-align: left;
}

.gaode-map {
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.contact-images {
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 2rem;

}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.contact-images img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.image-item span {
  font-size: 1.1rem;
  color: #ef203a;
  text-align: center;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    width: 90%;
  }

  .contact-section h2 {
    font-size: 2.5rem;
  }

  .contact-left {
    flex-direction: row;
    overflow-x: auto;
    padding: 0.5rem;
  }

  .address-tab {
    white-space: nowrap;
    padding: 0.8rem 1rem;
  }

  .contact-images {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .contact-icon {
    min-width: auto;
  }

  .contact-images {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    width: 90%;
  }

  .contact-section h2 {
    font-size: 2.5rem;
  }

  .gaode {
    min-height: 300px;
  }

  .contact-images {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .contact-images {
    grid-template-columns: 1fr;
  }

  .contact-item {
    font-size: 1rem;
    gap: 0.8rem;
  }

  .contact-icon {
    min-width: 36px;
    height: 36px;
    font-size: 1.1rem;
  }
}

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

  .timeline {
    padding-left: 120px;
  }

  .timeline::before {
    left: 55px;
  }

  .timeline-year {
    width: 50px;
    font-size: 1.2rem;
  }

  .timeline-dot {
    left: 50px;
  }

  .timeline-right {
    margin-left: 20px;
    padding-left: 20px;
  }

  .timeline-title {
    font-size: 1.3rem;
  }

  .timeline-content {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .timeline {
    padding-left: 90px;
  }

  .timeline::before {
    left: 40px;
  }

  .timeline-year {
    width: 40px;
    font-size: 1.1rem;
  }

  .timeline-dot {
    left: 37px;
    width: 12px;
    height: 12px;
  }

  .timeline-right {
    margin-left: 15px;
    padding-left: 15px;
  }

  .timeline-title {
    font-size: 1.1rem;
  }

  .timeline-content {
    font-size: 1rem;
  }
}
</style>
