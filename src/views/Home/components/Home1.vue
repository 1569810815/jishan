<template>

    <div class="home1">
      <div class="banxin">
        <h2>三分钟上手</h2>
        <h5>极简操作 轻装运营</h5>
        <p>
          以首都北京为总部，辐射全国的积善之家养老集团，是一家由慰老公益机构成功转型的全国连锁品牌养老服务首都名企。历经 10 余年发展，业务覆盖 10 省/市 ，累计服务逾 百万 人次老年群体，沉淀「轻资产、全服务、快复制」战略发展模式，筑牢连锁化运营根基。

        </p>
      </div>
        <tryout-btn class="tryout-btn"></tryout-btn>

    </div>

</template>

<script setup>
import TryoutBtn from '@/components/TryoutBtn.vue';
</script>

<style scoped>
.banxin {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;

}

.home1 {
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/Images/home1.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 1.5rem;
  box-sizing: border-box;
}

.home1 h2 {
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: rgba(0, 0, 0, 1);
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.home1 h5 {
  font-family: "AlibabaPuHuiTiR", sans-serif;
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 2rem;
  line-height: 1.3;
}

.home1 p {
  width: 100%;
  max-width: 30vw;
  font-family: "AlibabaPuHuiTiR", sans-serif;
  font-size: clamp(1rem, 1.25vw, 1.25rem);
  color: rgba(0, 0, 0, 0.4);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.tryout-btn {
  margin-top: 1.8rem;
  align-self: flex-start;
  margin-left: 0;
}

/* 小屏幕 (手机) */
@media (max-width: 640px) {
  .home1 {
    padding: 3rem 1.25rem;
  }

  .home1 p {
    line-height: 1.7;
    margin-bottom: 2rem;
  }
}

/* 中等屏幕 (平板) */
@media (min-width: 768px) {
  .home1 {
    padding-left: 5vw;
    padding-right: 5vw;
  }
}

/* 大屏幕 (桌面) */
@media (min-width: 1024px) {
  .home1 {
    padding-left: 8vw;
    padding-right: 8vw;
  }

  .home1 p {
    width: 70%;
  }
}

/* 超大屏幕 */
@media (min-width: 1536px) {
  .home1 {
    padding-left: 12vw;
    padding-right: 12vw;
  }
}
</style>
