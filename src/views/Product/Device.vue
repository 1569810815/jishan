<template>
  <Common
    bg="https://www.huiyangtong.com/images/hardware-banner.webp"
  >
    <template #title>智能设备</template>
    <template #subtitle>汇养通智能物联场景，智能互联，通链院内智能设备，24小时实时监测老人健康状况。数据系统完善，医疗预警闭环，预防运营风险，老人家属安心。</template>
  </Common>
  <h2 class="device-title">产品中心</h2>
  <el-tabs
    v-model="activeName"
    type="card"
    class="device-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="全部" name="全部">
      <ul class="device-list">
        <li v-for="item in pagedList" :key="item.id" class="device-card">
          <img :src="item.img" alt="">
          <p>{{ item.tatle }}</p>
        </li>
      </ul>
      <el-pagination
        class="device-pagination"
        background
        layout="prev, pager, next"
        :total="filteredList.length"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handlePageChange"
      />
    </el-tab-pane>
    <el-tab-pane
      v-for="cat in categories"
      :key="cat"
      :label="cat"
      :name="cat"
    >
      <ul class="device-list">
        <li v-for="item in pagedList" :key="item.id" class="device-card">
          <img :src="item.img" alt="">
          <p>{{ item.tatle }}</p>
        </li>
      </ul>
      <el-pagination
        class="device-pagination"
        background
        layout="prev, pager, next"
        :total="filteredList.length"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handlePageChange"
      />
    </el-tab-pane>
  </el-tabs>
  <Footer></Footer>
  <Consultation></Consultation>
  <ToTop @go-first="scrollToTop" />
</template>

<script setup>
import Consultation from '@/components/Consultation.vue'
import Common from '@/components/Common.vue'
import { ref, computed, watch } from 'vue'
import ToTop from '@/components/ToTop.vue'
import Footer from '@/components/Footer.vue'
const activeName = ref('全部')
const pageSize = 12
const currentPage = ref(1)
const scrollToTop = () => {
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

const deviceList = ref([
  {id:1001,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'智能水浸漏水探测器',label:'智能家居'},
  {id:1002,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'智能水浸漏水探测器',label:'智能家居'},
  {id:1003,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'智能水浸漏水探测器',label:'智能家居'},
  {id:1004,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'智能水浸漏水探测器',label:'智能家居'},
  {id:1005,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'火灾报警器',label:'火灾报警器'},
  {id:1006,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'火灾报警器',label:'火灾报警器'},
  {id:1007,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'火灾报警器',label:'火灾报警器'},
  {id:1008,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'火灾报警器',label:'火灾报警器'},
  {id:1009,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'红外探测器',label:'红外探测器'},
  {id:1010,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'红外探测器',label:'红外探测器'},
  {id:1011,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'红外探测器',label:'红外探测器'},
  {id:1012,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'燃气报警器',label:'燃气报警器'},
  {id:1013,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'燃气报警器',label:'燃气报警器'},
  {id:1014,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'燃气报警器',label:'燃气报警器'},
  {id:1015,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'水浸探测器',label:'水浸探测器'},
  {id:1016,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'水浸探测器',label:'水浸探测器'},
  {id:1017,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'水浸探测器',label:'水浸探测器'},
  {id:1018,img:'https://jmy-pic.baidu.com/0/pic/-1853411990_-1988723900_1346818859.png',tatle:'水浸探测器',label:'水浸探测器'},
])

const categories = [
  '智能家居',
  '火灾报警器',
  '红外探测器',
  '燃气报警器',
  '一氧化碳报警器',
  '水浸探测器'
]

const filteredList = computed(() => {
  if (activeName.value === '全部') return deviceList.value
  return deviceList.value.filter(item => item.label === activeName.value)
})

const pagedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredList.value.slice(start, start + pageSize)
})

watch(activeName, () => {
  currentPage.value = 1
})

const handleClick = () => {
  // 可根据需要处理tab切换
}
const handlePageChange = (page) => {
  currentPage.value = page
}
</script>

<style scoped>
.device-title {
  font-size: 3rem;
  color: black;
  font-weight: 500;
  margin: 2.5rem 0 1.5rem 0;
  text-align: center;
  letter-spacing: 2px;
}
.device-tabs {
  width: 60vw;
  margin: 0 auto;
  background: transparent;
}
.device-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2.2rem 2.2rem;
  padding: 2.5rem 1vw 1rem 1vw;
  margin: 0;
  list-style: none;
  min-height: 540px;
  justify-items: center;
}
.device-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(44,90,255,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2.2rem 1.2rem 1.2rem 1.2rem;
  width: 100%;
  max-width: 260px;
  min-height: 350px;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
}
.device-card:hover {
  box-shadow: 0 8px 32px rgba(44,90,255,0.13);
  transform: translateY(-6px) scale(1.04);
}
.device-card img {
  width: 100%;
  height: 80%;
  object-fit: contain;
  margin-bottom: 1.2rem;
  border-radius: 12px;
  background: #f8faff;
}
.device-card p {
  font-size: 1.6rem;
  color: black;
  font-weight: 400;
  text-align: center;
  margin: 0;
  line-height: 1.5;
}
.device-pagination {
  margin: 2.5rem auto 100px auto;
  text-align: center;
}
@media (max-width: 1200px) {
  .device-list {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 1.2rem 1.2rem;
    min-height: 0;
  }
  .device-card { max-width: 98vw; }
}
@media (max-width: 700px) {
  .device-list {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    gap: 1rem 0;
    padding: 1rem 0.2vw;
  }
  .device-card { padding: 1.2rem 0.5rem; }
  .device-card img { width: 70px; height: 70px; }
}
</style>
