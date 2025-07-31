<template>
  <div class="tryoutBtn">
    <el-button type="primary" plain class="btn" @click="goTryout">点击申请免费试用</el-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goTryout = () =>{
  router.push('/tryout')
}
</script>

<style>
.el-button.btn {
  background: linear-gradient(to right, #d1021c 50%, #ef203a 50%);
  background-size: 200% 100%;
  background-position: right;
  color: #fff;
  padding: 30px 40px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  line-height: 5px;
  margin: 50px auto;
  display: block;
  border: none;
  transition: background-position 0.3s ease;
  z-index: 1;
}

.el-button.btn:hover {
  background-position: left;
}
</style>
