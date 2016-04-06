/* basic operation
* Ref. https://docs.mongodb.org/manual/reference/method/db.collection.createIndex/
*/
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    my_close_db_action,
    life_expectancy_collection,
    us_economic_assistance_collection;
 
// Connection URL 
var url = 'mongodb://test_user:standalonetestuser@45.33.61.89:27025/test';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to the test server");
  my_db = db;
  life_expectancy_collection  = db.collection('life_expectancy');
  us_economic_assistance_collection = db.collection('us_economic_assistance');

  // aggregation pipeline with regex; first do match and the requirement is age greater than 75 and country name start with capital M, and then group by the result by country name and do sum
  life_expectancy_collection.aggregate([{$match: {age: {$gt: 75}, country: /^M/}}, {$group: {_id: "$country", total: {$sum: "$age"}}}]).toArray(function(err, docs){
    if(!err){
      console.log(docs);
    }else{
      console.log(err);
    }
    // close db once testing id done
    db.close();
  });
});
/* end of mongodb */
