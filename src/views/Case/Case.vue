<template>
    <Common
    :bg=bg
  >
    <template #title>成功案例</template>
    <template #subtitle>SUCCESS CASES</template>
  </Common>
  <div class="case">
    <div class="profile">
  <div class="profile-img">
    <img :src="anliImg" alt="">
  </div>
  <div class="profile-text">
    <h2>全新的客户成功服务模式</h2>
    <p>以客户成功服务、客户支持服务、专业实施服务为核心</p>
  </div>
</div>

  <div class="scenario">
    <h2>全方位客户服务场景</h2>
    <h2>为客户持续构建信息化竞争力</h2>
    <div>
      <ul>
        <li v-for="(item,index) in scenarioList" :key="item.id">
              <p>0{{ index+1 }}</p>
              <p>{{ item.tatle }}</p>
        </li>
      </ul>
      <TryoutBtn></TryoutBtn>
    </div>
  </div>


  <div class="example">
    <h2>典型客户案例</h2>
    <ul>
      <li v-for="item in caseList" :key="item.id">
        <img :src="item.img" alt="" class="anli">
        <div class="case-info">
          <h2>{{ item.tatle }}</h2>
          <p>{{ item.content }}</p>
        </div>
        <div class="case-text-pop">{{ item.text }}</div>
      </li>
    </ul>
  </div>
  </div>
  <Footer></Footer>
  <Consultation></Consultation>
<ToTop @go-first="scrollToTop" />
</template>

<script setup>
import TryoutBtn from '@/components/TryoutBtn.vue'
import Common from '@/components/Common.vue'
import ToTop from '@/components/ToTop.vue'
import Footer from '@/components/Footer.vue'
import Consultation from '@/components/Consultation.vue'
import bg from '@/assets/Images/anlibg.png'
import anliImg from '@/assets/Images/anliImg.png'
import anli from '@/assets/Images/anli2.png'



import {ref} from 'vue'
const scrollToTop = () => {
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
const scenarioList = ref([
  {id:1001,tatle:'专业顾问'},
  {id:1002,tatle:'上线会议'},
  {id:1003,tatle:'产品咨询与规划'},
  {id:1004,tatle:'专业辅导',},
  {id:1005,tatle:'业务培训',},
  {id:1006,tatle:'咨询答疑',},
  {id:1007,tatle:'技术支持',},
  {id:1008,tatle:'升级迭代',},
  {id:1009,tatle:'客户成功',},

])


const caseList = ref([
    {id:1001,tatle:'赣州八境颐养院',content:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55',img:anli,text:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1002,tatle:'赣州八境颐养院',content:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院',img:anli,text:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1003,tatle:'赣州八境颐养院',content:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院',img:anli,text:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1004,tatle:'赣州八境颐养院',content:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院',img:anli,text:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1005,tatle:'赣州八境颐养院',content:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院',img:anli,text:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1006,tatle:'赣州八境颐养院',content:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院',img:anli,text:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1007,tatle:'赣州八境颐养院',content:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院',img:anli,text:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1008,tatle:'赣州八境颐养院',content:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院',img:anli,text:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1009,tatle:'赣州八境颐养院',content:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院',img:anli,text:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1010,tatle:'赣州八境颐养院',content:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院',img:anli,text:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
    {id:1011,tatle:'赣州八境颐养院',content:'赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院赣州八境颐养院',img:anli,text:'上海云栖兰亭位于上海浦东新区宣桥镇，共建有600余套55-130㎡的精装公寓，综合配套总建筑面积1.6万平方米，区别于传统意义上的养老院，云栖兰亭首创“身心灵”全维健康服务体系。2021年，云栖兰亭与汇养通强强联袂，合创数字化智慧康养社区依托专业健康服务团队，全方位满足长者身体、心理、情感、精神等多层次健康需求，致力于打造中国身心灵康养社区。'},
])
</script>

<style scoped>
.profile, .scenario > div, .example {
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
}

.profile {
  min-height: 340px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4vw 0;
  box-sizing: border-box;
}
.profile-img {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 4vw;
}

.profile-img img {
  background: #fff;
  display: block;
  max-width: 100%;
  height: auto;
}

.profile-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 4vw;
}

.profile-text > h2 {
  font-size: 2vw;
  line-height: 1;
  font-weight: 700;
  margin: 0.5vw 0;
}

.profile-text > p {
  font-size: 1.1vw;
  line-height: 1.7;
  color: #666;
  margin: 1vw 0 0 0;
}

/* 场景区域 */
.scenario {
  padding: 6.25rem 0;
  background-image: url('@/assets/Images/anlibg2.png');
  background-size: cover;
  background-position: center;
}

.scenario > h2 {
  text-align: center;
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  font-size: 3.5rem;
  line-height: 1.2;
  margin: 1vw 0;
}

.scenario ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 4vw 0 0 0;
  list-style: none;
  position: relative;
}

