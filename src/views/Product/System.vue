<template>
  <div class="system">
    <Common
      bg="https://www.huiyangtong.com/images/institutions-banner.webp"
    >
      <template #title>养老机构智慧管理系统</template>
      <template #subtitle>针对养老机构场景定制化打造，将先进的技术和养老机构的设施建设、服务内容和流程紧密的结合起来，涵盖从老人入住、能力评估、财务缴费、护理管理、集团数据、健康管理、报表分析、仓储管理等功能。</template>
    </Common>
    <div class="img"></div>
    <h2>极简运维</h2>
    <h2>一图读懂养老机构智慧管理系统</h2>
    <div class="two">
      <img src="../../assets/Images/image3.png" alt="">
      <img src="../../assets/Images/image4.png" alt="">
    </div>
        <div><TryoutBtn></TryoutBtn></div>
  </div>
  <Footer></Footer>
  <Consultation></Consultation>
  <ToTop @go-first="scrollToTop" />
</template>

<script setup>
import Common from '@/components/Common.vue';
import ToTop from '@/components/ToTop.vue';
import Footer from '@/components/Footer.vue';
import Consultation from '@/components/Consultation.vue';
import TryoutBtn from '@/components/TryoutBtn.vue';
const scrollToTop = () => {
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
</script>


<style scoped>
.system{
  background-color: #fff;
}
.img {
  position: relative;
}

.img::before {
  content: '';
  display: block;
  padding-bottom: 40%;
  background-image: url('../../assets/Images/image2.png');
  background-size: cover;
}
h2{
  text-align: center;
  font-weight: 400;
  font-size: 3.125rem;
}
.two{
  text-align: center;
}

div:has(> .btn) {
  width: 100%;
  text-align: center;
}
</style>

