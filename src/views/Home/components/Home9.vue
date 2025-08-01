<template>
  <div class="home9">
    <div class="banxin">
      <h2>新闻资讯</h2>
    <div class="tab-btns">
      <button
        :class="{active: activeTab === 'policy'}"
        @click="activeTab = 'policy'"
      >新闻资讯</button>
      <button
        :class="{active: activeTab === 'news'}"
        @click="activeTab = 'news'"
      >公司动态</button>
    </div>
    <div class="swiper-wrap">
      <div class="carousel-container">
        <ul class="carousel-list">
          <li
            v-for="item in (activeTab === 'policy' ? policyList : newsList)"
            :key="item.id"
            class="slide-card"
            @click="goNews"
          >
            <img :src="item.img" alt="" class="xinwen" />
            <div class="slide-title">{{ item.title }}</div>
            <div class="slide-desc">{{ item.desc }}</div>
            <img src="@/assets/Images/jiantou.png" alt="" class="jiantou">
          </li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import shiyongImg from '@/assets/Images/anliImg.png'
import { useRouter } from 'vue-router'
const router =useRouter()
const activeTab = ref('policy')
const goNews = ()=>{
  if(activeTab.value == 'policy'){
    router.push('/information')
  }else{router.push('/dynamic')}

}
const policyList = [
  { id: 1, img: shiyongImg, title: '《居家养老上门服务基本规范》国家标准正式发布', desc: '近日，《居家养老上门服务基本规范》国家标准（GB/T 43153-2023）正式发布，这是我国针对居家养老上门服务发布的首个国家标准，将为合理界定居家养老上门服务范围、规范供给主体资质条件及供给流程内容要求等提供基本依据，对于推动居家养老服务标准化、规范化、专业化发展具有现实意义。该标准是在全面总结各地实践做法基础上，适应居家养老服务发展需要编制而成的。标准主要内容分为5个部分，包括“术语和定义”、“总体要求”、“服务内容”、“服务流程及要求”、“服务评价与改进”。其中，“总体要求”明确了服务组织、服务人员所应具备的基本条件和服务应达到的基本要求；“服务内容”包括生活照料、基础照护、健康管理、探访关爱、精神慰藉、委托代办、家庭生活环境适老化改造等7项服务，涵盖了居家养老所需的主要专业化服务内容；“服务流程”明确了从咨询接待、老年人能力评估、签订服务协议、服务准备到服务实施等一系列程序性要求；“服务评价与改进”明确了服务评价形式及对评价发现问题改进反馈的要求。下一步，民政部将指导各地认真做好《居家养老上门服务基本规范》国家标准的宣贯实施，适时针对具体服务内容制定相对细化的配套标准，进一步增强标准的指引性和可操作性，推动有效提高居家养老上门服务的精准度和精细化水平，不断增强广大老年人居家养老的获得感、幸福感、安全感。' },
  { id: 2, img: shiyongImg, title: '智慧养老市场规模预计2025年达5万亿元',desc:'中国智慧养老行业正以年均20%以上的增速重塑银发经济格局。根据中研普华产业研究院《2025-2030年中国智慧养老行业市场深度调研及投资战略预测报告》，2025年中国智慧养老市场规模预计突破7.21万亿元，较2023年增长20.2%，其中智能穿戴设备、家庭服务机器人、智能家居等细分领域占比从2020年的35%跃升至2025年的55%，成为驱动行业增长的核心引擎。2024年，中国智慧养老行业迎来标志性突破：上海“9073”模式(90%居家、7%社区、3%机构)实现智慧化适配改造，覆盖超200万老年人;江苏无锡藕塘护理院引入康养机器人“藕爷”，护理效率提升40%，人力成本降低25%;安徽安庆市构建“1+1+10”市级养老服务信息平台，整合全市227家养老机构数据，累计提供服务超72万人次。这些案例标志着中国智慧养老行业正从“技术验证”向“规模落地”转型。' },
  { id: 3, img: shiyongImg, title: '我国有9000万"低龄老年人"，银发经济发展潜力巨大', desc: '3月23日，民政部副部长唐承沛在中国发展高层论坛2025年年会的专题研讨会上表示，预计2035年之前的10年左右时间，是本世纪剩余时间内我国人口老龄化程度较低的时期，也是积极应对人口老龄化的重要"窗口期"。他指出，要看到我国人口老龄化蕴藏着的独特发展机遇，未来银发经济发展潜力巨大，预计到2035年，银发经济占GDP比重将从6%上升到9%。' },
]
const newsList = [
  { id: 11, img: shiyongImg, title: '公司动态标题1', desc: '动态内容摘要1' },
  { id: 12, img: shiyongImg, title: '公司动态标题2', desc: '动态内容摘要2' },
  { id: 13, img: shiyongImg, title: '公司动态标题3', desc: '动态内容摘要3' },
]
</script>

