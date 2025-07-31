<template>
  <div class="home8">
    <div class="banxin">
      <div class="home8-left" :style="{ opacity: contentOpacity }">
      <h2>成功案例</h2>
      <p>京雅智慧康养综合管理平台已服务超过1600余家养老机构</p>
      <p>全新的客户成功服务模式</p>
      <h3 class="sub-title">付费 = 服务刚开始！</h3>
      <p>以客户成功服务、客户支持服务、专业实施服务为核心，助力客户养老业务的成功</p>
      <el-button type="primary" plain @click="toCase">更多客户案例</el-button>
    </div>

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
.home8 {
    background-image: url('@/assets/Images/home8bg.png');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
}
.banxin {
  width: 100%;
  display: flex;
  max-width: 1920px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

}
.home8-left {
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.home8-left h2 {
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  font-size: 2.2vw;
  color: #222;
  margin-bottom: 2vw;
  letter-spacing: 0.08em;
  text-align: left;
  width: 100%;
}
.home8-left .sub-title {
  font-family: "Alimama ShuHei", sans-serif;
  color: black;
  font-size: 2.2rem;
  margin: 2rem 0 1.2rem 0;
  font-weight: bold;
  letter-spacing: 1px;
}
.home8-left p {
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.6);
  margin: 1.2rem 0;
  text-align: left;
  line-height: 1.7;
}
.el-button{
  background-color: #ef203a ;
  color: #fff;
  padding: 30px 60px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  line-height: 5px;
  margin: 50px auto;
  display: block;
}
.el-button:hover {
  background-color: #d1021c;
}

@media (max-width: 900px) {
  .home8 { flex-direction: column; gap: 2vw; }
  .home8-left, .home8-right { max-width: 100%; padding-left: 0; align-items: center;}
  .home8-right img { width: 98vw; height: 220px; }
}
</style>
