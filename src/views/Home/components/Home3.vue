<template>
  <div class="home3">
    <div class="banxin">
      <h2>全客户端适配</h2>
      <p>一套设计风格，统一操作体验；数据信息共享，业务高效运转 </p>
      <ul class="client-list">
        <li v-for="(item, index) in home3List" :key="item.id" :style="{ opacity: liOpacity[index] }">
          <img :src="item.url" alt="">
          <h3>{{ item.unit }}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import home3icon1 from '@/assets/Images/home3icon1.png'
import home3icon2 from '@/assets/Images/home3icon2.png'
import home3icon3 from '@/assets/Images/home3icon3.png'
import home3icon4 from '@/assets/Images/home3icon4.png'
import home3icon5 from '@/assets/Images/home3icon5.png'

const props = defineProps({ active: Boolean })

const home3List = ref([
  {id:1001,url:home3icon1,unit:'电脑端'},
  {id:1002,url:home3icon2,unit:'平板端'},
  {id:1003,url:home3icon3,unit:'手机端'},
  {id:1004,url:home3icon4,unit:'小程序端'},
  {id:1005,url:home3icon5,unit:'大屏端'},
])


const liOpacity = ref(home3List.value.map(() => 0))
const imgOffset = ref(300)


function startAnimations() {

  home3List.value.forEach((_, index) => {
    setTimeout(() => {
      liOpacity.value[index] = 1
    }, index * 150)
  })


  const duration = 100
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

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}


watch(() => props.active, (val) => {
  if (val) {

    liOpacity.value = home3List.value.map(() => 0)
    imgOffset.value = 1000

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
.banxin {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;

}
.home3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100vw;
  background-image: url('@/assets/Images/home3bg.png');
  background-size: 80%;
  background-position: bottom ;
  background-repeat:no-repeat ;
  padding-top: 6.25vw;
  box-sizing: border-box;
}
.home3 h2 {
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
.home3 p {
  font-size: 1.1vw;
  color: #666;
  margin-bottom: 3.75rem;
  margin-top: 2.5rem;
  text-align: center;
  line-height: 1.7;
  margin-left: auto;
  margin-right: auto;
  padding: 1vw 2vw;
  word-break: break-all;
}
.client-list {
  display: flex;
  gap: 2.5vw;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto 3.5vw;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1920px;
  box-sizing: border-box;
}

.client-list li {
  background: rgba(255,255,255,0.8);
  border-radius: 1rem;
  box-shadow: 0 0.25vw 1.5vw rgba(44,90,255,0.10);
  padding: 2vw 1.2vw 1vw 1.2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16%;
  min-width: 160px;
  min-height: 10vw;
  transition: opacity 0.5s ease, box-shadow 0.5s, transform 0.3s;
  font-size: 1.1vw;
  opacity: 0;
  box-sizing: border-box;
  flex-shrink: 0;
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
</style>
