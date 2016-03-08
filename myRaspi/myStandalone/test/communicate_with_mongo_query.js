/* basic operation */
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    my_close_db_action,
    users_collection;
 
// Connection URL 
var url = 'mongodb://test_user:standalonetestuser@45.33.61.89:27025/test';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to the test server");
  my_db = db;
  users_collection  = db.collection('users');

  // create index
  users_collection.find({}).sort({email: 1}).toArray(function(err, docs){
    // show docs
    if(!err) console.log(docs);

    // close db once testing id done
    db.close();
  });
});
/* end of mongodb */
