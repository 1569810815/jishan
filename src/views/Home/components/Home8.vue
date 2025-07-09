<template>
  <div class="home8">
    <div class="home8-left" :style="{ opacity: contentOpacity }">
      <h3>客户成功</h3>
      <p>汇养通智慧康养综合管理平台已服务超过1600余家养老机构</p>
      <p>全新的客户成功服务模式</p>
      <h3 class="sub-title">付费 = 服务刚开始！</h3>
      <p>以客户成功服务、客户支持服务、专业实施服务为核心，助力客户养老业务的成功</p>
      <el-button class="button" type="primary" plain @click="toCase">更多客户案例</el-button>
    </div>
    <div class="home8-right" :style="{ opacity: imageOpacity }">
      <img src="https://www.huiyangtong.com/images/partner-1.webp" alt="客户案例">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({ active: Boolean })
const router = useRouter()
const toCase = () => {
  router.push('/case')
}

// 动画控制变量
const contentOpacity = ref(0) // 左侧内容透明度
const imageOpacity = ref(0)   // 右侧图片透明度

// 动画函数
function startAnimations() {
  const duration = 2000 // 动画持续时间

  // 左侧内容渐显
  const startTime = Date.now()
  function animateContent() {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    contentOpacity.value = easeOutCubic(progress)
    if (progress < 1) {
      requestAnimationFrame(animateContent)
    }
  }

  // 右侧图片延迟渐显
  setTimeout(() => {
    const startTime = Date.now()
    function animateImage() {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      imageOpacity.value = easeOutCubic(progress)
      if (progress < 1) {
        requestAnimationFrame(animateImage)
      }
    }
    animateImage()
  }, 300) // 延迟300ms开始图片动画

  animateContent()
}

// 缓动函数
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

// 监听active状态
watch(() => props.active, (val) => {
  if (val) {
    // 重置状态
    contentOpacity.value = 0
    imageOpacity.value = 0

    // 延迟100ms确保DOM更新完成
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
.home8-left, .home8-right {
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.home8-right img {
  transition: transform 0.6s ease;
}
.home8 {
  width: 100vw;
  height: 100vh;
  background: #f8faff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  box-sizing: border-box;
  padding: 0;
}
.home8-left {
  flex: 1.1;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 6vw;
}
.home8-left h3 {
  font-size: 5rem;
  color: #2C5AFF;
  font-weight: bold;
  margin-bottom: 1.2rem;
  letter-spacing: 2px;
}
.home8-left .sub-title {
  color: #ff7a00;
  font-size: 2.2rem;
  margin: 2rem 0 1.2rem 0;
  font-weight: 700;
  letter-spacing: 1px;
}
.home8-left p {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.2rem;
  text-align: left;
  line-height: 1.7;
}
.button{
  padding: 1.25rem;
  font-size: 1.5rem;
}
.home8-right {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 400px;
}
.home8-right img {
  object-fit: cover;
  border-radius: 22px;
  background: #f8faff;
  display: block;
}
@media (max-width: 900px) {
  .home8 { flex-direction: column; gap: 2vw; }
  .home8-left, .home8-right { max-width: 100%; padding-left: 0; align-items: center;}
  .home8-right img { width: 98vw; height: 220px; }
}
</style>
