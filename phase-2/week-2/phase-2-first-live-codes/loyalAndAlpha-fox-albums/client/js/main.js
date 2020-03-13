const baseUrl = 'http://localhost:3000'

var app = new Vue({
  el: '#app',
  data: {
    albums: [],
    favorites: [],
    artistName: ''
  },
  methods: {
    searchAlbum(){
      console.log("prossecsing.....");
      axios
        .get(`${baseUrl}/album/${this.artistName}`, { headers: { token: localStorage.getItem('token') }})
        .then(({ data }) => {
          this.albums = data;
        })
        .catch(err => {
          console.log('Error:', err);
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
    addToMyFavorites(album) {
      // this.favorites.unshift({ id, joke });
      // localStorage.setItem('favorites', JSON.stringify(this.favorites));
      axios
       .post(`${baseUrl}/favorites`, {
         albumTitle: album.albumTitle,
         singer: album.singer,
         yearReleased: album.yearReleased,
         description: album.description,
         coverAlbum: album.coverAlbum
       }, { headers: { token: localStorage.getItem('token') }})
       .then(({ data }) => {
         swal("Added to your favorites!", "", "success");
         this.fetchMyFavorites();
       })
       .catch(err => {
         console.log('Error while addToMyFavorites', err);
       });
    },
    removeFromMyFavorites(id) {
      axios
       .delete(`${baseUrl}/favorites/${id}`, { headers: { token: localStorage.getItem('token') }})
       .then(({ data }) => {
         swal("Poof!", "Remove album!", "success");
         this.fetchMyFavorites();
       })
       .catch(err => {
         console.log('Error while delete', err);
       });
    }
  },
  created() {
    // localStorage.setItem('token') = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZDI2MzVkMmVjNTk3YWMzNTI5NTc5NyIsImVtYWlsIjoiaWNoYUBtYWlsLmNvbSIsImlhdCI6MTU1NzI5MTg5Mn0.c-wa-vH70ymXy-fk-qLQdOtN0MQHXKLVINGnE-Cyq90"

    if (localStorage.getItem('token')) {
      this.fetchMyFavorites();
    }
  },
})
