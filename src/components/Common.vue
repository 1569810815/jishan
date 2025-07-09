<template>
  <div
    class="commonHeader"
    :style="{ backgroundImage: `url(${bg})` }"
  >
    <div>
      <h1><slot name="title"></slot></h1>
      <h3><slot name="subtitle"></slot></h3>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  bg: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.commonHeader {
  width: 100%;
  height: 40vw;
  min-height: 300px;
  max-height: 1200px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 clamp(16px, 10vw, 400px);
  box-sizing: border-box;
}
.commonHeader h1 {
  color: #fff;
  font-size: clamp(32px, 6vw, 60px);
  line-height: 2.4;
  margin: 0;
  text-shadow: 0 8px 8px rgba(0,0,0,0.8);
}
.commonHeader h3 {
  width: 62.5rem;
  color: #fff;
  font-size: 1.5rem;
  margin: 0.5em 0 0 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.2);
  line-height: 2.4;

}
</style>
