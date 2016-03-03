/* basic operation */
/* mongodb */
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    test_docs = require('jsonfile').readFileSync('./test_docs.json'),
    my_close_db_action,
    my_db,
    users_collection;
 
// Connection URL 
var url = 'mongodb://test_user:standalonetestuser@45.33.61.89:27025/test';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to the test server");
  my_db = db;
  users_collection  = db.collection('users');

  if(test_docs){
    for(var ith = 0; ith < test_docs.length; ith++){
      console.log(test_docs[ith]);
    }
  }

  // inser tnew doc
  insert_if_not_exist('eric@hotmail.com', {email: 'eric@hotmail.com', first_name: 'Eric', last_name: 'Kent', phone: '(610) 113-2311', birth_year: '1977'});

  // update doc
  update_doc('mary@gmail.com');

  // query
  find_docs({});

  // close db once testing id done
  close_db(db);
});
/* end of mongodb */
var is_insert_if_not_exist_done = false;
function insert_if_not_exist(arg_email, arg_user_info){
  users_collection.update({email: arg_email}, arg_user_info, {upsert: true}, function(err, doc){
    // return status
    if(!err){
      console.log('successfully insert new doc');
      console.log(doc);
    }else{
      console.log('failed to insert new doc');
    }
    is_insert_if_not_exist_done = true;
  });
}

// update docs
var is_update_doc_done = false;
function update_doc(arg_email){
  users_collection.updateOne({ email: arg_email }, { $set: { gender : 'F' } }, function(err, doc) {
    if(!err){
      console.log(doc);
    }else{
      console.log(err);
    }
    is_update_doc_done = true;
  });  
}

// find docs
var is_find_docs = false;
function find_docs(arg_query){
  // get users
  users_collection.find(arg_query).toArray(function(err, docs){
    if(!err){
      console.log(docs);
    }else{
      console.log(err);
    }
    is_find_docs = true;
  });
}

// close db if all operations are done
function close_db(arg_db){
  if( is_insert_if_not_exist_done &&
      is_update_doc_done &&
      is_find_docs){
    // clear timeout action
    if(my_close_db_action) clearTimeout(my_close_db_action);
    if(arg_db) arg_db.close();
  }else{
    my_close_db_action = setTimeout(close_db.bind(this, arg_db), 2000);
  }
}