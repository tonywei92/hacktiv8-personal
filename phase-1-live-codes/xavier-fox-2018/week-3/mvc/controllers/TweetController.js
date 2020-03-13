const Tweet = require('../models/Tweet')
const View = require('../views')
class TweetController {

  static getAllTweets() {
    Tweet.readData(null, function(err, data) {
      if (err) {
        View.displayError(err)
      } else {
        View.displayTweets(data)
      }
    })
  }
  static postTweet (uid, newTweet) {
    Tweet.post(uid, newTweet, function(err) {
      if (err) {
        View.displayError(err)
      } else {
        View.displayData("success post tweet", newTweet)
      }
    })
  }
  static updateTweet (tweetId, updatedTweet) {
    Tweet.update(tweetId, updatedTweet, function(err) {
      if (err) {
        View.displayError(err)
      } else {
        View.displayData("success update tweet", updatedTweet)
      }
    })
  }

  static deleteTweet (tweetId) {
    Tweet.delete(tweetId, function (err) {
      if (err) {
        View.displayError(err)
      } else {
        View.displayData("success delete tweet", "tak ada info")
      }
    })
  }

  static searchTweet(title, value) {
    Tweet.searchTweet(title, value, function(err, data) {
      if (err) {
        View.displayError(err)
      } else {
        View.displayTweets(data, title)
      }
    })
  }
}

module.exports = TweetController