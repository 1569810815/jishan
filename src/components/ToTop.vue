<template>
  <div class="floating-container">
    <!-- 1. 手机号侧边栏 -->
    <div class="floating-button phone-button" @mouseenter="showSidebar = 'phone'" @mouseleave="showSidebar = ''">
      <transition name="slide">
        <div v-if="showSidebar === 'phone'" class="sidebar">
          <p>联系我们：400-900-1173</p>
        </div>
      </transition>
    </div>

    <!-- 2. 二维码侧边栏 -->
    <div class="floating-button qr-button" @mouseenter="showSidebar = 'qr'" @mouseleave="showSidebar = ''">
      <!-- <span>二维码</span> -->
      <transition name="slide">
        <div v-if="showSidebar === 'qr'" class="sidebar">
          <img src="../assets/Images/icon3.png" alt="二维码" />
        </div>
      </transition>
    </div>

    <!-- 返回顶部 -->
    <button
      id="back-to-top"
      class="show"
      @click="goToFirst"
      aria-label="回到第一张"
    >
      <svg viewBox="0 0 24 24">
        <path d="M12 4l-8 8h5v8h6v-8h5z"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['go-first']);
const showSidebar = ref('');

const goToFirst = () => {
  emit('go-first');
};
</script>

<style scoped>
.floating-container {
  position: fixed;
  right: 30px;
  bottom: 50%;
  transform: translateY(50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 999;

}

.floating-button {
  position: relative;
  width: 50px;
  height: 50px;
  background-color: #ef203a;
  color: white;
  border-radius: 10%;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

}
.phone-button{
background-image: url('../assets/Images/icon1.png');
  background-size:70%;
  background-position: center;
  background-repeat: no-repeat;
}
.qr-button{
  background-image: url('../assets/Images/icon2.png');
  background-size:70%;
  background-repeat: no-repeat;
  background-position: center;
}
.floating-button:hover {
  background-color: #d1021c;
  transform: translateY(-5px);
}

.floating-button span {
  font-size: 14px;
}

/* 侧边栏样式 */
.sidebar {
  position: absolute;
  right: 60px;
  top: 0;
  width: 200px;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  color: #333;
}

.sidebar img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

/* 过渡动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* 返回顶部按钮样式 */
#back-to-top {
  position: relative;
  width: 50px;
  height: 50px;
  background-color: #ef203a;
  color: white;
  border-radius: 10%;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

#back-to-top:hover {
  background-color: #d1021c;
  transform: translateY(-3px);
}

#back-to-top svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}
</style>