.scenario ul li {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin-bottom: 2rem;
  position: relative;
  padding: 1rem 2rem;
  background-image: url('@/assets/Images/liuchengbg.png');
  background-size: cover;
  background-position:100% 0%;
  background-repeat: no-repeat;
  min-height: 150px;
  gap: 1rem;
}

.scenario ul li:nth-child(3n+1)::after,
.scenario ul li:nth-child(3n+2)::after {
  content: '>>';
  position: absolute;
  right: -15%;
  top: 40%;
  transform: translateY(-50%);
  color: #ef203a;
  font-weight: bold;
  font-size: 1.8rem;
}

.scenario ul li:last-child::after {
  display: none;
}



.scenario ul li p:first-child {
  font-family: "Alimama ShuHei", sans-serif;
  font-size: 1.8rem;
  color: #ef203a;
  font-weight: bold;
  margin-bottom: 2rem;
}

.scenario ul li p:last-child {
  margin-top: -0.125rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

el-button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 2rem auto 0;
  display: block;
}
/* 典型案例区域 */

.example {
  width: 80%;
  margin: 3vw auto;
}
.example > h2 {
  text-align: center;
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  font-size: 3.5rem;
  line-height: 1.2;
  margin: 3vw 0;
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
  border-radius: .2vw;
  box-shadow: 0 2px 12px rgba(44,90,255,0.06);
  border: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 1vw;
  position: relative;
  transition: box-shadow 0.3s, transform 0.3s;
  min-width: 180px;
  max-width: 400px;
}
.example ul li:hover {
  box-shadow: 0 8px 32px rgba(44,90,255,0.13);
  transform: translateY(-0.5vw) scale(1.04);
  z-index: 100;
}
.example ul li .anli {
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
.example ul li .case-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}
.example ul li .case-info:hover h2{
  color: #ef203a;
}
.example ul li h2 {
  font-size: 1.2rem;
  color: black;
  margin: 0 0 0.8rem 0;
  font-weight: 500;
  line-height: 1.3;
}

.example ul li .case-info p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1vw;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}

.example ul li:hover .case-text-pop {
  display: flex;
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

.example ul li:nth-child(3n) .case-text-pop {
  left: auto;
  right: 100%;
  margin-right: 0.5vw;
  margin-left: 0;
  border-radius: 1vw 0 0 1vw;
}

@media (max-width: 1200px) {
  .example ul li .case-text-pop,
  .example ul li:nth-child(3n) .case-text-pop {
    left: auto;
    right: 0;
    margin-left: 0;
    margin-right: 0;
    border-radius: 1vw;
    width: 60vw;
    min-width: 0;
    max-width: 80vw;
    top: 110%;
    box-shadow: 0 8px 32px rgba(44,90,255,0.13);
  }
}


@media (max-width: 768px) {
  .example ul {
    grid-template-columns: 1fr;
  }
  .example > h2 {
    font-size: 2rem;
  }
}

</style>
