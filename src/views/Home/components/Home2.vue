<template>
  <div class="home2">
    <h2>数字养老</h2>
    <p class="desc">立足行业十年，懂开发更懂养老</p>
    <div class="icon-list-wrap">
      <ul class="icon-list">
        <li v-for="item in home2List" :key="item.id">
          <img :src="item.url" alt="">
          <div class="icon-num">
            <span class="number" v-animate-number="item.number"></span>
            <span class="unit">{{ item.unit }}</span>
          </div>
          <div class="icon-project">{{ item.project }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ active: Boolean })
const home2List = ref([
  {id:1001,url:'https://www.huiyangtong.com/images/icon1.webp',number:22,project:'项目落地省（直辖市）',unit:'个'},
  {id:1002,url:'https://www.huiyangtong.com/images/icon4.webp',number:78,project:'运营智慧养老平台数',unit:'个'},
  {id:1003,url:'https://www.huiyangtong.com/images/icon2.webp',number:1086,project:'合作机构',unit:'家'},
  {id:1004,url:'https://www.huiyangtong.com/images/icon5.webp',number:18.08,project:'覆盖床位数',unit:'余万张'},
  {id:1005,url:'https://www.huiyangtong.com/images/icon3.webp',number:5600,project:'平台社区数',unit:'余'},
  {id:1006,url:'https://www.huiyangtong.com/images/icon6.webp',number:1200,project:'服务老人数',unit:'余万'},
  {id:1007,url:'https://www.huiyangtong.com/images/icon7.webp',number:35,project:'综合体数',unit:'个'},
  {id:1008,url:'https://www.huiyangtong.com/images/icon8.webp',number:100000,project:'平台服务人员数',unit:'余'},
])

// 动态数字指令
function animateNumber(el, binding) {
  let start = 0
  const end = Number(binding.value)
  const isFloat = String(binding.value).includes('.')
  const duration = 6000
  const frameRate = 30
  const totalFrames = Math.round(duration / (1000 / frameRate))
  let frame = 0

  function update() {
    frame++
    const progress = Math.min(frame / totalFrames, 1)
    const current = start + (end - start) * progress
    el.textContent = isFloat ? current.toFixed(2) : Math.floor(current)
    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      el.textContent = isFloat ? end.toFixed(2) : end
    }
  }
  update()
}

const vAnimateNumber = {
  mounted(el, binding) {
    if (props.active) animateNumber(el, binding)
  },
  updated(el, binding) {
    if (props.active) animateNumber(el, binding)
  }
}

// 监听 active，切换到本页时触发动画
watch(() => props.active, (val) => {
  if (val) {
    // 触发数字动画（强制刷新指令）
    setTimeout(() => {
      document.querySelectorAll('.number').forEach((el, idx) => {
        animateNumber(el, { value: home2List.value[idx].number })
      })
    }, 100)
  }
})
</script>


<style scoped>
.home2 {
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: url('https://ts4.tc.mm.bing.net/th/id/OIP-C.3KRGsjhBoyb3HclTkm31rgHaEX?rs=1&pid=ImgDetMain&o=7&rm=3') center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
}
.home2 h2 {
  color: black;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(44,90,255,0.08);
}
.home2 .desc {
  color: #666;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  text-align: center;
  padding: 1em 2em;
  max-width: 90vw;
}
.icon-list-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
.icon-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
  padding: 0;
  margin: 0;
  list-style: none;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
}
.icon-list li {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(44,90,255,0.08);
  padding: 2rem 1.5rem 1.2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
  min-height: 120px;
  transition: box-shadow 0.2s, transform 0.5s cubic-bezier(.23,1.02,.64,.97);
  box-sizing: border-box;
}
.icon-list li:hover {
  box-shadow: 0 4px 24px rgba(44,90,255,0.18);
  transform: translateY(-8px) scale(1.04);
}
.icon-list img {
  width: 72px;
  height: 72px;
  margin-bottom: 1rem;
  transition: transform 0.3s;
  object-fit: contain;
}
.icon-list li:hover img {
  transform: scale(1.12) rotate(-6deg);
}
.icon-num {
  display: flex;
  align-items: baseline;
  margin-bottom: 0.5rem;
}
.icon-num .number {
  font-size: 2.2rem;
  font-weight: 400;
  margin-right: 0.2em;
  min-width: 60px;
  display: inline-block;
  text-align: right;
}
.icon-num .unit {
  font-size: 1.1rem;
  color: #666;
}
.icon-project {
  color: #333;
  font-size: 1.05rem;
  text-align: center;
  line-height: 1.5;
  word-break: break-all;
}

/* 响应式适配 */
@media (max-width: 1200px) {
  .icon-list {
    max-width: 98vw;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
  .icon-list li {
    min-width: 100px;
    min-height: 100px;
    padding: 1.2rem 0.8rem;
  }
  .icon-list img {
    width: 48px;
    height: 48px;
    margin-bottom: 0.6rem;
  }
  .home2 h2 { font-size: 2.1rem; }
  .home2 .desc { font-size: 1.1rem; }
  .icon-num .number { font-size: 1.3rem; min-width: 36px; }
  .icon-project { font-size: 0.95rem; }
}
@media (max-width: 700px) {
  .home2 {
    padding: 0.5rem 0;
  }
  .icon-list {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    max-width: 99vw;
  }
  .icon-list li {
    min-width: 80px;
    min-height: 80px;
    padding: 0.8rem 0.3rem;
  }
  .icon-list img {
    width: 36px;
    height: 36px;
    margin-bottom: 0.3rem;
  }
  .home2 h2 { font-size: 1.3rem; }
  .home2 .desc { font-size: 0.95rem; padding: 0.5em 0.5em; }
  .icon-num .number { font-size: 1rem; min-width: 24px; }
  .icon-project { font-size: 0.85rem; }
}
</style>
