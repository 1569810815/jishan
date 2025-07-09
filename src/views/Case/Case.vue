<template>
    <Common
    bg="https://www.huiyangtong.com/images/about-banner.webp"
  >
    <template #title>成功案例</template>
    <template #subtitle>SUCCESS CASES</template>
  </Common>
  <div class="case">
    <div class="profile">

    <div class="profile-text">
      <h2>全新的客户成功服务模式</h2>
      <p>区别传统企业付费=活动结束的售后模式</p>
      <h2>汇养通颠覆性迭代客户成功服务模式 </h2>
      <h3>付费=服务刚开始！</h3>
      <p>以客户成功服务、客户支持服务、专业实施服务为核心</p>
      <h4>助力客户养老业务的成功</h4>
    </div>

    <div class="profile-img"><img src="https://is.huiyangtong.com/images/service-1.webp" alt=""></div>
  </div>

  <div class="scenario">
    <h2>全方位客户服务场景</h2>
    <h2>为客户持续构建信息化竞争力</h2>
    <div>
      <ul>
        <li v-for="(item,index) in scenarioList" :key="item.id">
          <p>0{{ index+1 }}</p>
          <p>{{ item.tatle }}</p>
          <img :src="item.img" alt="">
        </li>
      </ul>
      <el-button type="primary" plain class="btn">点击申请免费试用</el-button>
    </div>
  </div>


  <div class="example">
    <h2>典型客户案例</h2>
    <ul>
      <li v-for="item in caseList" :key="item.id">
        <img :src="item.img" alt="">
        <div class="case-info">
          <h2>{{ item.tatle }}</h2>
        </div>
        <div class="case-text-pop">{{ item.text }}</div>
      </li>
    </ul>
  </div>
  </div>
  <Footer></Footer>
<ToTop @go-first="scrollToTop" />
</template>

