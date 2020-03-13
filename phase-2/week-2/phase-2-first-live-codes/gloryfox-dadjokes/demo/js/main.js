var app = new Vue({
  el: '#app',
  data: {
    id: '',
    joke: '',
    favorites: [],
  },
  methods: {
    fetchNewJoke() {
      this.id = '';
      this.joke = '...';

      const headers = { 'Accept': 'application/json' };
      axios
        .get('https://icanhazdadjoke.com', { headers })
        .then(({ data }) => {
          this.id = data.id;
          this.joke = data.joke;
        })
        .catch(err => {
          console.log('Error while fetching a new joke', err);
        });
    },
    fetchMyFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      this.favorites = favorites;
    },
    addToMyFavorites(id, joke) {
      this.favorites.unshift({ id, joke });
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      swal("Added to your favorites!", "", "success");
      this.fetchNewJoke();
    },
    removeFromMyFavorites(id) {
      this.favorites = this.favorites.filter(favorite => favorite.id !== id);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      swal("Poof!", "Removed that bad joke!", "success");
    }
  },
  created() {
    this.fetchNewJoke();
    this.fetchMyFavorites();
  },
});
