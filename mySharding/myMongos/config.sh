# mongos configuration
echo "use admin" >> authentication.js
echo "db.createUser({user:'siteUserAdmin',pwd:'shardingadmin',roles:[{role:'userAdminAnyDatabase',db:'admin'}]})" >> authentication.js
echo "db.auth('siteUserAdmin', 'shardingadmin')" >> authentication.js
echo "db.createUser({user:'siteRootAdmin',pwd:'shardingadmin',roles:[{role:'root',db:'admin'}]})" >> authentication.js
echo "db.auth('siteRootAdmin', 'shardingadmin')" >> authentication.js
echo "sleep(1000)" >> authentication.js
echo "sh.addShard('rs1/45.56.85.129:27041,45.56.85.129:27042,45.56.85.129:27043')" >> authentication.js
echo "sleep(2000)" >> authentication.js
echo "sh.addShard('rs2/45.56.85.129:27044,45.56.85.129:27045,45.56.85.129:27046')" >> authentication.js
echo "sleep(2000)" >> authentication.js
echo "sh.addShard('rs2/45.56.85.129:27047,45.56.85.129:27048,45.56.85.129:27049')" >> authentication.js
echo "sleep(2000)" >> authentication.js
echo "db.runCommand({enablesharding: 'test'})" >> authentication.js
echo "sleep(2000)" >> authentication.js
echo "db.runCommand({shardcollection: 'test.test_collection', key: {_id: 1}})" >> authentication.js
echo "sleep(2000)" >> authentication.js
echo "db.stats()" >> authentication.js
echo "db.printShardingStatus()" >> authentication.js
echo "use test" >> authentication.js
echo "sleep(1000)" >> authentication.js
echo "db.stats()" >> authentication.js
echo "db.printShardingStatus()" >> authentication.js

mongo < authentication.js