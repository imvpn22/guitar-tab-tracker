<template>
  <panel title="search">
    <v-text-field
      autofocus
      name="search"
      label="search by Song title, artist, genre or album"
      v-model="search">
    </v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  conponents: {

  },
  watch: {
    search: _.debounce(async function (value) {
      // console.log(value)
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 300),
    // Put value in search box a/c to Search URL
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
        // console.log(value)
      }
    }
  }
}
</script>

<style scoped>

</style>