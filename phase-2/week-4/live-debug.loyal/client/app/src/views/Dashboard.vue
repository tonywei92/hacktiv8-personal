<template>
  <div>
    <router-view />
    <div class="container pb-5">
      <div
        class="row mt-5 rounded clickable"
        v-for="char in characters"
        :key="char.id"
        style="border: 1px solid lightgrey; background-color: white"
        @click="seeDetail(char.id)"
      >
        <div class="col-3 p-0">
          <img
            :src="char.img"
            :alt="char.name"
            class="cover"
          >
        </div>
        <div class="col-9">
          <div class="mt-3" style="font-weight: 250; font-size: 2rem">{{ char.name }}</div>
          <div class="mb-3" style="font-weight: 250; font-size: 1.2rem">Voice: {{ char.voice }}</div>
          <div class="card-text">{{ char.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: function () {
    return {}
  },
  computed: {
    characters () {
      return this.$store.state.characters
    }
  },
  methods: {
    seeDetail (id) {
      this.$router.push(`/${id}`)
    }
  },
  created () {
    this.$store.dispatch('fetchCharacters')
  }
}
</script>

<style>

</style>
