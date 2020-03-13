const Nasa = require('../models/nasa');
const axios = require('axios');
const { getRandomDate } = require('../helpers/util');

class NasaController {
  static generateApod(req, res) {
    axios
     .get(`${process.env.NASA_URL}?api_key=${process.env.NASA_API_KEY}&date=${getRandomDate()}`)
     .then(({ data }) => {
       res.status(201).json(data);
     })
     .catch(err => {
       console.log(err)
       res.status(500).json({
         err: 'Internal Server Error'
       });
     })
  }

  static createApod(req, res) {
    console.log("createeeee");
    Nasa.create({
        date: req.body.date,
        title: req.body.title,
        url: req.body.url,
        mediaType: req.body.media_type,
        userId: req.user.id
    })
     .then(apod => {
       res.status(201).json(apod)
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

  static findApod(req, res) {
    Nasa
     .find({})
     .then(apod => {
       res.status(200).json(apod);
     })
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     })
  }


  static remove(req, res) {
    Nasa.deleteOne({
      _id: req.params.id
    })
    .then(apod => {
      if (apod.deletedCount === 0) {
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

module.exports = NasaController;
