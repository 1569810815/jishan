<template>
  <div class="chat-panel">
    <div class="chat-messages" ref="messagesContainer">
      <div
        v-for="message in messages"
        :key="message.id"
        class="message"
        :class="message.sender"
      >
        <div class="message-content">
          {{ message.content }}
        </div>
        <div class="message-time">
          {{ formatTime(message.timestamp) }}
        </div>
      </div>
    </div>

    <div class="chat-input-area">
      <textarea
        v-model="inputMessage"
        placeholder="请输入您的问题..."
        @keyup.enter="sendMessage"
      ></textarea>
      <button @click="sendMessage" :disabled="!inputMessage.trim()">发送</button>
    </div>


  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'

const props = defineProps({
  messages: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['send-message', 'rate'])

const inputMessage = ref('')
const messagesContainer = ref(null)

const formatTime = (date) => {
  return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const sendMessage = () => {
  if (!inputMessage.value.trim()) return

  emit('send-message', inputMessage.value)
  inputMessage.value = ''

}



// 自动滚动到底部
watch(() => props.messages, () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}, { deep: true })
</script>

<style scoped>
.chat-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  background-color: #fafafa;
}

.message {
  margin-bottom: 15px;
  max-width: 80%;
}

.message-content {
  padding: 10px 15px;
  border-radius: 18px;
  line-height: 1.4;
  word-break: break-word;
}

.message-time {
  font-size: 11px;
  color: #999;
  margin-top: 4px;
}

.user {
  margin-left: auto;
}

.user .message-content {
  background-color: #1890ff;
  color: white;
  border-top-right-radius: 4px;
}

.agent {
  margin-right: auto;
}

.agent .message-content {
  background-color: #f0f0f0;
  border-top-left-radius: 4px;
}

.chat-input-area {
  padding: 10px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 10px;
}

.chat-input-area textarea {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  min-height: 50px;
  max-height: 100px;
  outline:none;
  outline:0;
}

.chat-input-area button {
  padding: 0 15px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.chat-input-area button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.chat-rating {
  padding: 10px;
  border-top: 1px solid #eee;
  text-align: center;
}

.rating-stars {
  font-size: 24px;
  color: #ccc;
  cursor: pointer;
}

.rating-stars span {
  margin: 0 2px;
}

.rating-stars span.active {
  color: #ffc107;
}
</style>
