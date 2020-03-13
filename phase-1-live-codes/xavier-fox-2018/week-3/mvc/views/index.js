module.exports = {
  displayData(data,title) {
    console.log("Halo, " + data)
    console.log("Welcome To YuTweet !")
  },
  displayError(err){
    console.log("Oops something wrong !")
    console.log("=================")
    console.log(err)
  },
  displayMenu(){
    console.log(`
    
    YuTweet Menu : 
    ==============
    
    node main.js // tampilkan menu 
    node main.js user register {name} {email} {password} 
    node main.js user login {email} {password}
    
    node main.js tweet add {content}
    node main.js tweet update {postId}
    node main.js tweet delete {postId}
    node main.js tweet search {keyword}
    
    `)
  },

  displayTweets(data, title) {
    console.log("LIST TWEETS: ")
    console.log(data)
  }
}