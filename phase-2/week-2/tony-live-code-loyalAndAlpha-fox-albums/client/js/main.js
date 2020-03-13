const baseUrl = 'http://localhost:3000'

var app = new Vue({
  el: '#app',
  data: {
    email: null,
    password: null,
    albums: [],
    favorites: [],
    artistName: ''
  },
  methods: {
    login(e) {
      e.preventDefault();
      axios.post(`${baseUrl}/login`, { email: this.email, password: this.password })
        .then(response => {
          localStorage.setItem('token', response.data.token)
        })
        .catch(err => console.log(`Error:`, err))
    },
    searchAlbum() {
      const token = localStorage.getItem('token') === null ? "" : localStorage.getItem('token');
      axios
        .get(`${baseUrl}/album/${this.artistName}`, { headers: { token } })
        .then(({ data }) => {
          this.albums = data;
        })
        .catch(err => {
          console.log('Error:', err);
        });
    },
    fetchMyFavorites() {
      const token = localStorage.getItem('token') === null ? "" : localStorage.getItem('token');
      axios
        .get(`${baseUrl}/favorites`, { headers: { token } })
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
      const token = localStorage.getItem('token') === null ? "" : localStorage.getItem('token');

      axios
        .post(`${baseUrl}/favorites`, {
          albumTitle: album.albumTitle,
          singer: album.singer,
          yearReleased: album.yearReleased,
          description: album.description,
          coverAlbum: album.coverAlbum
        }, { headers: { token } })
        .then(({ data }) => {
          swal("Added to your favorites!", "", "success");
          this.fetchMyFavorites();
        })
        .catch(err => {
          console.log('Error while addToMyFavorites', err);
        });
    },
    removeFromMyFavorites(id) {
      const token = localStorage.getItem('token') === null ? "" : localStorage.getItem('token');
      axios
        .delete(`${baseUrl}/favorites/${id}`, { headers: { token } })
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
