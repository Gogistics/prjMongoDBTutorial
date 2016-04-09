/* set/unset
* Ref. https://docs.mongodb.org/manual/reference/method/db.collection.createIndex/
*/
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

  // find users
  // users_collection.find({email: 'cindy@gmail.com'}).toArray(function(err, docs){
  //   //
  //   if(!err){
  //     console.log(docs);
  //   }else{
  //     console.log(err);
  //   }
  //   // close db once testing id done
  //   db.close();
  // });

  // set new key-val pair
  // users_collection.update({email: 'cindy@gmail.com'}, {$set: {gender: "female"}}, function(err, doc){
  //   //
  //   if(!err){
  //     console.log(doc);
  //   }else{
  //     console.log(err);
  //   }
  //   // close db once testing id done
  //   db.close();
  // });

  // update multiple docs by giving { multi: true }
  // users_collection.update({email: 'cindy@gmail.com'}, {$set: {gender: "female"}}, { multi: true }, function(err, result){
  //   //
  //   if(!err){
  //     console.log(result);
  //   }else{
  //     console.log(err);
  //   }
  //   // close db once testing id done
  //   db.close();
  // });

  // unset
  users_collection.update({email: 'cindy@gmail.com'}, {$unset: {gender: ""}}, function(err, result){
    //
    if(!err) console.log(result);
    db.close();
  });
});
/* end of mongodb */
