<template>
  <div class="system">
    <Common
      bg="https://www.huiyangtong.com/images/institutions-banner.webp"
    >
      <template #title>养老公寓智慧管理系统 </template>
      <template #subtitle>针对养老公寓场景定制化打造，涵盖养老公寓房源配置、现有房源情况查看、公寓住户档案、客户跟进管理、长短租合同管理、入住流程管理、服务过程管理、物业管理、费用管理等功能。</template>
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

