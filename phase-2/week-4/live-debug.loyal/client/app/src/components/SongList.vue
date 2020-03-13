<template>
  <div class="container">
    <div class="row bg-primary rounded my-3 py-3 px-3 clickable text-white" v-for="(song, i) in songs"
      @click="setFeaturedVideo(i)"
      :key="i">
      <span>{{ song.name }} </span>
      <span class="ml-auto">By {{ song.artist }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongList',
  computed: {
    songs () {
      return this.$store.state.songs
    }
  },
  methods: {
    setFeaturedVideo (index) {
      this.$store.commit('SET_CURRENT_CHARACTER_VIDEO', index)
    }
  },
  created () {
    this.$store.dispatch('fetchSongs', this.$route.params.id)
  }
}
</script>

<style>

</style>
