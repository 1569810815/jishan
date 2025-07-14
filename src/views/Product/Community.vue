<template>
  <div class="system">
    <Common
      bg="https://www.huiyangtong.com/images/institutions-banner.webp"
    >
      <template #title>社区居家养老服务系统</template>
      <template #subtitle>以“居家养老服务为主，社区机
构养老为辅”的养老方式，在社区
建立的日间照料中心，相似老人享
受机构提供的养老服务，照料中心
提供基本的医疗保健，理疗护理，
就餐娱乐等服务。</template>
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
  <ToTop @go-first="scrollToTop" />
  <Consultation></Consultation>
  <Footer></Footer>
</template>

<script setup>
import Common from '@/components/Common.vue'
import Consultation from '@/components/Consultation.vue';
import ToTop from '@/components/ToTop.vue';
import Footer from '@/components/Footer.vue';
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

