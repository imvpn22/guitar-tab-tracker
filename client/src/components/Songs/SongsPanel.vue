<template>
  <panel title="Songs">
        <v-btn
          @click="navigateTo({name: 'songs-create'})"
          slot="action"
          fab
          dark
          small
          absolute
          right
          class="cyan">
          <v-icon>add</v-icon>
        </v-btn>
      <!--All songs will be displayed here -->
      <div
        v-for="song in songs"
        :key="song.id">

        <v-layout class="song">
          <v-flex class="xs4">
            <img class="song-image" :src="song.albumImageUrl" />
          </v-flex>

          <v-flex class="xs8">
            <div class="song-title">
              {{song.title}}
            </div>
            <div class="song-artist">
              {{song.artist}}
            </div>
            <div class="song-genre">
              {{song.genre}}
            </div>

            <v-btn
              dark
              class="cyan"
              @click="navigateTo({
                name: 'song',
                params: {
                  songId: song.id
                }
              })">
              View
            </v-btn>
          </v-flex>
        </v-layout>
        

      </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  components: {

  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    // Request backend to search the query
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding:  20px;
  overflow: hidden;
  margin: 20px auto;
  border-bottom:  1px solid #efefef;
}

.song-image {
  width: 100%;
  margin:  0 auto;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-grnre {
  font-size:  18px;
}

</style>
