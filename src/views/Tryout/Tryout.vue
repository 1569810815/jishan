<template>
  <div class="tryout">
    <div class="apply-form-container">
      <h2 class="form-title">申请免费试用</h2>
      <p class="form-subtitle">填写以下信息，我们的客户经理将尽快与您联系</p>

      <el-form
        ref="applyForm"
        :model="formData"
        :rules="formRules"
        label-position="top"
        class="apply-form"
      >
        <!-- 企业名称 -->
        <el-form-item label="企业名称" prop="company">
          <el-input
            v-model="formData.company"
            placeholder="请输入您的企业全称"
            clearable
          />
        </el-form-item>

        <!-- 联系人 -->
        <el-form-item label="联系人" prop="name">
          <el-input
            v-model="formData.name"
            placeholder="请输入您的姓名"
            clearable
          />
        </el-form-item>

        <!-- 手机号 -->
        <el-form-item label="手机号码" prop="phone">
          <el-input
            v-model="formData.phone"
            placeholder="请输入11位手机号码"
            clearable
          />
        </el-form-item>

        <!-- 邮箱 -->
        <el-form-item label="电子邮箱" prop="email">
          <el-input
            v-model="formData.email"
            placeholder="请输入常用邮箱"
            clearable
          />
        </el-form-item>

        <!-- 行业 -->
        <el-form-item label="所属行业" prop="industry">
          <el-select
            v-model="formData.industry"
            placeholder="请选择行业"
            clearable
            class="full-width"
          >
            <el-option
              v-for="item in industries"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <!-- 需求描述 -->
        <el-form-item label="需求描述" prop="requirements">
          <el-input
            v-model="formData.requirements"
            type="textarea"
            :rows="4"
            placeholder="请简要描述您的需求和使用场景"
            maxlength="500"
            show-word-limit
          />
        </el-form-item>

        <!-- 提交按钮 -->
        <el-form-item>
          <el-button
            type="primary"
            class="submit-btn"
            :loading="submitting"
            @click="submitForm"
          >
            {{ submitting ? '提交中...' : '立即申请' }}
          </el-button>
        </el-form-item>
      </el-form>

      <div class="form-footer">
        <p>提交申请即表示您同意我们的 <a href="#">服务协议</a> 和 <a href="#">隐私政策</a></p>
      </div>
    </div>
    <Footer></Footer>
    <ToTop></ToTop>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import Footer from '@/components/Footer.vue'
import ToTop from '@/components/ToTop.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// 表单数据
const formData = ref({
  company: '',
  name: '',
  phone: '',
  email: '',
  industry: '',
  requirements: ''
})

// 行业选项
const industries = ref([
  { value: 'finance', label: '金融' },
  { value: 'education', label: '教育' },
  { value: 'healthcare', label: '医疗健康' },
  { value: 'retail', label: '零售' },
  { value: 'manufacturing', label: '制造业' },
  { value: 'logistics', label: '物流运输' },
  { value: 'government', label: '政府机构' },
  { value: 'other', label: '其他' }
])

// 表单验证规则
const formRules = {
  company: [
    { required: true, message: '请输入企业名称', trigger: 'blur' },
    { min: 2, max: 50, message: '长度在2到50个字符', trigger: 'blur' }
  ],
  name: [
    { required: true, message: '请输入联系人姓名', trigger: 'blur' },
    { min: 2, max: 20, message: '长度在2到20个字符', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: 'blur'
    }
  ],
  industry: [
    { required: true, message: '请选择所属行业', trigger: 'change' }
  ],
  requirements: [
    { required: true, message: '请简要描述您的需求', trigger: 'blur' },
    { min: 10, message: '至少输入10个字符', trigger: 'blur' }
  ]
}

const applyForm = ref(null)
const submitting = ref(false)

// 提交表单
const submitForm = async () => {
  try {
    submitting.value = true

    // 验证表单
    await applyForm.value.validate()

    // 模拟API调用
    // 实际项目中替换为真实的API调用
    console.log('提交数据:', formData.value)
    await new Promise(resolve => setTimeout(resolve, 1000))

    ElMessage.success('申请提交成功！我们的客户经理将在1个工作日内与您联系')
    router.push('/')
    // 重置表单
    applyForm.value.resetFields()
  } catch (error) {
    if (error instanceof Error) {
      console.error('表单提交失败:', error)
    }
    // 验证失败会抛出错误，这里不需要额外处理
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.tryout{
  width: 100%;
  height: 100%;
  padding-top: 12.5rem;
}
.apply-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 0.5rem;
}

.form-subtitle {
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
}

.apply-form {
  padding: 0 1rem;
}

.full-width {
  width: 100%;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  margin-top: 1rem;
}

.form-footer {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: #999;
}

.form-footer a {
  color: #1890ff;
  text-decoration: none;
}

.form-footer a:hover {
  text-decoration: underline;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .apply-form-container {
    padding: 1.5rem;
    margin: 0 1rem;
  }

  .form-title {
    font-size: 1.3rem;
  }
}
</style>
