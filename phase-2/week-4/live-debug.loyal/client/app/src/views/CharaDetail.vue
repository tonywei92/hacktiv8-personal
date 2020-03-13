<template>
  <div class="container" style="height: 95vh">
    <div class="row">
      <div class="rounded bg-turquoise text-white my-4 pt-2 col-5 mx-auto">
        <h3>{{ currentCharacter.name }}</h3>
      </div>
    </div>
    <div class="row bg-white rounded">
      <div class="col-5 p-0">
        <div class="embed-responsive embed-responsive-1by1">
          <iframe class="embed-responsive-item" :src="currentCharacter.featuredVideo" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-7">
        <div class="d-flex">
          <button class="btn bg-turquoise my-3 mx-2 clickable text-white" @click="showSongList">Song List</button>
          <button class="btn bg-turquoise my-3 mx-2 clickable text-white" @click="showComments">Comments</button>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharaDetail',
  computed: {
    currentCharacter () {
      return this.$store.state.currentCharacter
    }
  },
  methods: {
    showComments () {
      this.$router.push({ name: 'character comments' })
    },
    showSongList () {
      this.$router.push({ name: 'character song list' })
    }
  },
  created () {
    this.$store.dispatch('fetchCharacterDetail', this.$route.params.id)
  }
}
</script>

<style>

</style>
