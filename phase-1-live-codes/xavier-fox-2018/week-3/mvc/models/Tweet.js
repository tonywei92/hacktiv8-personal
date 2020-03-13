const db = require("./connection.js")

class Tweet {

  static readData(sql, callback) {
    let query = ''
    if (!sql) {
      query = `SELECT username, description, tweet_date as date FROM tweets
               LEFT JOIN users ON users.id = tweets.userId
      `
    } else {
      query = sql
    }
    let array = []
    db.each(query, function (err, data) {
      console.log
      if (err) {
        callback(err)
      } else {
        array.push(data)
      }
    }, function(err, data) {
      callback(null, array)
    })
  }
  static writeData(sql, newTweet, callback) {
    if (newTweet.length > 150 ) {
      callback("Maximum characater is 150")
    } else {
      db.run(sql, function (err) {
        if (err) {
          callback(new Error(err))
        } else {
          callback()
        }
      })
    }
  }

  static getDate() {
    const date = JSON.stringify(new Date().getHours())
    const month = JSON.stringify(new Date().getMinutes() + 1)
    const year = JSON.stringify(new Date().getSeconds())
    return `${date}:${month}:${year}`
  }
  static post(uid, newTweet, callback) {
    const sql = `INSERT INTO tweets (description, tweet_date, userId) VALUES ('${newTweet}', '${this.getDate()}', ${uid})`
    this.writeData(sql, newTweet, function (err) {
      if (err) {
        throw err
      } else {
        db.close()
        callback()
      }
    })
  }

  static update(tweetId, newTweet, callback ) {
    const sql = `
      UPDATE tweets
      SET description = '${newTweet}', tweet_date = '${this.getDate()}'
      WHERE id = ${tweetId};
    `
    this.writeData(sql, newTweet, function (err) {
      if (err) {
        throw err
      } else {
        db.close()
        callback()
      }
    })
  }

  static delete(tweetId, callback) {
    const sql = `
      DELETE FROM tweets
      WHERE id = ${tweetId}
    `
    db.run(sql, function(err) {
      if (err) {
        throw err
      } else {
        callback(null)
      }
    })
  }

  static searchTweet(title, value, callback) {
    let sql = `SELECT username, description, tweet_date, name FROM tweets
               INNER JOIN users ON users.id = tweets.userId
              `
    let where = ''
    if ( title === 'username' ) {
      where = `
                WHERE users.username = '${value}'
              `
    } else if ( title === 'description' ) {
      where = `
                WHERE tweets.description LIKE '%${value}%'
              `
    }
    this.readData(`${sql} ${where}`, function(err, data) {
      if (err) {
        throw err
      } else {
        db.close()
        callback(null, data)
      }
    })
  } 
}

module.exports = Tweet