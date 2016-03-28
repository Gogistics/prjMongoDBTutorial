/**/
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    my_close_db_action,
    users_collection,
    life_expectancy,
    us_economic_assistance,
    joined;
 
// Connection URL 
var url = 'mongodb://test_user:standalonetestuser@45.33.61.89:27025/test';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to the test server");
  my_db = db;
  users_collection  = db.collection('users');
  life_expectancy = db.collection('life_expectancy');
  us_economic_assistance = db.collection('us_economic_assistance');
  joined = db.collection('joined');


  var life_expect_map = function(){
    emit(this.country, {life_expectancy: this.age, dollars: 0});
  }

  var us_econ_map = function(){
    if(this.FY2009 !== undefined && this.FY2009 !== null){
      //
      emit(this.country_name, {
        dollars: this.FY2009,
        life_expectancy: 0});
    }
  }

  var my_reduce = function(key, values){
    //
    var result = {dollars: 0, life_expectancy: 0};
    values.forEach(function(value){
      //
      print(value.dollars);
      result.dollars += (value.dollars !== null) ? value.dollars : 0;
      if(result.life_expectancy === 0 && value.life_expectancy !== null){
        result.life_expectancy = value.life_expectancy;
      }
    });

    return result;
  }

  var res = life_expectancy.mapReduce(life_expect_map, my_reduce, {out: {reduce: 'joined'}});
  res = us_economic_assistance.mapReduce(us_econ_map, my_reduce, {out: {reduce: 'joined'}});
  var joined_res = joined.find({'value.dollars': {$gt:0}, 'value.life_expectancy': {$gt:0}}).sort({'value.life_expectancy':1}).limit(10);
// console.log(joined_res);

  // close db once testing id done
  // db.close();
});
/* end of mongodb */

