const { Movie, Review } = require('../models')
const { dayConverter, durationConverter } = require('../helpers/timeConverter')
const { searchFormat } = require('../helpers/searchFormat')

module.exports = {
  renderMoviesPage: async (req, res) => {
    try {
      let where = {}
      if (req.query.option && req.query.searchInput ) {
        const { option, searchInput } = req.query

        where = {
          [option]: searchFormat(option, searchInput)
        }
        
      }
      let movies = await Movie.findAll({
        where,
        attributes: ['id', 'title', 'duration', 'synopsis', 'rating', 'createdAt', 'updatedAt'],
        include: [{
          model: Review,
          attributes: ['id', 'rating'], 
        }],
       
      })
      
      res.locals.durationConverter = durationConverter
      res.locals.dayConverter = dayConverter
      res.render('./pages/movie.ejs', {
        data: movies,
       
      })
    } catch (error) {
      res.send(error)
    }
  },
  renderDetailMoviePage: async (req, res) => {
    try {
      const movie = await Movie.findOne({
        where: {
          id: req.params.id
        },
        include: [{
          model: Review
        }]
      })
      
      movie.Reviews = movie.Reviews.map((review) => {
        review.status = review.getStatus()
        return review
      })
      // res.send(movie)
      res.render('./pages/detail.ejs', {
        data: movie,
        validationErrors: req.query.validationErrors || null,
        info: req.query.info || null
      })
    } catch (error) {
      res.send(error)
    }
  }
}