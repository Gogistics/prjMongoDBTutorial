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

  // insert docs for testing
  // if(test_docs){
  //   for(var ith = 0; ith < test_docs.length; ith++){
  //     console.log(test_docs[ith]);
  //   }
  // }

  // inser tnew doc
  // insert_if_not_exist('mary@hotmail.com', {email: 'mary@hotmail.com', first_name: 'Mary', last_name: 'Lisan', phone: '(650) 456-2311', birth_year: '1977', annual_salary: 87200});

  // update doc
  // update_doc( { first_name: "Eric" }, { annual_salary: 71200 }, 'set', false);

  // findAndModify
  find_and_modify_doc({email: 'cindy@gmail.com'}, {gender: "femmale"});

  // query
  // find_docs({});

  // close db once testing id done
  // close_db(db);
});

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
function update_doc(arg_query, arg_updated_doc, arg_operator, arg_upsert){
  var updated_doc;
  switch(arg_operator){
    case 'set':
      updated_doc = { $set: arg_updated_doc };
      break;
    default:
      updated_doc = arg_updated_doc;
      break;
  }

  users_collection.update(arg_query, updated_doc, { upsert: arg_upsert }, function(err, doc) {
    if(!err){
      console.log(doc);
    }else{
      console.log(err);
    }
    is_update_doc_done = true;
  });  
}

// find and modify
function find_and_modify_doc(arg_query, arg_updated_doc){
  users_collection.findAndModify(
    arg_query,
    [['_id','asc']],
    { $set: arg_updated_doc },
    { update: true },
    function(err, doc){
      if(!err){
        console.log(doc);
      }else{
        console.log(err);
      }
      my_db.close();
    }
  );
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
  if( is_update_doc_done &&
      is_find_docs){

    // clear timeout action
    if(my_close_db_action) clearTimeout(my_close_db_action);
    if(arg_db) arg_db.close();
  }else{
    my_close_db_action = setTimeout(close_db.bind(this, arg_db), 2000);
  }
}