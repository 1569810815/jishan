<template>
  <form class="email-form" @submit.prevent="submitForm">
    <div class="form-group">
      <label>咨询类型</label>
      <select v-model="formData.type" required>
        <option value="">请选择...</option>
        <option value="product">产品咨询</option>
        <option value="tech">技术支持</option>
        <option value="complaint">投诉建议</option>
        <option value="other">其他</option>
      </select>
    </div>

    <div class="form-group">
      <label>问题描述</label>
      <textarea v-model="formData.content" rows="5" required></textarea>
    </div>

    <div class="form-group">
      <label>您的邮箱</label>
      <input type="email" v-model="formData.email" required>
    </div>

    <div class="form-group">
      <label>联系电话</label>
      <input type="tel" v-model="formData.phone">
    </div>

    <button type="submit" class="submit-btn">提交咨询</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])

const formData = ref({
  type: '',
  content: '',
  email: '',
  phone: ''
})

const submitForm = () => {
  emit('submit', formData.value)
  // 重置表单
  formData.value = {
    type: '',
    content: '',
    email: '',
    phone: ''
  }
}
</script>

<style scoped>
.email-form {
  padding: 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group select,
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  outline:none;
  outline:0;
}

.form-group textarea {
  height: 70px;
  resize: vertical;
}

.submit-btn {
  margin-top: auto;
  padding: 10px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.submit-btn:hover {
  background-color: #40a9ff;
}
</style>
