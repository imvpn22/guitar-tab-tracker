import Api from '@/services/Api'

export default {
  post (song) {
    return Api().post('songs', song)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  update (song) {
    return Api().put(`songs/${song.id}`, song)
  },
  index (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  }
}
