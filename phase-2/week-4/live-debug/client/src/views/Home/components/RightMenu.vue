<template>
  <div class="right-side">
    <h4>ARTIKEL KESEHATAN</h4>
    <div v-for="article in articles" :key="article.id" class="articel-card">
      <div class="article-img">
        <img src="article.imageUrl" alt="article image" />
      </div>
      <div class="article-title">
        <h3 style="margin:0 10px;">{{ article.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightMenu',
  methods: {
    fetchArticles () {
      this.$store.dispatch('fetchArticles')
    }
  },
  created: function () {
    this.fetchArticles()
  },
  computed: {
    articles () {
      return this.$store.state.articles
    }
  }
}
</script>

<style>
</style>
