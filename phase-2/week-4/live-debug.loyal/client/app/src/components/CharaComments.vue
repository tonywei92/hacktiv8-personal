<template>
  <div style="height: 280px; position: relative;" class="mb-2">
    <div class="overflow-auto" v-if="!comments.length">
      There is no comment on this characters
    </div>
    <div class="overflow-auto" style="height: 200px" v-else>
      <div v-for="comment in comments" :key="comment.id" class="my-1 text-left pl-2">
        {{ comment.name }}: {{ comment.msg }}
      </div>
    </div>
    <div class="row">
      <form class="col-12" @submit.prevent="postComment" style="position: absolute; bottom: 0px; left: 0;">
        <input type="text" class="form-control mb-2 col-4" placeholder="your name here" v-model="name">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="your comment here" v-model="comment">
          <div class="input-group-append">
            <button class="btn btn-outline-success mx-auto" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharaComments',
  computed: {
    comments () {
      return this.$store.state.comments
    }
  },
  data () {
    return {
      name: '',
      comment: ''
    }
  },
  created () {
    this.$store.dispatch('fetchComments', this.$route.params.id)
  },
  methods: {
    postComment () {
      this.$store.dispatch('postComment', {
        name: this.name,
        msg: this.comment,
        characterId: this.$route.params.id
      })
        .then(_ => {
          this.name = ''
          this.comment = ''
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
