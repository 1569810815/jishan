<template>
  <div class="home3">
    <h3>全客户端适配</h3>
    <p>一套设计风格，统一操作体验；数据信息共享，业务高效运转 </p>
    <ul class="client-list">
      <li v-for="(item, index) in home3List" :key="item.id" :style="{ opacity: liOpacity[index] }">
        <img :src="item.url" alt="">
        <h3>{{ item.unit }}</h3>
      </li>
    </ul>
    <div class="client-img-wrap">
      <img src="https://www.huiyangtong.com/images/client-1.webp" alt="" :style="{ transform: `translateX(${imgOffset}px)` }">
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({ active: Boolean })

const home3List = ref([
  {id:1001,url:'https://www.huiyangtong.com/images/clienticon-1.webp',unit:'电脑端'},
  {id:1002,url:'https://www.huiyangtong.com/images/clienticon-2.webp',unit:'平板端'},
  {id:1003,url:'https://www.huiyangtong.com/images/clienticon-3.webp',unit:'手机端'},
  {id:1004,url:'https://www.huiyangtong.com/images/clienticon-4.webp',unit:'小程序端'},
  {id:1005,url:'https://www.huiyangtong.com/images/clienticon-5.webp',unit:'大屏端'},
])

// 动画控制变量
const liOpacity = ref(home3List.value.map(() => 0)) // 列表项透明度
const imgOffset = ref(300) // 图片初始偏移量

// 动画函数
function startAnimations() {
  // 列表项渐显动画
  home3List.value.forEach((_, index) => {
    setTimeout(() => {
      liOpacity.value[index] = 1
    }, index * 150) // 每个元素延迟150ms依次显示
  })

  // 图片滑动动画
  const duration = 100 // 动画持续时间
  const startTime = Date.now()

  function animateImage() {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)

    // 使用缓动函数使动画更自然
    imgOffset.value = 1000 * (1 - easeOutCubic(progress))

    if (progress < 1) {
      requestAnimationFrame(animateImage)
    }
  }

  animateImage()
}

// 缓动函数 - 使动画更自然
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

// 监听active状态
watch(() => props.active, (val) => {
  if (val) {
    // 重置状态
    liOpacity.value = home3List.value.map(() => 0)
    imgOffset.value = 1000

    // 延迟100ms确保DOM更新完成
    setTimeout(() => {
      startAnimations()
    }, 100)
  }
})

// 组件挂载时如果active为true也触发动画
onMounted(() => {
  if (props.active) {
    startAnimations()
  }
})
</script>

<style scoped>
.home3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100vw;
  background: #f8faff;
  padding-top: 6.25vw;
  box-sizing: border-box;
}
.home3 h3 {
  font-size: 2.2vw;
  color: #222;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1.2vw;
  letter-spacing: 0.12em;
  text-align: center;
  text-shadow: 0 0.13em 0.33em rgba(44,90,255,0.08);
  line-height: 1.1;
  word-break: break-all;
}
.home3 p {
  font-size: 1vw;
  color: #666;
  margin-bottom: 2.5vw;
  text-align: center;
  line-height: 1.7;
  max-width: 44vw;
  margin-left: auto;
  margin-right: auto;
  padding: 1vw 2vw;
  word-break: break-all;
}
.client-list {
  display: flex;
  gap: 2.5vw;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 3.5vw;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
  width: 90vw;
  max-width: 87.5vw;
  box-sizing: border-box;
}
.client-list li {
  background: #fff;
  border-radius: 1.5vw;
  box-shadow: 0 0.25vw 1.5vw rgba(44,90,255,0.10);
  padding: 2vw 1.2vw 1vw 1.2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 10vw;
  min-height: 10vw;
  transition: opacity 0.5s ease, box-shadow 0.5s, transform 0.3s;
  font-size: 1.1vw;
  opacity: 0;
  box-sizing: border-box;
}
.client-list li[style*="opacity: 1"] {
  opacity: 1;
}
.client-list li:hover {
  box-shadow: 0 0.5vw 2vw rgba(44,90,255,0.18);
  transform: translateY(-0.7vw) scale(1.08);
}
.client-list img {
  width: 5.5vw;
  min-width: 2.2vw;
  max-width: 4.5vw;
  height: auto;
  margin-bottom: 0.8vw;
  object-fit: contain;
}
.client-list h3 {
  font-size: 1.1vw;
  color: #222;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-align: center;
  word-break: break-all;
}
.client-img-wrap {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}
.client-img-wrap img {
  width: 70vw;
  max-width: 60vw;
  height: auto;
  border-radius: 0.7vw;
  object-fit: cover;
  margin-top: 0;
  display: block;
  background: #f8faff;
  transition: transform 0.8s cubic-bezier(1, 1, 0.36, 1);
}
</style>
