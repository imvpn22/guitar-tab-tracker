<template>
  <div>
  <v-layout>
    <v-flex class="xs6">
      <panel title="Song metadata">
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
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
    <v-flex class="xs6 ml-3">
      <panel title="Youtube Video">
        <!-- Imbed youtube here -->
        Youtube
      </panel>
    </v-flex>
  </v-layout>

  <v-layout class="mt-3">
    <v-flex class="xs6">
      <panel title="Tabs">
        <textarea class="lyric-tab">
          {{song.tab}}
        </textarea>
      </panel>
    </v-flex>
    <v-flex class="xs6 ml-3">
      <panel title="Lyric">
        <textarea class="lyric-tab">
          {{song.lyric}}
        </textarea>
      </panel>
    </v-flex>
  </v-layout>

</div>

</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel
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

.lyric-tab{
  width: 100%;
  height: 800px;
  font-family: monospace;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow:  auto;
  padding:  20px; 
}
</style>
