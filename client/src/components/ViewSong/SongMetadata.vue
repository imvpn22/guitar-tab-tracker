<template>
  <panel name="SongMetadata" title="Song Metadata">
    <v-layout class="song">
      <v-flex class="xs4">
        <img class="song-image" :src="song.albumImageUrl" />
        <div>{{song.album}}</div>
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
            name: 'song-edit',
            params: {
            songId: song.id
            }
          })">
          Edit
        </v-btn>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>

export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {

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