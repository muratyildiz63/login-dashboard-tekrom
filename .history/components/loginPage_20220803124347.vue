<template>
  <div>
    <form @submit.prevent="login">
      <input v-model="userName" type="text" />
      <input v-model="UserPassword" type="password" />
      <button>Giriş</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      userName: null,
      UserPassword: null,
      userInfo: null,
    }
  },

  methods: {
  async  login() {
   
      const userData = {
        username: this.userName,
        password: this.UserPassword,
      }
      const response = await axios.get('http://localhost:3000/user', userData)
      console.log(response.data)
    },
  },
}
</script>