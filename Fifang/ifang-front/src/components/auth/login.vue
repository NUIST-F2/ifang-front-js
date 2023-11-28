
<template>
  <Form @submit="login">
    <FormItem label="Username">
      <Input v-model:value="username" placeholder="Username" required />
    </FormItem>
    <FormItem label="Password">
      <Input type="password" v-model:value="password" placeholder="Password" required />
    </FormItem>
    <FormItem label="Role">
      <Input v-model:value="role" placeholder="Role" />
    </FormItem>
    <FormItem>
      <Button type="primary" html-type="submit" :loading="loading">{{ loading ? '加载中' : '登录' }}</Button>
    </FormItem>
  </Form>
  <Alert v-if="loginError" message="1" type="error" show-icon>{{ loginErrorMessage }}</Alert>
  <Alert v-else-if="isLoggedIn" message="2" type="success" show-icon>Logged in successfully!</Alert>
  <Alert v-if="isTokenReturn && !loginError && !isLoggedIn" message="3" type="success" show-icon ></Alert>
</template>




<script setup>




import { Form, FormItem, Input, Button, Space, Alert } from 'ant-design-vue';
import { ref } from 'vue';
import axios from 'axios';



const username = ref('')
const password = ref('')
const loginError = ref(false)
const loginErrorMessage = ref('')
const isLoggedIn = ref(false)
const token = ref('')
const loading = ref(false)// 控制加载状态
const role = ref('')
const isTokenReturn = ref('')



function login() {
  loading.value = true; // 开始加载
  const signInDto = {
    username: username.value,
    password: password.value,
    role: 'admin', // 根据需要设置角色
  };

  axios.post('http://localhost:3000/api/auth/login', signInDto)
    .then(response => {
      // 登录成功，处理响应数据
      isLoggedIn.value = true;
      isTokenReturn.value = true;
      loginError.value = false;
      token.value = response.data.token;


      setTimeout(() => {
        // 登录成功后的处理逻辑
        loading.value = false; // 停止加载
      }, 2000);


    })
    .catch(error => {
      // 登录失败，处理错误
      loginError.value = true;
      loginErrorMessage.value = error.message;
      isLoggedIn.value = false;
    });
}
</script>
