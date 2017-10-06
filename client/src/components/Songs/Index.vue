<template>
  <v-layout>
    <v-flex v-if="isUserLoggedIn" >
      <SongsBookmarks class="mb-3 xs-3" />
      <RecentlyViewedSongs class="xs-3"/>
    </v-flex>
    <v-flex class="ml-3">
      <SongsSearchPanel class="mb-3"/>
      <SongsPanel />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'

import {mapState} from 'vuex'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  data () {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    // do a request to backend for all the songs
    this.songs = (await SongsService.index()).data
    // console.log('songs', this.songs)
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
