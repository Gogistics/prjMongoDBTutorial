/* 2016 TW Election */
/* basic operation
* Ref. https://docs.mongodb.org/manual/reference/method/db.collection.createIndex/
*/
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    twitter_tweets,
    facebook_posts_collection;
 
// Connection URL 
var url = 'mongodb://swarm_user:2016twelection@ec2-52-33-51-105.us-west-2.compute.amazonaws.com:27017/2016_tw_election';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to the test server");
  my_db = db;
  twitter_tweets = db.collection('twitter_tweets');
  facebook_posts_collection = db.collection('facebook_politicians_posts');

  /* aggregation pipeline 1. */
  // twitter_tweets.aggregate([{$sort: {"tweet.retweet_count": -1}}]).limit(5).toArray(function(err, docs){
  //   //
  //   if(!err){
  //     console.log(docs);
  //   }else{
  //     console.log(err);
  //   }
  //   // close db once testing id done
  //   db.close();
  // });

  /* aggregation pipeline 2. */
  facebook_posts_collection.find().sort({query_date: -1}).limit(2).toArray(function(err, docs){
    if(!err){
      console.log(docs[0]['data'][0]);
    }else{
      console.log(err);
    }
    // close db once testing id done
    db.close();
  });
});
/* end of mongodb */
