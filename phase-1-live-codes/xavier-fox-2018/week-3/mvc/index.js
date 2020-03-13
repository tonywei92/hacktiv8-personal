const argv = process.argv.slice(2),
UserController = require('./controllers/UserController')
TweetController = require('./controllers/TweetController')
switch (argv[0]) {
  case 'user':
      if(argv[1] === "register"){
        UserController.register(argv[2],argv[3],argv[4])
      }else{
        UserController.findAll()
      }
  break;
  case 'tweet':
      if ( argv[1] === 'post') {
        const newTweet = argv.slice(3).join(' ')
        TweetController.postTweet(argv[2], newTweet)
      } else if ( argv[1] === 'update') {
        const newTweet = argv.slice(3).join(' ')
        TweetController.updateTweet(argv[2], newTweet)
      } else if ( argv[1] === 'delete') {
        TweetController.deleteTweet(argv[2])
      } else if ( argv[1] === 'search') {
        TweetController.searchTweet(argv[2], argv[3])
      } else {
        TweetController.getAllTweets()
      }
  default:
      // UserController.menu()
    break;
}