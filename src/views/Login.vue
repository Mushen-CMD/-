<template>
  <div class="login">
    <h1>登录/注册</h1>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          {{ isLogin ? '登录' : '注册' }}
        </van-button>
      </div>
    </van-form>
    <van-button plain type="primary" @click="toggleMode">
      切换到{{ isLogin ? '注册' : '登录' }}
    </van-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const isLogin = ref(true)

const onSubmit = () => {
  // Here you would typically make an API call to authenticate or register
  console.log('Username:', username.value, 'Password:', password.value)
  if (isLogin.value) {
    // Simulate login success
    router.push('/chat')
  } else {
    // Simulate registration success
    isLogin.value = true
  }
}

const toggleMode = () => {
  isLogin.value = !isLogin.value
}
</script>

<style scoped>
.login {
  padding: 20px;
}
</style>