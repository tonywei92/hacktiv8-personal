const axios = require('axios')
const mangaApi = axios.create({
    baseURL: 'http://localhost:3005/'
});

module.exports = mangaApi

// const axios = require('axios')
// const mangaApi = axios.create({
//     baseURL: 'http://localhost:3005/eyJhbGciOiJIUzI1NiJ9.d2lrYW55YWE.wly-px2JV8_G1IJSM-gSVAnlqTxB7DOwZ3bnDh3Bo1M'
// });

// module.exports = mangaApi