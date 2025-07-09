<script setup>
</script>

<template>
  <div class="footer">
    <RouterLink to="/Home" class="logo">
      <!-- 添加实际图片路径和alt描述 -->
      <img src="#" alt="网站Logo" />
    </RouterLink>
    <p>地址：中国苏州高新区苏州大学国家大学科技园通安园区7幢4层</p>
    <span>
      <a href="#">Tel:400-661-8615</a> <a href="#">Phone:0512-68768986</a>
      <a href="#">Email:service@favorsun.com.cn</a>
    </span>
    <hr />
    <p class="fb">
      Copyright © 2024 复向丝泰医疗科技（苏州）有限公司 All Rights
      Reserved.苏ICP备2025164455号
    </p>
  </div>
</template>

<style scoped>
.logo img {
  width: 100px;
  height: 100px;
  margin: 60px 0;
  object-fit: contain;
  background-color: skyblue; /* 临时占位，实际使用时移除 */
}
.footer {
  text-align: center;
  color: #fff;
  width: 100%;
  height: 350px;
  background-color: #2e2925;
  margin-top: 50px;
  font-weight: 200;
}
span a {
  margin-right: 40px;
  color: #fff;
  text-decoration: none;
}
hr {
  margin-top: 80px;
}
.fb {
  font-size: 12px;
}
</style>
