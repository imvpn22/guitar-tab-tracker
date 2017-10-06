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
          :to="{
            name: 'song-edit',
            params () {
              return {
                songId: song.id
              }
            }
          }">
          Edit
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="cyan"
          @click="setAsBookmark">
          Set As Bookmark
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan"
          @click="unsetAsBookmark">
          Un-Set As Bookmark
        </v-btn>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarkService from '@/services/BookmarkService'

export default {
  props: [
    'song'
  ],
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  data () {
    return {
      bookmark: null
    }
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        const bookmarks = (await BookmarkService.index({
          songId: this.song.id
        })).data

        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }

        console.log('bookmark: ', this.bookmark)
      } catch (err) {
        console.error('Error: On checking bookmark!', err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarkService.post({
          songId: this.song.id
        })).data
      } catch (err) {
        console.error('Error: cannot bookmark!', err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarkService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.error('Error: cannot bookmark!', err)
      }
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