<style scoped>

.banxin {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;

}
.home9 {
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-start;
  padding-top: 6.25vw;
}

h2 {
  font-size: 2.2vw;
  text-align: center;
  font-family: "Alimama ShuHei", sans-serif;
  color: black;
  font-weight: bold;
  margin-top: 2vw;
  letter-spacing: 2px;
}

.tab-btns {
  display: flex;
  justify-content: center;
  gap: 2vw;
  width: 20%;
  margin-right: 50vw;
  margin-bottom: 4vw;
  margin-top: 2vw;
}

.tab-btns button {
  font-size: 1.1vw;
  padding: 0 0 0.5rem 0;
  border: none;
  background: transparent;
  color: #666;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.tab-btns button.active,
.tab-btns button:hover {
  color: #ef203a;
}

.tab-btns button.active:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #ef203a;
}

.swiper-wrap {
  width: 90vw;
  max-width: 1800px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-container {
  width: 100%;
  min-height: 320px;
  margin-bottom: 1.5rem;
  overflow: visible;
}

.carousel-list {
  display: flex;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  transition: transform 0.3s ease;
}

.slide-card {
  flex: 0 0 calc(33.333% - 20px);
  border-radius: 0.8vw;
  box-shadow: 0 2px 16px rgba(44,90,255,0.08);
  background: #f7f7f9;
  display: flex;
  flex-direction: column;
  min-height: 0;
  transition: box-shadow 0.2s, transform 0.3s;
}

.slide-card:hover {
  box-shadow: 0 8px 32px rgba(44,90,255,0.13);
  transform: translateY(-8px) scale(1.04);
}
.slide-card:hover .slide-title {
  color: #ef203a;
}
.xinwen {
  width: 100%;
  height: 16vw;
  min-height: 100px;
  object-fit: cover;
  border-radius: 0.6vw 0.6vw 0 0;
  flex: 0 0 auto;
}

.slide-title {
  padding: 1vw;
  font-size: 0.9vw;
  color: black;
  font-weight: 600;
  flex: 0 0 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.slide-desc {
  font-size: 0.8vw;
  color: #666;
  padding: 0 1vw;
  line-height: 1.8;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-height: 0;
  margin-bottom: 10px;
}

.jiantou {
  /* width: 20px; */
  height: 20px;
  margin: 1vw auto 1vw 1vw;
  align-self: flex-end;
}

/* .custom-pagination {
  margin-top: 0.5rem;
  text-align: center;
} */

@media (max-width: 1200px) {
  h2 { font-size: 2.5rem; }
  .tab-btns button { font-size: 1.2rem; }
  .slide-card { min-height: 260px; }
  .xinwen { height: 120px; }
  .slide-title {
    font-size: 1.3rem;
    white-space: normal;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    display: -webkit-box;
  }
  .slide-desc { font-size: 1rem; }
}

@media (max-width: 900px) {
  .swiper-wrap { width: 98vw; }
  .carousel-container { width: 90%; }
  .slide-card {
    min-height: 160px;
    flex: 0 0 calc(50% - 15px);
  }
  .xinwen { height: 70px; }
  .slide-title { font-size: 1rem; }
  .slide-desc {
    font-size: 0.9rem;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
}

@media (max-width: 600px) {
  .slide-card {
    flex: 0 0 100%;
  }
  .tab-btns {
    margin-right: 0;
    justify-content: center;
  }
  .slide-title {
    -webkit-line-clamp: 1;
    line-clamp: 1;
  }
  .slide-desc {
    -webkit-line-clamp: 1;
    line-clamp: 1;
  }
}
</style>
