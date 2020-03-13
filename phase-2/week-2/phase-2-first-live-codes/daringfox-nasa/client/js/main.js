const baseUrl = 'http://localhost:3000'

var app = new Vue({
  el: '#app',
  data: {
    apod: {},
    favorites: [],
  },
  methods: {
    fetchNewApod() {
      axios
        .get(`${baseUrl}/astronomyPic`, { headers: { token: localStorage.getItem('token') }})
        .then(({ data }) => {
          this.apod = data;
        })
        .catch(err => {
          console.log('Error while fetching a new picture/video', err);
        });
    },
    fetchMyFavorites() {
      axios
      .get(`${baseUrl}/favorites`, { headers: { token: localStorage.getItem('token') }})
      .then(({ data }) => {
        this.favorites = data;
      })
      .catch(err => {
        console.log('Error while fetching favorites', err);
      });

    },
    addToMyFavorites(apod) {
      // this.favorites.unshift({ id, joke });
      // localStorage.setItem('favorites', JSON.stringify(this.favorites));
      axios
       .post(`${baseUrl}/favorites`, {
         date: apod.date,
         title: apod.title,
         url: apod.url,
         media_type: apod.media_type
       }, { headers: { token: localStorage.getItem('token') }})
       .then(({ data }) => {
         swal("Added to your favorites!", "", "success");
         this.fetchMyFavorites();
         this.fetchNewApod();
       })
       .catch(err => {
         console.log('Error while addToMyFavorites', err);
       });
    },
    removeFromMyFavorites(id) {
      axios
       .delete(`${baseUrl}/favorites/${id}`, { headers: { token: localStorage.getItem('token') }})
       .then(({ data }) => {
         swal("Poof!", "Removed that bad joke!", "success");
         this.fetchMyFavorites();
         this.fetchNewApod();
       })
       .catch(err => {
         console.log('Error while delete', err);
       });

    }
  },
  created() {
    // localStorage.setItem('token') = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZDI2MzVkMmVjNTk3YWMzNTI5NTc5NyIsImVtYWlsIjoiaWNoYUBtYWlsLmNvbSIsImlhdCI6MTU1NzI5MTg5Mn0.c-wa-vH70ymXy-fk-qLQdOtN0MQHXKLVINGnE-Cyq90"

    if (localStorage.getItem('token')) {
      this.fetchNewApod();
      this.fetchMyFavorites();
    }
  },
});
