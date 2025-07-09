<template>
  <div class="home6">
    <!-- 标题区 -->
    <div class="header-section">
      <h3>智能硬件支持</h3>
      <p>
        汇养通智能物联IoT场景，汇集多种先进技术，对接海量智能硬件设备，深化场景，24小时监测老人健康状况，充分预防老人摔倒无人知、生命体征数据异常等状况，遇突发状况实时定位报警，汇养通电脑端、手机APP端、监管大屏端均可收到报警信息，可查看报警位置及现场实时画面。系统对异常状况精准判断、及时报警，有章可循、有据可查、有人监督，充分预防纠纷，规避机构运营风险。
      </p>
    </div>

    <!-- 内容区 -->
    <div class="content-wrapper">
      <!-- 左侧列表 -->
      <div class="hardware-list-container">
        <ul class="hardware-list">
          <li
            v-for="(item, idx) in home6List"
            :key="item.id"
            :class="{active: idx === activeIndex}"
            @click="activeIndex = idx"
            @mouseenter="activeIndex = idx"
          >
            <img class="icon" :src="item.icon" :alt="item.tatle" />
            <span>{{ item.tatle }}</span>
          </li>
        </ul>
      </div>

      <!-- 右侧图片 -->
      <div class="image-container">
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
    <el-button @click="toDevice" class="btn" type="primary">查看更多设备信息</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const toDevice = ()=>{
  router.push('/device')
}
const home6List = ref([
  {id:1001,icon:'https://www.huiyangtong.com/images/sos.webp',img:'https://www.huiyangtong.com/images/hardware-1.webp',tatle:'SOS报警'},
  {id:1002,icon:'https://www.huiyangtong.com/images/radar.webp',img:'https://www.huiyangtong.com/images/hardware-2.webp',tatle:'雷达监测'},
  {id:1003,icon:'https://www.huiyangtong.com/images/moon.webp',img:'https://www.huiyangtong.com/images/hardware-3.webp',tatle:'睡眠监测'},
  {id:1004,icon:'https://www.huiyangtong.com/images/accident.webp',img:'https://www.huiyangtong.com/images/hardware-4.webp',tatle:'跌倒报警'},
  {id:1005,icon:'https://www.huiyangtong.com/images/bed.webp',img:'https://www.huiyangtong.com/images/hardware-5.webp',tatle:'离床报警'},
  {id:1006,icon:'https://www.huiyangtong.com/images/wristband.webp',img:'https://www.huiyangtong.com/images/hardware-6.webp',tatle:'手环报警'},
  {id:1007,icon:'https://www.huiyangtong.com/images/post-office.webp',img:'https://www.huiyangtong.com/images/hardware-7.webp',tatle:'健康随访箱'},
  {id:1008,icon:'https://www.huiyangtong.com/images/clock.webp',img:'https://www.huiyangtong.com/images/hardware-8.webp',tatle:'进入时间'},
  {id:1009,icon:'https://www.huiyangtong.com/images/man-and-opened-exit-door.webp',img:'https://www.huiyangtong.com/images/hardware-9.webp',tatle:'出入次数'},
  {id:1010,icon:'https://www.huiyangtong.com/images/pill.webp',img:'https://www.huiyangtong.com/images/hardware-10.webp',tatle:'用药提醒'},
])
const activeIndex = ref(0)
</script>

<style scoped>
.home6 {
  width: 100vw;
  min-height: 100vh;
  background: #f8faff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2vw;
  padding-top: 6.25rem; /* 用rem，防止大屏顶部过大 */
}

.header-section {
  text-align: center;
  margin-bottom: 2.5vw;
  max-width: 60vw;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1vw;
  flex-shrink: 0;
  z-index: 1;
  position: relative;
  background: transparent;
}

.header-section h3 {
  font-size: 1.8vw;
  margin-bottom: 1.25vw;
  color: #222;
  font-weight: bold;
  letter-spacing: 0.08em;
}

.header-section p {
  font-size: 1.1vw;
  color: #666;
  line-height: 1.7;
  margin: 0 auto;
  max-width: 70vw;
  padding: 1vw 2vw;
  position: relative;
  z-index: 1;
}

.content-wrapper {
  display: flex;
  gap: 3vw;
  max-width: 70vw;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  align-items: flex-start;
  position: relative;
  z-index: 2;
}

.hardware-list-container {
  width: 18vw;
  min-width: 12vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.hardware-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8vw;
  /* 不要flex:1，避免被压缩 */
  max-height: 60vh;
  overflow-y: auto;
}

.hardware-list li {
  display: flex;
  align-items: center;
  padding: 1vw 1.2vw;
  background: #fff;
  border-radius: 0.8vw;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  font-size: 1.05vw;
  color: #333;
  margin-bottom: 0;
  border-left: 0.35vw solid transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.hardware-list li:hover,
.hardware-list li.active {
  background: #e8f0ff;
  color: #2C5AFF;
  border-left: 0.35vw solid #2C5AFF;
}

.hardware-list li .icon {
  width: 1.5vw;
  height: 1.5vw;
  margin-right: 1vw;
  object-fit: contain;
  flex-shrink: 0;
}

.hardware-list li span {
  font-size: 1.05vw;
  font-weight: 500;
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.image-container {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 1.2vw;
  padding: 2vw;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}

.hardware-img {
  max-width: 100%;
  max-height: 30vw;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 1vw;
  transition: all 0.3s;
  background: #f8faff;
  display: block;
}

.btn {
  width: 18vw;
  margin: 3vw auto 2vw auto;
  height: 3vw;
  font-size: 1.1vw;
  border-radius: 0.7vw;
  display: block;
  flex-shrink: 0;
}
</style>
