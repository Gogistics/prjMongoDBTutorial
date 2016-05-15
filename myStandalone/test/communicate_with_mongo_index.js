/* basic operation
* Ref. https://docs.mongodb.org/manual/reference/method/db.collection.createIndex/
*/
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    my_close_db_action,
    users_collection;
 
// Connection URL 
// var url = 'mongodb://strider_admin:standalonestrideradmin@45.79.106.150:27025/my_strider';
var url = 'mongodb://fund364_user:MIOEVCjiohCWEviVERuer32R34R11@45.79.106.150:27025/fund364';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to the fund364 server on Linode");
  my_db = db;

  // close db once testing id done
  db.close();
});
/* end of mongodb */
