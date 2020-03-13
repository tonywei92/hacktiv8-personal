<template>
  <div class="about">
    <div class="left-menu-dokter">
      <router-view />
    </div>
    <div class="right-menu-dokter">
      <div v-for="doctor in doctor" :key="doctor.id" class="dokter-card">
        <div class="dokter-card-body">
          <div class="dokter-card-img">
            <img :src="doctor.imageUrl" alt="dokter" />
          </div>
          <div class="dokter-card-info">
            <div class="dokter-card-name">
              <p>{{ doctor.name }}</p>
            </div>
            <div class="dokter-card-spesialis">
              <p class="mb-1" style="color:color:#999999;margin:0;">{{ doctor.spesialis }}</p>
            </div>
            <div class="dokter-card-bonus">
              <p style="color:#53565a;font-weight:bold; font-size:15px;margin:0;">
                GRATIS
                <span style="font-size:12px;">(3 konsultasi pertama)</span>
              </p>
            </div>
          </div>
        </div>
        <div class="dokter-card-footer">
          <div class="dokter-card-footer-rating mt-1 ml-4">
            <p>
              <i class="fas fa-thumbs-up mr-2"></i>
              {{ doctor.rating }}
            </p>
          </div>
          <div class="dokter-card-footer-chat mr-4">
            <button
              @click.prevent="chat(doctor.id)"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >CHAT</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <ChatModal />
  </div>
</template>

<script>
import ChatModal from './components/ChatModal'
export default {
  name: 'TanyaDokter',
  components: {
    ChatModal
  },
  methods: {
    fetchArticles () {
      this.$store.dispatch('fetchDoctors')
    },
    chat (id) {
      this.$router.push(`/tanya-dokter/${id}`)
    }
  },
  created () {
    this.fetchArticles()
  },
  computed: {
    doctors: function () {
      return this.$store.state.doctors
    }
  }
}
</script>

<style scoped>
.about {
  display: flex;
}
.left-menu-dokter {
  width: 40vw;
}
.right-menu-dokter {
  width: 60vw;
  display: flex;
  flex-wrap: wrap;
  padding: 20px auto;
  background-color: #f8f9fa;
}
.dokter-card {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 5px 5px #dfdfdf;
  transition: 1s;
  background-color: white;
  margin: 10px 20px;
}
.dokter-card-body {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #dfdfdf;
}
.dokter-card-body img {
  width: 100px;
  border-radius: 100%;
}
.dokter-card-info {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.dokter-card-footer {
  display: flex;
  padding: 10px;
  justify-content: space-between;
}
.dokter-card-footer button {
  border-radius: 15px;
  width: 100px;
  padding: 5px;
  border: none;
  background-color: #00afb1;
  color: white;
}
.dokter-card-footer button:hover {
  background-color: #dfdfdf;
  color: black;
}
@media (min-width: 1194px) and (max-width: 1290px) {
  .left-menu-dokter {
    width: 35vw;
  }
  .right-menu-dokter {
    width: 65vw;
  }
}
@media (min-width: 850px) and (max-width: 1193px) {
  .left-menu-dokter {
    width: 40vw;
  }
  .right-menu-dokter {
    width: 60vw;
    justify-content: center;
  }
}
</style>
