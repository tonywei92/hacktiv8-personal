const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'crudbasic';
function createConnection() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, client) {
            if (err) {
                reject(err)
            }
            else {
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                resolve(db);
            }
        });
    })
}



module.exports = createConnection();