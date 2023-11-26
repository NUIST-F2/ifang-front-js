<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="role">Role</label>
        <input type="text" id="role" v-model="role">
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      role: '',
      error: '',
      token: ''
    };
  },
  methods: {
    async login() {

      try {
        const response = await axios.post('/api/auth/login', {
          username: this.username,
          password: this.password,
          role: this.role,
        });


        const token = response.data.token;
        console.log('Token:', token);
        this.token = token;
        // 登录成功
        // 这里可以进行跳转或其他操作
        console.log('Login successful');
      } catch (error) {
        // 登录失败
        this.error = 'Invalid username or password';
      }
    }
  }
};
</script>

<style>
.login-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 5px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>