/**/
/* mongodb */
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    users_collection;
 
// Connection URL 
var url = 'mongodb://test_user:standalonetestuser@45.33.61.89:27025/test';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to the test server");
  users_collection  = db.collection('users');
  db.close();
});
/* end of mongodb */