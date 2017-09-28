<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email"/> <br><br>
    <input type="password" name="password" placeholder="password" v-model="password"/> <br><br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'hello',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    // can watch for any changes for an element
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password

      })
      console.log(response.data)
    }
  },
  mounted () {
    // can mount a function if somthing changes
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
