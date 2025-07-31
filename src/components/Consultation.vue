<template>
  <div class="consultation-widget" :class="{ 'is-active': isOpen }">
    <!-- 浮动按钮 -->
    <div class="consultation-float-btn" @click="toggleConsultation">
      <i class="icon-email">留言咨询</i>
    </div>

    <!-- 咨询面板 -->
    <div class="consultation-panel" v-if="isOpen">
      <div class="panel-header">
        <h3>留言咨询</h3>
        <button class="close-btn" @click="closeConsultation">×</button>
      </div>

      <div class="panel-body">
        <!-- 留言表单 -->
        <EmailForm @submit="handleEmailSubmit" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EmailForm from './EmailForm.vue'
import { ElNotification } from 'element-plus';
const isOpen = ref(false)

const toggleConsultation = () => {
  isOpen.value = !isOpen.value
}

const closeConsultation = () => {
  isOpen.value = false
}

const handleEmailSubmit = (formData) => {
  console.log('表单提交:', formData);
  ElNotification({
    title: '提交成功',
    message: '您的留言已提交，我们会尽快回复您！',
    type: 'success',
    duration: 3000,
  });
  closeConsultation();
};
</script>

<style scoped>
.consultation-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.consultation-float-btn {
  width: 5rem;
  height: 3.75rem;
  background-color: #ef203a;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s;
}

.consultation-float-btn:hover {
  background-color: #d1021c;
}

.consultation-panel {
  width: 21.875rem;
  height: 33rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 4.375rem;
  right: 0;
  overflow: hidden;
}

.panel-header {
  padding: .75rem 1rem;
  background-color: #ef203a;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
}

.panel-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1rem;
}
</style>
