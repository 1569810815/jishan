<template>

    <div class="home2">
      <div class="banxin">
        <h2>数字养老</h2>
        <p class="desc">科技重构养老体验</p>
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
    </div>

</template>

<script setup>
import { ref, watch } from 'vue'
import home2icon1 from '@/assets/Images/home2icon1.png'
import home2icon2 from '@/assets/Images/home2icon2.png'
import home2icon3 from '@/assets/Images/home2icon3.png'
import home2icon4 from '@/assets/Images/home2icon4.png'
import home2icon5 from '@/assets/Images/home2icon5.png'
import home2icon6 from '@/assets/Images/home2icon6.png'
import home2icon7 from '@/assets/Images/home2icon7.png'
import home2icon8 from '@/assets/Images/home2icon8.png'

const props = defineProps({ active: Boolean })
const home2List = ref([
  {id:1001,url:home2icon1,number:22,project:'项目落地省（直辖市）',unit:'个'},
  {id:1002,url:home2icon2,number:78,project:'运营智慧养老平台数',unit:'个'},
  {id:1003,url:home2icon3,number:1086,project:'合作机构',unit:'家'},
  {id:1004,url:home2icon4,number:18.08,project:'覆盖床位数',unit:'余万张'},
  {id:1005,url:home2icon5,number:5600,project:'平台社区数',unit:'余'},
  {id:1006,url:home2icon6,number:1200,project:'服务老人数',unit:'余万'},
  {id:1007,url:home2icon7,number:35,project:'综合体数',unit:'个'},
  {id:1008,url:home2icon8,number:100000,project:'平台服务人员数',unit:'余'},
])

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

watch(() => props.active, (val) => {
  if (val) {
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
  display: flex;
  flex-direction: column;
  background-color: #fff;
  min-height: 100vh;
  width: 100vw;
  padding: 6vw 12vw;
  box-sizing: border-box;
  background: url('@/assets/Images/home2bg.png') center center/cover no-repeat;
}

.home2-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 3.125rem;
  width: 100%;
}

h2 {
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  font-size: 2.2vw;
  color: #222;
  margin-top: 2vw;
  margin-bottom: 0vw;
  letter-spacing: 0.08em;
  text-align: center;
  width: 100%;
}

.desc {
  color: #666;
  font-size: 1.1vw;
  margin-bottom: 3.75rem;
  margin-top: 2.5rem;
  padding: 1vw 0;
  line-height: 1.7;
  text-align: center;
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
  gap: 2.5vw 2vw;
  list-style: none;
  width: 100%;
  box-sizing: border-box;
}

.icon-list li {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.625vw;
  box-shadow: 0 0.104vw 0.833vw rgba(44,90,255,0.2);
  padding: 1.5vw 1vw 1vw 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.5s cubic-bezier(.23,1.02,.64,.97);
}

.icon-list li:hover {
  box-shadow: 0 0.208vw 1.25vw rgba(44,90,255,0.18);
  transform: translateY(-0.417vw) scale(1.04);
}

.icon-list img {
  width: 3.75vw;
  height: 3.75vw;
  margin-bottom: 0.8vw;
  transition: transform 0.3s;
  object-fit: contain;
}

.icon-list li:hover img {
  transform: scale(1.12) rotate(-6deg);
}

.icon-num {
  display: flex;
  align-items: baseline;
  margin-bottom: 0.4vw;
}

.icon-num .number {
  font-family: "Alimama ShuHei", sans-serif;
  font-weight: bold;
  font-size: 1.5vw;
  margin-right: 0.2em;
  min-width: 3.125vw;
  display: inline-block;
  text-align: right;
}

.icon-num .unit {
  font-size: 0.8vw;
  color: #666;
}

.icon-project {
  color: #333;
  font-size: 0.9vw;
  text-align: center;
  line-height: 1.5;
  word-break: break-all;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .home2 {
    padding: 6vw 5vw;
  }

  .icon-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 3vw;
  }

  h2 {
    font-size: 4vw;
    margin-top: 4rem;
  }

  .desc {
    font-size: 2vw;
  }

  .icon-list img {
    width: 6vw;
    height: 6vw;
  }

  .icon-num .number {
    font-size: 3vw;
  }

  .icon-num .unit {
    font-size: 1.6vw;
  }

  .icon-project {
    font-size: 1.8vw;
  }
}
</style>
