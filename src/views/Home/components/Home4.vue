<template>
  <div class="home4">
    <div class="home4-left" :style="{ transform: `translateX(${leftOffset}px)` }">
      <h2>业务模式</h2>
      <p>立足行业核心需求，垂直打造出标准、易用、便捷的智慧康养综合管理平台</p>
      <ul class="mode-list">
        <li
          v-for="(item, idx) in home4List"
          :key="item.id"
          :class="{active: idx === activeIndex}"
          @click="activeIndex = idx"
          :style="{ opacity: liOpacity[idx] }"
        >
          {{ item.tatle }}
        </li>
      </ul>
      <el-button @click="toSystem" type="primary">查看详情</el-button>
    </div>
    <div class="home4-right" :style="{ transform: `translateX(${rightOffset}px)` }">
      <transition name="fade" mode="out-in">
        <div class="img-box" :key="activeIndex">
          <div class="img-title">{{ home4List[activeIndex].tatle }}</div>
          <img :src="home4List[activeIndex].url" :alt="home4List[activeIndex].tatle" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRouter } from 'vue-router';

const props = defineProps({ active: Boolean })
const router = useRouter()
const toSystem = () => {
  router.push('/system')
}

const home4List = ref([
  {id:1001,url:'https://www.huiyangtong.com/images/business-1.webp',tatle:'养老机构智慧管理系统'},
  {id:1002,url:'https://www.huiyangtong.com/images/business-2.webp',tatle:'养老公寓智慧管理系统'},
  {id:1003,url:'https://www.huiyangtong.com/images/business-3.webp',tatle:'社区居家养老服务系统'},
  {id:1004,url:'https://www.huiyangtong.com/images/business-4.webp',tatle:'旅居养老服务系统'},
])

const activeIndex = ref(0)
let timer = null

// 动画控制变量
const leftOffset = ref(-300)  // 左侧初始位置（左侧滑入）
const rightOffset = ref(300)  // 右侧初始位置（右侧滑入）
const liOpacity = ref(home4List.value.map(() => 0)) // 列表项透明度

const startAutoSwitch = () => {
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % home4List.value.length
  }, 3000)
}

const stopAutoSwitch = () => {
  if (timer) clearInterval(timer)
}

// 动画函数
function startAnimations() {
  // 左侧整体滑入动画
  const duration = 100 // 动画持续时间
  const startTime = Date.now()

  function animateLeft() {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)

    leftOffset.value = -1000 * (1 - easeOutCubic(progress))

    if (progress < 1) {
      requestAnimationFrame(animateLeft)
    }
  }

  // 右侧整体滑入动画
  function animateRight() {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)

    rightOffset.value = 1000 * (1 - easeOutCubic(progress))

    if (progress < 1) {
      requestAnimationFrame(animateRight)
    }
  }

  // 列表项渐显动画
  home4List.value.forEach((_, index) => {
    setTimeout(() => {
      liOpacity.value[index] = 1
    }, index * 150 + 300) // 延迟300ms后开始，每个元素间隔150ms
  })

  animateLeft()
  animateRight()
}

// 缓动函数
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

// 监听active状态
watch(() => props.active, (val) => {
  if (val) {
    // 重置状态
    leftOffset.value = -1000
    rightOffset.value = 1000
    liOpacity.value = home4List.value.map(() => 0)

    // 延迟100ms确保DOM更新完成
    setTimeout(() => {
      startAnimations()
    }, 100)
  }
})

onMounted(() => {
  startAutoSwitch()
  if (props.active) {
    startAnimations()
  }
})

onBeforeUnmount(stopAutoSwitch)
</script>

<style scoped>
.home4 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-image: url('https://img95.699pic.com/photo/30782/3100.jpg_wh860.jpg');
  background-size: cover;
  background-position: center;
  padding-top: 6.25vw;
  gap: 4vw;
  box-sizing: border-box;
}
.home4-left, .home4-right {
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
}
.home4-left {
  flex: 1.2;
  max-width: 36vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 12vw;
}
.home4-left h2 {
  font-size: 2.2vw;
  color: #222;
  margin-bottom: 1vw;
  font-weight: bold;
  letter-spacing: 0.08em;
}
.home4-left p {
  color: #666;
  font-size: 1.1vw;
  margin-bottom: 2vw;
  border-radius: 0.7vw;
  padding: 1vw 2vw;
  max-width: 28vw;
  line-height: 1.7;
}
.mode-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2vw 0;
  width: 100%;
}
.mode-list li {
  padding: 1vw 1.5vw;
  margin-bottom: 1vw;
  background: #fff;
  border-radius: 0.8vw;
  cursor: pointer;
  color: #333;
  font-size: 1.1vw;
  transition: background 0.2s, color 0.2s, opacity 0.5s;
  border-left: 0.35vw solid transparent;
  font-weight: 500;
  opacity: 0;
}
.mode-list li.active,
.mode-list li:hover {
  background: #e8f0ff;
  color: #2C5AFF;
  border-left: 0.35vw solid #2C5AFF;
}
.home4-left button {
  width: 18vw;
  margin: 0 auto;
  height: 3vw;
  font-size: 1.1vw;
  border-radius: 0.7vw;
  display: block;
  flex-shrink: 0;
}

.home4-left button:hover {
  background: #1747b0;
}
.home4-right {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18vw;
}
.img-box {
  position: relative;
  width: 38vw;
  max-width: 90vw;
  border-radius: 1.5vw;
  overflow: hidden;
  box-shadow: 0 0.25vw 2vw rgba(44,90,255,0.10);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-box img {
  width: 100%;
  height: 22vw;
  max-height: 60vh;
  object-fit: cover;
  display: block;
}
.img-title {
  width: 100%;
  text-align: center;
  font-size: 1.3vw;
  color: #222;
  padding: 1vw 0;
  background: #f4f8ff;
  font-weight: 400;
  letter-spacing: 0.06em;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s cubic-bezier(.23,1.02,.64,.97);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateX(2vw) scale(0.96);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}
</style>
