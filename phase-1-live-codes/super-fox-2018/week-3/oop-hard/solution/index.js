const util = require('util');
const RepoHub = require('./RepoHub');

const repohub = new RepoHub;

repohub.createUser({
  fullName: 'Dimitri',
  username: 'initialdmitri',
  password: 'secret'
});

repohub.createRepository('initialdmitri', 'password', 'live-code-week3');
// Incorrect Username/Password

repohub.createRepository('initialdmitri', 'secret', 'live-code-week3');
repohub.createRepository('initialdmitri', 'secret', 'live-code-week4');

repohub.createRepository('kubido', 'secret', 'live-code-week4');
// Incorrect Username/Password

repohub.userCommit('initialdmitri', 'sec', 'live-code-week3');
// Incorrect Username/Password

repohub.userCommit('initialdmitri', 'secret', 'live-code-week3');
repohub.userCommit('initialdmitri', 'secret', 'live-code-week3');

repohub.userCommit('initialdmitri', 'secret', 'live-code-week10');
// Repository doesn't exist

repohub.deleteRepository('initialdmitri', 'secre', 'live-code-week3');
// Incorrect Username/Password

repohub.deleteRepository('initialdmitri', 'secret', 'live-code-week3');

console.log(util.inspect(repohub, false, null))
