<template>
  <div class="home6">

     <div class="banxin">

      <h2>特色功能支持</h2>
      <p>
        智能物联智慧养老通过物联网、AI和大数据技术的深度融合，构建全天候、多维度的健康监护体系。系统整合毫米波雷达、智能传感设备和AI行为识别算法，实时监测老人心率、血压、血氧等生命体征，精准识别跌倒风险，实现7×24小时无感守护。
      </p>



    <div class="content-wrapper">
      <!-- 左侧图片 -->
      <div class="phone-container">
        <img class="phone-bg" :src="phonebg" alt="手机背景" />
        <div class="hardware-image-container">
          <transition name="fade-slide" mode="out-in">
            <img
              v-if="home6List[activeIndex]"
              class="hardware-img"
              :key="home6List[activeIndex].img"
              :src="home6List[activeIndex].img"
              :alt="home6List[activeIndex].tatle"
            />
          </transition>
        </div>
      </div>

      <!-- 右侧列表 -->
      <div class="hardware-list-container">
        <ul class="hardware-list">
          <li
            v-for="(item, idx) in home6List"
            :key="item.id"
            :class="{active: idx === activeIndex}"
            @click="activeIndex = idx"
            @mouseenter="activeIndex = idx"
          >
            <span>{{ item.tatle }}</span>
          </li>
        </ul>
        <el-button @click="toDevice" class="btn" type="primary">查看更多设备信息</el-button>
      </div>
    </div>
     </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import phonebg from '@/assets/Images/home6phonebg.png'
import home6Img1 from '@/assets/Images/home6Img1.png'
import home6Img2 from '@/assets/Images/home6Img2.png'
import home6Img3 from '@/assets/Images/home6Img3.png'
import home6Img4 from '@/assets/Images/home6Img4.png'
import home6Img5 from '@/assets/Images/home6Img5.png'
import home6Img6 from '@/assets/Images/home6Img6.png'


const router = useRouter()
const toDevice = ()=>{
  router.push('/device')
}
const home6List = ref([
  {id:1001,img:home6Img1,tatle:'睡眠监测-报告分析'},
  {id:1002,img:home6Img2,tatle:'长者日常'},
  {id:1003,img:home6Img3,tatle:'实时状态监控'},
  {id:1004,img:home6Img4,tatle:'应急事件处理'},
  {id:1005,img:home6Img5,tatle:'健康数据采集'},
  {id:1006,img:home6Img6,tatle:'物资申领'},
])
const activeIndex = ref(0)
</script>

<style scoped>
.banxin {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;

}
.home6 {
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/Images/home6bg.png');
  background-size: cover;
  background-position: center;
   width: 100vw;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 6.25vw;

}
h2 {
  font-size: 2.2vw;
  color: #222;
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  margin-top: 2vw;
  margin-bottom: 1.2vw;
  letter-spacing: 0.12em;
  text-align: center;
  text-shadow: 0 0.13em 0.33em rgba(44,90,255,0.08);
  line-height: 1.1;
  word-break: break-all;
}

p {
  max-width: 80%;
  font-size: 1.1vw;
  color: #666;
  margin-top: 2.5rem;
  text-align: left;
  line-height: 1.7;
  margin-left: auto;
  margin-right: auto;
  padding: 1vw 0;
  word-break: break-all;
}
.content-wrapper {
  display: flex;
  justify-content:space-around;
  gap: 3vw;
  max-width: 70vw;
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  align-items:center;
  position: relative;
  z-index: 2;
}

/* 左侧手机图片容器 */
.phone-container {
  flex: 0 0 40%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 35vw;
}

.phone-bg {
  width: 100%;
  max-width: 30vw;
  height: auto;
  object-fit: contain;
  position: relative;
  z-index: 2;
}

.hardware-image-container {
  position: absolute;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
  margin-top: 1rem;
}

.hardware-img {
  width: 100%;
  height: 100%;
  max-width: 30vw;
  object-fit: contain;
  transition: all 0.3s;
}

/* 右侧列表容器 */
.hardware-list-container {
  margin-bottom: 100px;
  width: 18vw;
  min-width: 12vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hardware-list {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 2vw 0;
  display: flex;
  flex-direction: column;
  gap: 0.4vw;
  max-height: 40vh;
  overflow-y: auto;

  border-radius: .2vw;
}

.hardware-list li {
  display: flex;
  align-items: center;
  padding: 1vw 2vw;
  border-radius: 0vw;
  cursor: pointer;
  transition: all 0.3s;
  background-color: #fff;
  font-size: 0.9vw;
  color: #333;
  margin-bottom: 1.25rem;
  border-left: 0.35vw solid transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.5vw;
}

.hardware-list li:hover,
.hardware-list li.active {
  background: rgba(239, 32, 58, 0.1);
  color: #ef203a;
  border-left: 0.35vw solid #ef203a;
}


.hardware-list li span {
  font-size: .8vw;
  font-weight: 500;
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.el-button {
  background-color: #ef203a;
  width: 100%;
  margin: 0 auto;
  font-size: 1vw;
  border-radius: 0.2vw;
  display: block;
  flex-shrink: 0;
}

/* 过渡动画 */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(.23,1.02,.64,.97);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(2vw) scale(0.96);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}
</style>
