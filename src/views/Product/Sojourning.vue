<template>
  <div class="system">
    <Common
      bg="https://www.huiyangtong.com/images/institutions-banner.webp"
    >
      <template #title>旅居养老服务系统</template>
      <template #subtitle>针对长租酒店、养老公寓、农家乐养老社区、独立养老社区等旅居养老场景定制化打造，涵盖旅居养老社区房源配置、房间管理、团队管理、预约管理、入住管理、阶段管理等从预约、入住到退住全流程。</template>
    </Common>
    <div class="img"></div>
    <h2>极简运维</h2>
    <h2>一图读懂养老机构智慧管理系统</h2>
    <div class="two">
      <img src="../../assets/Images/image3.png" alt="">
      <img src="../../assets/Images/image4.png" alt="">
    </div>
    <div><el-button type="primary" plain class="btn">点击申请免费试用</el-button></div>
  </div>
  <ToTop @go-first="scrollToTop" />
  <Footer></Footer>
</template>

<script setup>
import Common from '@/components/Common.vue'
import ToTop from '@/components/ToTop.vue';
import Footer from '@/components/Footer.vue';
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
.btn{
  padding: 30px 40px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 18.75rem;
}
div:has(> .btn) {
  width: 100%;
  text-align: center;
}
</style>

