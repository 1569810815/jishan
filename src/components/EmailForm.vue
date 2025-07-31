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
  border: 1px solid #ef203a;
  border-radius: 4px;
  font-family: inherit;
  outline:none;
  outline:0;
}

.form-group textarea {
  height: 4.375rem;
  resize: vertical;
}

.submit-btn {
  margin-top: auto;
  padding: 10px;
  background-color: #ef203a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.submit-btn:hover {
  background-color: #d1021c;
}
select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ef203a'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5em center;
  background-size: 1.5em;
}
</style>
