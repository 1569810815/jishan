<template>
  <div class="consultation-widget" :class="{ 'is-active': isOpen }">
    <!-- 浮动按钮 -->
    <div class="consultation-float-btn" @click="toggleConsultation">
      <span v-if="unreadCount > 0" class="unread-badge">{{ unreadCount }}</span>
      <i class="icon-chat">在线咨询</i>
    </div>

    <!-- 咨询面板 -->
    <div class="consultation-panel" v-if="isOpen" @wheel.stop="handlePanelScroll">
      <div class="panel-header">
        <h3>在线咨询</h3>
        <button class="close-btn" @click="closeConsultation">×</button>
      </div>

      <div class="panel-body">
        <!-- 咨询方式选择 -->
        <div v-if="!currentConsultationMode" class="mode-selector">
          <button @click="startChat" class="mode-btn">
            <i class="icon-message"></i>
            <span>在线聊天</span>
          </button>
          <button @click="startEmail" class="mode-btn">
            <i class="icon-email"></i>
            <span>留言咨询</span>
          </button>
        </div>

        <!-- 聊天模式 -->
        <ChatPanel
          v-if="currentConsultationMode === 'chat'"
          :messages="messages"
          @send-message="handleSendMessage"
        />

        <!-- 留言模式 -->
        <EmailForm
          v-if="currentConsultationMode === 'email'"
          @submit="handleEmailSubmit"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ChatPanel from './ChatPanel.vue'
import EmailForm from './EmailForm.vue'

const isOpen = ref(true)
const unreadCount = ref(0)
const currentConsultationMode = ref(null)
const messages = ref([])

// 初始化消息
onMounted(() => {
  // 可以加载历史消息
  messages.value = [
    {
      id: 1,
      sender: 'agent',
      content: '您好，我是您的专属客服，请问有什么可以帮您？',
      timestamp: new Date(),
      isRead: true
    }
  ]
})

const toggleConsultation = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    unreadCount.value = 0
    // 标记所有消息为已读
    messages.value.forEach(msg => msg.isRead = true)
  }
}

const closeConsultation = () => {
  isOpen.value = false
}

const startChat = () => {
  currentConsultationMode.value = 'chat'
  // 可以在这里初始化聊天连接
}

const startEmail = () => {
  currentConsultationMode.value = 'email'
}

const handleSendMessage = (message) => {
  // 处理发送消息
  const newMsg = {
    id: Date.now(),
    sender: 'user',
    content: message,
    timestamp: new Date(),
    isRead: true
  }
  messages.value.push(newMsg)

  // 模拟客服回复
  setTimeout(() => {
    const replyMsg = {
      id: Date.now(),
      sender: 'agent',
      content: '感谢您的咨询，我们会尽快处理您的问题。',
      timestamp: new Date(),
      isRead: !isOpen.value
    }
    messages.value.push(replyMsg)
    if (!isOpen.value) {
      unreadCount.value++
    }
  }, 1500)
}

const handleEmailSubmit = (formData) => {
  // 处理表单提交
  console.log('表单提交:', formData)
  // 可以调用API提交表单
  alert('您的留言已提交，我们会尽快回复您！')
  currentConsultationMode.value = null
  closeConsultation()
}

const handlePanelScroll = (e) => {
  e.stopPropagation() // 阻止事件冒泡
  const panel = e.currentTarget
  // 如果内容可以滚动，则允许面板内滚动
  if (panel.scrollHeight > panel.clientHeight) {
    panel.scrollTop += e.deltaY
  }
}
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
  background-color: #1890ff;
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
  background-color: #40a9ff;
}

.unread-badge {
  position: absolute;
  top: -0.3125rem;
  right: -0.3125rem;
  background-color: #ff4d4f;
  color: white;
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .75rem;
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
  background-color: #1890ff;
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
}

.mode-selector {
  display: flex;
  flex-direction: column;
  gap: .9375rem;
  padding: 1.25rem;
  flex: 1;
  justify-content: center;
}

.mode-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background-color: #f5f5f5;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
  transition: all 0.3s;
}

.mode-btn:hover {
  background-color: #e6f7ff;
  color: #1890ff;
}

.mode-btn i {
  font-size: 1.5rem;
  margin-bottom: .5rem;
}
</style>
