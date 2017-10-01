<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <div class="pl-4 pr-4 pt-4 pb-4">
          <form
            name="register-form"
            autocomplete="off">
            <v-text-field
              name="email"
              label="Email"
              autofocus
              v-model="email">
            </v-text-field>

            <v-text-field
              name="password"
              label="Password"
              type="password"
              autocomplete="new-password"
              v-model="password">
            </v-text-field>

            <div class="error" v-html="error" />
            <br>

            <v-btn
              dark
              class="cyan"
              @click="register">
              Register
            </v-btn>
          </form>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  name: 'hello',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    // can watch for any changes for an element
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
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
  mounted () {
    // can mount a function if somthing changes
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
