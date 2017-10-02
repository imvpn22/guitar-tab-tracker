<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <div class="pl-4 pr-4 pt-4 pb-4">
          <form
            name="login-form"
            autocomplete="on">

            <!-- <i class="material-icons">email</i> -->
            <v-text-field
              autofocus
              name="email"
              label="Email"
              v-model="email">
            </v-text-field>

            <!-- <i class="material-icons">lock</i> -->
            <v-text-field
              name="password"
              label="Password"
              type="password"
              v-model="password">
            </v-text-field>

            <div class="error" v-html="error" />
            <br>

            <v-btn
              dark
              class="cyan"
              @click="login">
              Login
            </v-btn>
          </form>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'hello',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
