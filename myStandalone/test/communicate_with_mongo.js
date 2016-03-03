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

  // inser tnew doc
  insert_if_not_exist('test@gmail.com', {email: 'test@gmail.com', first_name: 'Alan', last_name: 'Tai', phone: '(408) 565-5133'});

  // update doc
  update_doc('test@gmail.com');

  // query
  find_docs({email:'test@gmail.com'});

  // close db once testing id done
  // db.close();
});
/* end of mongodb */

function insert_if_not_exist(arg_email, arg_user_info){
  users_collection.update({email: arg_email}, arg_user_info, {upsert: true}, function(err, doc){
    // return status
    if(!err){
      console.log('successfully insert new doc');
      console.log(doc);
    }else{
      console.log('failed to insert new doc');
    }
  });
}

function update_doc(arg_email){
  users_collection.updateOne({ email: arg_email }, { $set: { gender : 'M' } }, function(err, doc) {
    if(!err){
      console.log(doc);
    }else{
      console.log(err);
    }
  });  
}

function find_docs(arg_query){
  // get users
  users_collection.find(arg_query).toArray(function(err, docs){
    if(!err){
      console.log(docs);
    }else{
      console.log(err);
    }
  });
}