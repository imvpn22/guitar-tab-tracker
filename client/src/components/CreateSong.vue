<template>
  <v-layout>
    <v-flex xs4>
    <panel title="Song Metadata">
      <v-text-field
        label="Title"
        required
        :rules="[required]"
        v-model="song.title"
      ></v-text-field>

      <v-text-field
        label="Artist"
        required
        :rules="[required]"
        v-model="song.artist"
      ></v-text-field>

      <v-text-field
        label="Genre"
        required
        :rules="[required]"
        v-model="song.genre"
      ></v-text-field>

      <v-text-field
        label="Album"
        required
        :rules="[required]"
        v-model="song.album"
      ></v-text-field>

      <v-text-field
        label="ALbum Image URL"
        required
        :rules="[required]"
        v-model="song.albumImageUrl"
      ></v-text-field>

      <v-text-field
        label="Youtube ID"
        required
        :rules="[required]"
        v-model="song.youtubeId"
      ></v-text-field>
      
    </panel>
  </v-flex>

  <v-flex xs8>
    <panel title="Song Structure" class="ml-3">
      <v-text-field
        multi-line
        label="Lyric"
        required
        :rules="[required]"
        v-model="song.lyric"
      ></v-text-field>

      <v-text-field
        multi-line
        label="Tab"
        required
        :rules="[required]"
        v-model="song.tab"
      ></v-text-field>
    </panel>
    <br>
    <span class="error" v-if="error">
      {{error}}
    </span>
    <br>
    <v-btn
      dark
      class="cyan"
      @click="create">
      Insert Song
    </v-btn>
  </v-flex>
  </v-layout>

</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyric: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null

      // Check if all fields are filled
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill all information.'
        return
      }

      // call API
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log('Song create error', err)
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>

</style>