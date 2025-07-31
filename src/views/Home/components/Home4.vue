<template>
  <div class="home4">
    <h2>主营业务</h2>
    <p>集团以"老有所养、依、教、学、为、乐"为核心，构建覆盖长者全生命周期的错爱准话服务模块，提供全维度支持</p>
    <div class="home4-container">
      <div class="content-wrapper">
        <div
          class="home4-left"
          :style="{ transform: `translateX(${leftOffset}px)` }"
          @mouseenter="stopAutoSwitch"
          @mouseleave="startAutoSwitch"
        >
          <ul class="mode-list">
            <li
              v-for="(item, idx) in home4List"
              :key="item.id"
              :class="{active: idx === activeIndex}"
              @mouseenter="handleHover(idx)"
              @click="activeIndex = idx"
              :style="{ opacity: liOpacity[idx] }"
            >
              {{ item.tatle }}
            </li>
          </ul>
        </div>
        <div
          class="home4-right"
          :style="{ transform: `translateX(${rightOffset}px)` }"
          @mouseenter="stopAutoSwitch"
          @mouseleave="startAutoSwitch"
        >
          <transition name="fade" mode="out-in">
            <div class="img-box" :key="activeIndex">
              <div>
                <h3>{{ home4List[activeIndex].subheading1 }}</h3>
                <p>{{ home4List[activeIndex].text1 }}</p>
                <h3>{{ home4List[activeIndex].subheading2 }}</h3>
                <p>{{ home4List[activeIndex].text2 }}</p>
              </div>
              <img :src="home4List[activeIndex].url" :alt="home4List[activeIndex].tatle" />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import home4Img1 from '@/assets/Images/home4Img1.png'
import home4Img2 from '@/assets/Images/home4Img2.png'
import home4Img3 from '@/assets/Images/home4Img3.png'
import home4Img4 from '@/assets/Images/home4Img4.png'
import home4Img5 from '@/assets/Images/home4Img5.png'

const props = defineProps({ active: Boolean })
// const router = useRouter()
// const toSystem = () => {
//   router.push('/system')
// }

const home4List = ref([
  {id:1001,
    url:home4Img1,
    tatle:'实体项目',
    subheading1:'社区嵌入式养老',
    text1:'打造15分钟养老服务圈，涵盖日间照料、老年餐厅、文化娱乐、心理慰籍、健康管理等服务',
    subheading2:'机构养老',
    text2:'聚焦失能失智照护、康复护理、临终关怀等服务',
  },
  {id:1002,
    url:home4Img2,
    tatle:'政企协同',
    subheading1:'居家养老上门服务',
    text1:'输出标准化体系，通过智慧化管理提升效率，专业适老化改造筑牢居家安全网',
    subheading2:'民生保障服务',
    text2:'承接政府民生工程，为低保等群体提供兜底服务',
  },{id:1003,
    url:home4Img3,
    tatle:'托管加盟',
    subheading1:'托管加盟',
    text1:'全流程托管养老院、社区项目，输出成熟运营经验，提供标准化加盟，实现快速复制落地',
    subheading2:'公办养老院提质改造',
    text2:'聚焦失能失智照护、康复护理、临终关怀等服务',
  },{id:1004,
    url:home4Img4,
    tatle:'销售平台',
    subheading1:'养老产品供应链',
    text1:'集采等适老化产品，提供康复辅具租赁，推出康养套餐、健康管理包',
    subheading2:'便民团购',
    text2:'涵盖生活用品、文化活动用品等，满足老年人日常需求',
  },
  {id:1005,
    url:home4Img5,
    tatle:'生态拓展',
    subheading1:'教育培训',
    text1:'开展护理员认证，运营老年大学，提供适老化培训课程',
    subheading2:'智慧研发',
    text2:'研发智能硬件，输出智慧养老管理系统',
  },
])

const activeIndex = ref(0)
let timer = null
const isHovering = ref(false)

// 动画控制变量
const leftOffset = ref(-300)
const rightOffset = ref(300)
const liOpacity = ref(home4List.value.map(() => 0))

const handleHover = (idx) => {
  if (idx !== activeIndex.value) {
    activeIndex.value = idx
  }
}

const startAutoSwitch = () => {
  if (isHovering.value) return

  stopAutoSwitch()
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % home4List.value.length
  }, 5000) // 调整为5秒切换一次
}

const stopAutoSwitch = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

// 动画函数
function startAnimations() {
  // 左侧整体滑入动画
  const duration = 800 // 延长动画时间
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
    }, index * 150 + 300)
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
    leftOffset.value = -1000
    rightOffset.value = 1000
    liOpacity.value = home4List.value.map(() => 0)

    setTimeout(() => {
      startAnimations()
    }, 100)
  }
})

// 监听activeIndex变化
watch(activeIndex, () => {
  // 可以在这里添加切换时的额外动画效果
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
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-image: url('@/assets/Images/home4bg.png');
  background-size: cover;
  background-position: center;
  padding: 6vw 12vw;
  box-sizing: border-box;
}

.home4-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 3.125rem;
  width: 100%;
}

.content-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

/* 第一行：标题 */
h2 {
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  font-size: 2.2vw;
  color: #222;
  margin-top: 6.25rem;
  margin-bottom: 0vw;
  letter-spacing: 0.08em;
  text-align: left;
  width: 100%;
}

/* 第二行：描述 */
p {
  color: #666;
  font-size: 1.1vw;
  margin-top: 2.5rem;
  margin-bottom: 3.75rem;
  padding: 1vw 0;
  line-height: 1.7;
  text-align: left;
}

.home4-left {
  flex: 0 0 35%;
  max-width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.home4-right {
  flex: 0 0 55%;
  max-width: 55%;
  align-self: center;
}

.mode-list {
  list-style: none;
  padding: 0;
  width: 100%;
}

.home4-left, .home4-right {
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.mode-list li {
    position: relative;
  overflow: hidden;
  padding: 1vw 1.5vw;
  margin-bottom: 1vw;
  background: #fff;
  border-radius: 0.2vw;
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
  background: rgba(239, 32, 58, 0.1);
  color: #ef203a;
  border-left: 0.35vw solid #ef203a;
}

.img-box {
  position: relative;
  width: 100%;
  max-width: 90vw;
  border-radius: 0.4vw;
  overflow: visible;
  box-shadow: 0 0.25vw 2vw rgba(44,90,255,0.10);
  background-image: url('@/assets/Images/shanImg.png');
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: 10% 100%;
  display: flex;
  align-items: flex-start;
}


.img-box > div {
  padding: 3vw 0 0 3vw;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  padding-right: 2vw;
  z-index: 2;
}


.img-box img {
  width: 50%;
  height: 20vw;
  max-height: 60vh;
  object-fit: cover;
  position: relative;
  z-index: 1;
  margin-left: -10%;
}

.img-box h3 {
  font-size: 1.4vw;
  color: #ef203a;
}

.img-box p {
  margin: 0;
  font-size: 0.9vw;
  color: #666;
  line-height: 1.5;
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
