<template>
  <div>
  <v-layout>
    <v-flex class="xs6">
      <SongMetadata :song='song'/>
    </v-flex>

    <v-flex class="xs6 ml-3">
      <YouTube :youtubeId="song.youtubeId" />
    </v-flex>
  </v-layout>

  <v-layout class="mt-3">
    <v-flex class="xs6">
      <Tab :song="song" />
    </v-flex>
    
    <v-flex class="xs6 ml-3">
      <Lyrics :song="song" />
    </v-flex>
  </v-layout>

</div>

</template>

<script>
import {mapState} from 'vuex'
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>

</style>
