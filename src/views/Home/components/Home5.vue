<template>
  <div class="home5">
    <div class="home5-left" :style="{ transform: `translateY(${leftOffset}px)` }">
      <h3>平台优势</h3>
      <p>从营销到服务 从管理到运营 全面助力养老机构信息化建设</p>
      <ul class="advantage-list">
        <li
          v-for="(item, idx) in home4List"
          :key="item.id"
          :class="{active: idx === activeIndex}"
          @click="activeIndex = idx"
          :style="{ opacity: liOpacity[idx] }"
        >
          <span class="dot"></span>
          <span>{{ item.tatle }}</span>
        </li>
      </ul>
    </div>
    <div class="home5-right" :style="{ transform: `translateY(${rightOffset}px)` }">
      <transition name="fade-slide" mode="out-in">
        <div class="advantage-card" :key="activeIndex">
          <img class="advantage-img" :src="home4List[activeIndex].url" :alt="home4List[activeIndex].tatle" />
          <div class="advantage-content">
            <h4 class="advantage-title">{{ home4List[activeIndex].tatle }}</h4>
            <div class="advantage-subheading">{{ home4List[activeIndex].subheading }}</div>
            <ul class="advantage-desc">
              <li>{{ home4List[activeIndex].text1 }}</li>
              <li>{{ home4List[activeIndex].text2 }}</li>
              <li>{{ home4List[activeIndex].text3 }}</li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
const props = defineProps({ active: Boolean })

const home4List = ref([
  {id:1001,
    url:'https://www.huiyangtong.com/images/platform-1.webp',
    tatle:'营销',
    subheading:'全链路拓客支撑 提高入住率',
    text1:'多渠道获客:覆盖多种营销场景，全渠道流量引流',
    text2:'智能化跟进:行为轨迹跟踪，客户画像，线索转化',
    text3:'促成交变现:精准判断客户意向，随时洞察客户需求'
  },
  {id:1002,
    url:'https://www.huiyangtong.com/images/platform-2.webp',
    tatle:'运营',
    subheading:'全维度数据分析 降低运营成本',
    text1:'可视化看板:实时掌握最新数据',
    text2:'场景化应用:全流程数字化，指标智能预警',
    text3:'全流程追踪:多源数据整合，全景画像洞察'
  },
  {id:1003,
    url:'https://www.huiyangtong.com/images/platform-3.webp',
    tatle:'服务',
    subheading:'全周期上线指导 员工上手快',
    text1:'拟物化设计:辨识度高，学习成本低，即学即用上手快',
    text2:'智能化护理:一扫二点三确认，快速完成护理日志',
    text3:'全流程记录:全流程记录，未服务超时提醒，风险预警'
  },
  {id:1004,
    url:'https://www.huiyangtong.com/images/platform-4.webp',
    tatle:'安心',
    subheading:'家属沟通无壁垒 提高续费率',
    text1:'数字化账单:月度账单一键可查，支持家属在线缴费',
    text2:'可视化护理:每日护理项目、护理情况均有记录',
    text3:'系统化数据:心率、呼吸、血压等数据系统完整'
  },
])

const activeIndex = ref(0)

// 动画控制变量
const leftOffset = ref(-100)  // 左侧初始位置（从顶部滑入）
const rightOffset = ref(100)  // 右侧初始位置（从底部滑入）
const liOpacity = ref(home4List.value.map(() => 0)) // 列表项透明度

// 动画函数
function startAnimations() {
  const duration = 1000
  const startTime = Date.now()

  function animateLeft() {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)

    leftOffset.value = -1000 * (1 - easeOutCubic(progress))

    if (progress < 1) {
      requestAnimationFrame(animateLeft)
    }
  }

  function animateRight() {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)

    rightOffset.value = 1000 * (1 - easeOutCubic(progress))

    if (progress < 1) {
      requestAnimationFrame(animateRight)
    }
  }

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


watch(() => props.active, (val) => {
  if (val) {
    // 重置状态
    leftOffset.value = -1000
    rightOffset.value = 1000
    liOpacity.value = home4List.value.map(() => 0)


    setTimeout(() => {
      startAnimations()
    }, 100)
  }
})

onMounted(() => {
  if (props.active) {
    startAnimations()
  }
})
</script>


<style scoped>
.home5 {
  width: 100vw;
  min-height: 100vh;
  background: #f8faff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 6.25vw;
  gap: 4vw;
}
.home5-left, .home5-right {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  min-height: 0;
  flex: 1 1 0;
  max-width: 40vw;
  width: 100%;
  overflow: visible;
}
.home5-left {
  align-items: flex-start;
  padding-left: 4vw;
}
.home5-left h3 {
  font-size: 2.2vw;
  color: #222;
  font-weight: bold;
  margin-bottom: 1.2vw;
  letter-spacing: 0.12em;
  text-align: left;
}
.home5-left p {
  font-size: 1.1vw;
  color: #666;
  margin-bottom: 2vw;
  /* background: rgba(255,255,255,0.7); */
  border-radius: 0.7vw;
  padding: 1vw 2vw;
  /* box-shadow: 0 0.13vw 0.8vw rgba(44,90,255,0.05); */
  max-width: 28vw;
  line-height: 1.7;
  text-align: left;
}
.advantage-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2vw 0;
  width: 100%;
}
.advantage-list li {
  display: flex;
  align-items: center;
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
  position: relative;
  opacity: 0;
}
.advantage-list li .dot {
  width: 0.8vw;
  height: 0.8vw;
  border-radius: 50%;
  background: #dbe7ff;
  margin-right: 1vw;
  transition: background 0.2s;
}
.advantage-list li.active,
.advantage-list li:hover {
  background: #e8f0ff;
  color: #2C5AFF;
  border-left: 0.35vw solid #2C5AFF;
}
.advantage-list li.active .dot,
.advantage-list li:hover .dot {
  background: #2C5AFF;
}
.advantage-list li[style*="opacity: 1"] {
  opacity: 1;
}
.home5-right {
  align-items: center;
  justify-content: center;
  min-width: 18vw;
  padding-right: 2vw;
}
.advantage-card {
  background: #fff;
  border-radius: 1.5vw;
  box-shadow: 0 0.25vw 2vw rgba(44,90,255,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw 1.5vw 1.5vw 1.5vw;
  min-width: 22vw;
  max-width: 38vw;
  width: 100%;
  box-sizing: border-box;
  min-height: unset;
  height: auto;
}
.advantage-img {
  border-radius: 1.2vw;
  width: 100%;
  max-height: 16vw;
  object-fit: contain;
  margin-bottom: 1.2vw;
  background: #f8faff;
}
.advantage-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.advantage-title {
  font-size: 2vw;
  color: #222;
  font-weight: 600;
  margin-bottom: 0.7vw;
  text-align: center;
}
.advantage-subheading {
  font-size: 1.1vw;
  color: #666;
  margin-bottom: 1.2vw;
  text-align: center;
}
.advantage-desc {
  list-style: disc inside;
  color: #333;
  font-size: 1vw;
  padding: 0;
  margin: 0;
  text-align: left;
}
.advantage-desc li {
  margin-bottom: 0.7vw;
}
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(.23,1.02,.64,.97);
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateX(2vw) scale(0.96);
}
.fade-slide-enter-to, .fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}
</style>
