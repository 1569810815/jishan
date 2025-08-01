<template>
  <div class="home5">
    <h2>核心文化</h2>
    <p>从精准营销到智慧服务，从数字运营到安全守护，全方位赋能养老机构数字化转型</p>
    <div class="home5-container">
      <div class="content-wrapper">
        <div class="home5-left" :style="{ transform: `translateY(${leftOffset}px)` }">
          <ul class="mode-list">
            <li
              v-for="(item, idx) in home4List"
              :key="item.id"
              :class="{active: idx === activeIndex}"
              @mouseenter="activeIndex = idx"
              :style="{ opacity: liOpacity[idx] }"
            >
              <span>{{ item.tatle }}</span>
            </li>
          </ul>
        </div>
        <div class="home5-right" :style="{ transform: `translateY(${rightOffset}px)` }">
          <transition name="fade-slide" mode="out-in">
            <div class="advantage-card" :key="activeIndex">
              <div class="advantage-content">
                <h4 class="advantage-title">{{ home4List[activeIndex].tatle }}</h4>
                <div class="advantage-subheading">{{ home4List[activeIndex].subheading }}</div>
                <ul class="advantage-desc">
                  <li>{{ home4List[activeIndex].text1 }}</li>
                  <li>{{ home4List[activeIndex].text2 }}</li>
                  <li>{{ home4List[activeIndex].text3 }}</li>
                </ul>
              </div>
              <img class="advantage-img" :src="home4List[activeIndex].url" :alt="home4List[activeIndex].tatle" />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import yingxiaoImg from '@/assets/Images/yingxiao.png'
import yunyingImg from '@/assets/Images/yunying.png'
import fuwuImg from '@/assets/Images/fuwu.png'
import anxinImg from '@/assets/Images/anxin.png'

const props = defineProps({ active: Boolean })

const home4List = ref([
  {id:1001,
    url:yingxiaoImg,
    tatle:'公平',
    subheading:'智慧营销 · 精准触达银龄需求',
    text1:'多渠道适老入口:大字版APP/语音助手/子女代操作，覆盖不同数字能力老人',
    text2:'VR沉浸式体验:养老院VR漫游展示，咨询转化率提升40%',
    text3:'需求智能预判:健康数据联动服务推荐，异常体征自动推送护理套餐'
  },
  {id:1002,
    url:yunyingImg,
    tatle:'公益',
    subheading:'智能运营 · 降本增效',
    text1:'数字化管理中台:床位/护工/药品全流程线上化，人力效率提升55%',
    text2:'AI应急响应:跌倒监测+一键呼叫，5分钟快速救援',
    text3:'智能耗材管理:物联网实时监测物资，损耗降低33%'
  },
  {id:1003,
    url:fuwuImg,
    tatle:'勇敢',
    subheading:'温情服务 · 科技有温度',
    text1:'24小时安全守护:智能药盒+水浸传感器，预防居家意外',
    text2:'情感关怀系统:AI识别情绪波动，自动触发视频慰问',
    text3:'代际数字桥梁:电子回忆录+活动报告，家庭互动提升3倍'
  },
  {id:1004,
    url:anxinImg,
    tatle:'学习',
    subheading:'安心保障 · 全程可信赖',
    text1:'医疗级数据安全:本地化存储+权限分级，CCRC认证保障',
    text2:'服务区块链存证:助浴/用药全程上链，纠纷率下降76%',
    text3:'政府合作背书:与120急救数据互通，响应速度提升60%'
  },
])

const activeIndex = ref(0)

// 动画控制变量
const leftOffset = ref(-100)
const rightOffset = ref(100)
const liOpacity = ref(home4List.value.map(() => 0))

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
  display: flex;
  flex-direction: column;
  background-color:#fff;
  min-height: 100vh;
  width: 100vw;
  padding: 6vw 12vw;
  box-sizing: border-box;
}


.home5-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 3.125rem;
  width: 100%;
}

.content-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* gap: 2vw; */
}
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
  margin-bottom: 3.75rem;
  margin-top: 40px;
  padding: 1vw 0;
  line-height: 1.7;
  text-align: left;
}
/* 左侧样式保持不变 */
.home5-left {
  flex: 0 0 35%;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 右侧新布局 */
.home5-right {
  flex: 0 0 55%;
  max-width: 55%;
  align-self: center;
}

.advantage-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2vw;
  padding: 2vw;
  width: 100%;
  box-sizing: border-box;
}

.advantage-img {
  flex: 0 0 40%;
  max-height: 22vw;
  object-fit: contain;
  border-radius: 0.4vw;
}

.advantage-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1vw;
}


.advantage-title {
  font-size: 1.5vw;
  font-family: "Alimama ShuHei", sans-serif;
  color: black;
  font-weight: bold;
  margin-bottom: 1vw;
  text-align: left;
}

.advantage-subheading {
  font-size: 1.1vw;
    color: rgba(0, 0, 0, 0.6);
  margin-bottom: 1.5vw;
  text-align: left;
  font-weight: 500;
}

.advantage-desc {
  padding: 0;
  margin: 0;
  text-align: left;
}


.advantage-desc li {
  position: relative;
  margin-bottom: 0.8vw;
  font-size: 1vw;
  color: rgba(0, 0, 0, 0.4);
  line-height: 1.6;
}




.mode-list li {
  position: relative;
  display: flex;
  align-items: center;
  padding: 1vw 2vw;
  margin-bottom: 1vw;
  background: #f7f7f9;
  border-radius: 0.2vw;
  cursor: pointer;
  color: #333;
  font-size: 1.1vw;
  transition: all 0.2s;
  font-weight: 500;
  opacity: 0;
}




.mode-list li.active,
.mode-list li:hover {
  background: rgba(239, 32, 58, 0.1);
  color: #ef203a;
  border-left: 0.35vw solid #ef203a;
}

.fade-slide-enter-active {
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
