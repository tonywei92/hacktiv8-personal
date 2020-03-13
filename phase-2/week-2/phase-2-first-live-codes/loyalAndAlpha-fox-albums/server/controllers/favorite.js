const Favorite = require('../models/favorite');
const axios = require('axios');

class FavoriteController {
  static searchAlbum(req, res) {
    axios
     .get(`${process.env.API_URL}s=${req.params.artistName}`)
     .then(({ data }) => {
       let albums = data.album.map(album => {
         return {
           albumTitle: album.strAlbum,
           singer: album.strArtist,
           yearReleased: album.intYearReleased,
           description: album.strDescriptionEN || '-',
           coverAlbum: album.strAlbumThumb
         }
       })
       res.status(201).json(albums);
     })
     .catch(err => {
       console.log(err)
       res.status(500).json({
         err: 'Internal Server Error'
       });
     })
  }

  static createFav(req, res) {

    Favorite.create({
        albumTitle: req.body.albumTitle,
        singer: req.body.singer,
        yearReleased: req.body.yearReleased,
        description: req.body.description,
        coverAlbum: req.body.coverAlbum,
        userId: req.user.id
    })
     .then(fav => {
       res.status(201).json(fav)
     })
     .catch(err => {
       console.log(err)
       let error = {};
       if (err.errors.title) {
         error.email = err.errors.title.reason;
       } else if (err.response.data) {
         error.data = err.response.data
       }
       res.status(500).json({
         err: error
       });
     })
  }

  static findFav(req, res) {
    Favorite
     .find({})
     .then(fav => {
       res.status(200).json(fav);
     })
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     })
  }


  static remove(req, res) {
    Favorite.deleteOne({
      _id: req.params.id
    })
    .then(fav => {
      if (fav.deletedCount === 0) {
        res.status(404).json({ err: "Data not found" });
      } else {
        res.status(200).json({ _id: req.params.id });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
  }
}

module.exports = FavoriteController;
