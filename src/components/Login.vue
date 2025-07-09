<template>
  <div class="commonLogin">
    <div class="login-box">
      <h1><slot name="title"></slot></h1>
      <el-tabs v-model="loginType" class="login-tabs">
        <el-tab-pane label="账号密码登录" name="account">
          <el-form :model="accountForm" class="login-form" @submit.prevent="onAccountLogin">
            <el-form-item>
              <el-input v-model="accountForm.username" placeholder="请输入账号" prefix-icon="el-icon-user" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="accountForm.password" type="password" placeholder="请输入密码" prefix-icon="el-icon-lock" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="login-btn" @click="onAccountLogin" block>登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="手机号验证码登录" name="mobile">
          <el-form :model="mobileForm" class="login-form" @submit.prevent="onMobileLogin">
            <el-form-item>
              <el-input v-model="mobileForm.mobile" placeholder="请输入手机号" prefix-icon="el-icon-phone" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="mobileForm.code" placeholder="请输入验证码" prefix-icon="el-icon-message">
                <template #append>
                  <el-button size="small" @click="sendCode" :disabled="countdown > 0">
                    {{ countdown > 0 ? `${countdown}s后重试` : '获取验证码' }}
                  </el-button>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="login-btn" @click="onMobileLogin" block>登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <div class="login-type-tip">
        <slot name="type"></slot>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { ref } from 'vue'
import Footer from './Footer.vue'
const loginType = ref('account')
const accountForm = ref({
  username: '',
  password: ''
})
const mobileForm = ref({
  mobile: '',
  code: ''
})
const countdown = ref(0)
let timer = null

function sendCode() {
  if (!mobileForm.value.mobile) return
  countdown.value = 60
  timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) clearInterval(timer)
  }, 1000)
}

function onAccountLogin() {
  // 账号密码登录逻辑
  // emit('login', { type: 'account', ...accountForm.value })
  // 示例：console.log('账号登录', accountForm.value)
}

function onMobileLogin() {
  // 手机号验证码登录逻辑
  // emit('login', { type: 'mobile', ...mobileForm.value })
  // 示例：console.log('手机登录', mobileForm.value)
}
</script>

<style scoped>
.commonLogin {
  min-height: 100vh;
  background-image: url('https://img.tukuppt.com/bg_grid/00/06/39/0vc7qLbJ7M.jpg!/fh/350');
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #f8faff; */
  background-size: cover;
  background-position: center;
}
.login-box {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(44,90,255,0.10);
  padding: 3rem 2.5rem 2.5rem 2.5rem;
  min-width: 43.75rem;
  max-width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 2.5rem;
  color: black;
  font-weight: 400;
  margin-bottom: 4rem;
  text-align: center;
  letter-spacing: 2px;
}
.login-tabs {
  width: 100%;
}
.login-form {
  margin-top: 1.5rem;
}
.login-btn {
  width: 100%;
  font-size: 1.6rem;
  padding: 1.2em 0;
}
.login-type-tip {
  margin-top: 3rem;
  color: #888;
  font-size: 1.1rem;
  text-align: center;
}
@media (max-width: 600px) {
  .login-box {
    padding: 1rem 0.5rem;
    min-width: 0;
  }
}
</style>
