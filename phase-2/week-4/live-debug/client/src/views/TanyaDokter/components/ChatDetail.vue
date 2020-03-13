<template>
  <div class="chat-detail">
      <div class="dokter-chat">
          <div class="dokter-chat-image">
              <div>
                  <img :src="dokterData.imageUrl" alt="dokter">
              </div>
              <div class="mx-4">
                  <h5>{{ dokterData.name }}</h5>
              </div>
          </div>
          <div class="dokter-chat-body">
              <div v-for="(msg,i) in dokterData.messages" :key="i"  class="dokter-msg mt-2">
                    <h5 class="m-0">
                        <i class="fas fa-user"></i>
                        {{ msg.name }}
                    </h5>
                    <p class="m-0 ml-4">{{msg.msg}}</p>
              </div>
          </div>
          <div class="dokter-chat-footer">
              <form @submit.prevent="send">
                <input v-model="msg" class="form-control" type="text" placeholder="your message">
                <input class="mt-2 btn btn-primary" type="submit" value="Send">
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ChatDetail',
  data () {
    return {
      dokterData: {},
      msg: ''
    }
  },
  watch: {
    $route: function (val) {
      this.getDetail()
    }
  },
  computed: {
    name () {
      return this.$store.state.user.name
    }
  },
  methods: {
    send () {
      const id = this.$route.params.id
      this.$store.dispatch('getDetailDokter', id)
        .then(({ data }) => {
          const pesan = [{
            name: this.$store.state.user.name,
            msg: this.msg
          }]
          for (let i = 0; i < data.messages.length; i++) {
            pesan.unshift(data.messages[i])
          }
          const payload = {
            name: data.name,
            spesialis: data.spesialis,
            id: data.id,
            imageUrl: data.imageUrl,
            rating: data.rating,
            messages: pesan
          }
          this.$store.dispatch('sendMessage', payload)
            .then(_ => {
              this.getDetail()
            })
          this.msg = ''
        })
    },
    getDetail () {
      const id = this.$route.params.id
      this.$store.dispatch('getDetailDokter', id)
        .then(({ data }) => {
          this.dokterData = data
        })
    }
  },
  created () {
    this.getDetail()
  }
}
</script>

<style scoped>
.chat-detail {
    margin: 20px 20px 0 20px;
}
.dokter-chat {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80vh;
    overflow: auto;
}
.dokter-chat-image {
    display: flex;
    align-items: center;
}
.dokter-chat-image img {
    border-radius: 100%;
    width: 100px;
}
.dokter-chat-body {
    border-radius: 15px;
    border: 1px solid #dfdfdf;
    padding: 10px;
    height: 60%;
}
</style>
