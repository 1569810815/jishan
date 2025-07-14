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

<style scoped>
.el-button.btn {
  padding: 30px 40px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  line-height: 5px;
  margin: 50px auto;
  display: block;
}
</style>