<script setup>
import Common from '@/components/Common.vue'
import ToTop from '@/components/ToTop.vue'
import Footer from '@/components/Footer.vue'
import {ref} from 'vue'
const scrollToTop = () => {
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
const scenarioList = ref([
  {id:1001,tatle:'专业顾问',img:'https://is.huiyangtong.com/images/male.webp'},
  {id:1002,tatle:'上线会议',img:'https://is.huiyangtong.com/images/conversation.webp'},
  {id:1003,tatle:'产品咨询与规划',img:'https://is.huiyangtong.com/images/light-bulb.webp'},
  {id:1004,tatle:'专业辅导',img:'https://is.huiyangtong.com/images/work.webp'},
  {id:1005,tatle:'业务培训',img:'https://is.huiyangtong.com/images/meeting.webp'},
  {id:1006,tatle:'咨询答疑',img:'https://is.huiyangtong.com/images/consultation.webp'},
  {id:1007,tatle:'技术支持',img:'https://is.huiyangtong.com/images/technology.webp'},
  {id:1008,tatle:'升级迭代',img:'https://is.huiyangtong.com/images/process-improvement.webp'},
  {id:1009,tatle:'客户成功',img:'https://is.huiyangtong.com/images/success.webp'},

])


const caseList = ref([
    {id:1001,tatle:'上海云栖兰亭联袂汇养通，合创数字化智慧康养社区',img:'https://is.huiyangtong.com/uploads/image/20250422/1745296915.png',text:'上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1002,tatle:'上海云栖兰亭联袂汇养通，合创数字化智慧康养社区',img:'https://is.huiyangtong.com/uploads/image/20250422/1745296915.png',text:'上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1003,tatle:'上海云栖兰亭联袂汇养通，合创数字化智慧康养社区',img:'https://is.huiyangtong.com/uploads/image/20250422/1745296915.png',text:'上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1004,tatle:'上海云栖兰亭联袂汇养通，合创数字化智慧康养社区',img:'https://is.huiyangtong.com/uploads/image/20250422/1745296915.png',text:'上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1005,tatle:'上海云栖兰亭联袂汇养通，合创数字化智慧康养社区',img:'https://is.huiyangtong.com/uploads/image/20250422/1745296915.png',text:'上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1006,tatle:'上海云栖兰亭联袂汇养通，合创数字化智慧康养社区',img:'https://is.huiyangtong.com/uploads/image/20250422/1745296915.png',text:'上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1007,tatle:'上海汇养通，合创数字化智慧康养社区',img:'https://is.huiyangtong.com/uploads/image/20250422/1745296915.png',text:'上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1008,tatle:'上海云栖汇养通，合创数字化智慧康养社区',img:'https://is.huiyangtong.com/uploads/image/20250422/1745296915.png',text:'上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1009,tatle:'上海云栖兰亭联袂汇养通，合创数字化智慧康养社区',img:'https://is.huiyangtong.com/uploads/image/20250422/1745296915.png',text:'上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1010,tatle:'上海云栖兰亭联袂汇养通，合创数字化智慧康养社区',img:'https://is.huiyangtong.com/uploads/image/20250422/1745296915.png',text:'上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1011,tatle:'上海云栖兰亭联袂汇养通，合创数字化智慧康养社区',img:'https://is.huiyangtong.com/uploads/image/20250422/1745296915.png',text:'上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
])
</script>

<style scoped>
.profile {
  width: 100%;
  min-height: 340px;
  background-image: url('https://is.huiyangtong.com/images/cases_service_bg.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3vw 0;
  box-sizing: border-box;
  gap: 3vw;
}
.profile-text {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 4vw;
}
.profile-text > h2 {
  font-size: 2vw;
  line-height: 1.2;
  font-weight: 400;
  margin: 0.5vw 0;
}
.profile-text > h3 {
  font-size: 2.5vw;
  line-height: 1.2;
  font-weight: 400;
  color: #0a78e7;
  margin: 0.5vw 0;
}
.profile-text > h4 {
  font-size: 2vw;
  line-height: 1.2;
  font-weight: 400;
  color: #666;
  margin: 0.5vw 0;
}
.profile-text > p {
  font-size: 1.1vw;
  line-height: 1.7;
  color: #666;
  margin: 1vw 0 0 0;
}
.profile-img {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-img img {
  border-radius: 1vw;
  background: #fff;
  display: block;
}

/* 场景区域 */
.scenario > h2 {
  text-align: center;
  font-weight: 400;
  font-size: 2vw;
  line-height: 1.2;
  margin: 1vw 0;
}
.scenario > div {
  width: 80%;
  margin: 0 auto;
}
.scenario ul {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5vw;
  padding: 0;
  margin: 2vw 0 0 0;
  list-style: none;
}
.scenario ul li {
  background: #f4f8ff;
  border-radius: 1vw;
  box-shadow: 0 2px 12px rgba(44,90,255,0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1vw 0.5vw;
  font-size: 1vw;
  transition: box-shadow 0.3s, transform 0.3s;
  position: relative;
  min-height: 10vw;
}
.scenario ul li:last-child {
  grid-column: 4 / span 2;
  background: linear-gradient(90deg, #e8f0ff 60%, #d0e2ff 100%);
  color: #2C5AFF;
  font-weight: bold;
  font-size: 1.2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.scenario ul li p:first-child {
  font-family: "DINCond";
  font-size: 1.2vw;
  color: #046fd4 ;
  font-weight: bold;
  margin-bottom: 0.5vw;
}
.scenario ul li p:last-child {
  font-size: 1vw;
  color: #333;
  margin-bottom: 0.5vw;
}
.scenario ul li img {
  width: 3.5vw;
  height: 3.5vw;
  object-fit: contain;
  margin-bottom: 0.3vw;
}
.el-button.btn {
  padding: 30px 40px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  line-height: 5px;
  margin: 50px auto;
  display: block;
}
.scenario ul li:not(:last-child)::after {
  content: '';
  display: block;
  width: 2.2vw;
  height: 2.2vw;
  border-radius: 50%;
  position: absolute;
  right: 1.5vw;
  top: 40%;
  transform: translateY(-50%);
  z-index: 2;
}
.scenario ul li:not(:last-child)::before {
  content: '';
  position: absolute;
  right: 1.3vw;
  top: 70%;
  transform: translateY(-50%) rotate(-45deg);
  width: 0.7vw;
  height: 0.7vw;
  border-right: 2px solid #357ae8;
  border-bottom: 2px solid #357ae8;
  z-index: 3;
  background: transparent;
}

/* 典型案例区域 */
.example {
 width: 80%;
  margin: 3vw auto 0 auto;
}
.example > h2 {
  text-align: center;
  font-size: 2vw;
  font-weight: 400;
  margin-bottom: 2vw;
}
.example ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5vw;
  list-style: none;
  padding: 0;
  margin: 0;
}
.example ul li {
  background: #f4f8ff;
  border-radius: .3vw;
  box-shadow: 0 2px 12px rgba(44,90,255,0.06);
  border: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 1vw;
  /* aspect-ratio:1/1;           保证正方形 */
  position: relative;
  overflow: visible;           /* 允许弹窗溢出 */
  transition: box-shadow 0.3s, transform 0.3s;
  min-width: 180px;
  max-width: 400px;
}
.example ul li:hover {
  box-shadow: 0 8px 32px rgba(44,90,255,0.13);
  transform: translateY(-0.5vw) scale(1.04);
  z-index: 100;
}
.example ul li img {
  width: 7vw;
  height: 7vw;
  min-width: 60px;
  min-height: 60px;
  max-width: 120px;
  max-height: 120px;
  object-fit: cover;
  border-radius: 0.3vw;
  margin-right: 1vw;
  background: #fff;
}
.example ul li h2 {
  font-size: .8vw;
  color: black;
  margin: 0 0 0.5vw 0;
  font-weight: 400;
}
.example ul li .case-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.example ul li:hover p {
  display: block;
  background: #fff;
  border-radius: 0.5vw;
  padding: 0.5vw 1vw;
  margin-top: 0.7vw;
  box-shadow: 0 2px 8px rgba(44,90,255,0.08);
  position: absolute;
  left: 8vw;
  right: 1vw;
  top: 1vw;
  z-index: 2;
}

.example ul li .case-text-pop {
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 0.5vw;
  width: 22vw;
  min-width: 220px;
  max-width: 32vw;
  height: auto;
  background: #fff;
  color: #555;
  border-radius: 0 1vw 1vw 0;
  box-shadow: 0 4px 24px rgba(44,90,255,0.13);
  padding: 1vw 1.5vw;
  z-index: 10;
  font-size: 1vw;
  line-height: 1.7;
  align-items: flex-start;
  justify-content: center;
  animation: fadeInRight 0.3s;
  pointer-events: none;
  white-space: normal;
  word-break: break-all;
}
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(2vw);}
  to { opacity: 1; transform: none;}
}
.example ul li:hover .case-text-pop {
  display: flex;
}
.example ul li p {
  display: none;
}
@media (max-width: 1200px) {
  .example ul li .case-text-pop {
    left: auto;
    right: 0;
    margin-left: 0;
    border-radius: 1vw;
    width: 60vw;
    min-width: 0;
    max-width: 80vw;
    top: 110%;
    box-shadow: 0 8px 32px rgba(44,90,255,0.13);
  }
}

</style>
