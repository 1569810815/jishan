<template>
  <div class="home7">
    <h3>汇养通全新的客户成功模式：以客户为中心，持续创造价值</h3>
    <p>以客户成功服务、客户支持服务、专业实施服务为核心，助力客户养老业务的成功</p>
    <div class="model">
      <ul>
        <li v-for="(item, index) in comparisonItems" :key="index">
          <div class="lift" :style="{ transform: `translateX(${leftOffsets[index]}px)` }">
            <h3 v-if="index === 0">京雅养老</h3>
            <p v-else>{{ item.left }}</p>
          </div>
          <div class="right" :style="{ transform: `translateX(${rightOffsets[index]}px)` }">
            <h3 v-if="index === 0">其他养老</h3>
            <p v-else>{{ item.right }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({ active: Boolean })

const comparisonItems = ref([
  { left: '京雅养老', right: '其他养老' },
  { left: '[主动]服务', right: '[被动]服务' },
  { left: '客户需求驱动，提前发现问题并解决', right: '客户发现问题反馈后，排期进行解决' },
  { left: '问题并解决顾问服务', right: '阶段性按需服务' },
  { left: '即时需求响应', right: '需求响应滞后' },
  { left: '行业资源足，不定期行业培训，邀请专家开讲', right: '跨行业开发，行业资源匮乏' },
  { left: '持续升级迭代功能适配度佳', right: '系统迭代缓慢功能与新需求不对应' },
  { left: '服务涵盖客户全周期，涉及多团队合作', right: '服务周期短，只能解决特定问题' }
])

// 动画控制变量
const leftOffsets = ref(comparisonItems.value.map(() => -100))
const rightOffsets = ref(comparisonItems.value.map(() => 100))

// 动画函数
function startAnimations() {
  const duration = 2000
  const startTime = Date.now()

  function animateItems() {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)

    // 使用缓动函数
    const easedProgress = easeOutCubic(progress)

    // 更新所有项的位置
    comparisonItems.value.forEach((_, index) => {
      leftOffsets.value[index] = -100 * (1 - easedProgress)
      rightOffsets.value[index] = 100 * (1 - easedProgress)
    })

    if (progress < 1) {
      requestAnimationFrame(animateItems)
    }
  }

  animateItems()
}

// 缓动函数
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

// 监听active状态
watch(() => props.active, (val) => {
  if (val) {
    // 重置状态
    leftOffsets.value = comparisonItems.value.map(() => -100)
    rightOffsets.value = comparisonItems.value.map(() => 100)

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
.home7 {
  width: 100vw;
  min-height: 100vh;
  background: #f8faff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 6.25rem;
}

.home7 h3 {
  font-size: 1.8vw;
  color: #222;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1vw;
  letter-spacing: 0.12em;
  text-align: center;
  line-height: 1.1;
  word-break: break-all;
}

.home7 > p {
  font-size: 1vw;
  color: #666;
  margin-bottom: 1.6vw;
  text-align: center;
  line-height: 1.7;
  max-width: 44vw;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.7vw;
  padding: 1vw 2vw;
  word-break: break-all;
}

.model {
  width: 80vw;
  max-width: 1600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1.4vw;
  box-shadow: 0 8px 40px rgba(44,90,255,0.13);
  padding: 2vw 2vw;
  box-sizing: border-box;
}

.model ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.model li {
  display: flex;
  align-items: stretch;
  margin-bottom: .8vw;
  border-radius: 1vw;
  background: #f4f8ff;
  box-shadow: 0 2px 12px rgba(44,90,255,0.06);
  font-size: .8vw;
  transition: box-shadow 0.3s, transform 0.3s;
}

.model li:last-child {
  margin-bottom: 0;
}

.lift, .right {
  flex: 1;
  padding: 1vw 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2.5vw;
  font-size: 1vw;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
}

.lift {
  border-right: 0.3vw solid #2C5AFF;
  background: linear-gradient(90deg, #e8f0ff 80%, #fff 100%);
  color: #1747b0;
  position: relative;
  z-index: 1;
  box-shadow: 2px 0 12px -8px #2C5AFF33;
}

.model li:hover .lift {
  background: linear-gradient(90deg, #d0e2ff 85%, #fff 100%);
  color: #2C5AFF;
}

.right {
  background: #fff;
  color: #666;
}

.lift h3, .right h3 {
  font-size: 1.1vw;
  font-weight: bold;
  margin: 0;
}

.lift p, .right p {
  margin: 0;
  font-size: 1vw;
}
</style>
