# config. shell
# create authentication script
echo "rs.initiate()" >> authentication.js
echo "rs.status()" >> authentication.js
echo "sleep(3000)" >> authentication.js
echo "use admin" >> authentication.js
echo "db.createUser({user:'siteUserAdmin',pwd:'standaloneadmin',roles:[{role:'userAdminAnyDatabase',db:'admin'}]})" >> authentication.js
echo "db.auth('siteUserAdmin', 'standaloneadmin')" >> authentication.js
echo "db.createUser({user:'siteRootAdmin',pwd:'standaloneadmin',roles:[{role:'root',db:'admin'}]})" >> authentication.js
echo "db.auth('siteRootAdmin', 'standaloneadmin')" >> authentication.js
echo "use test" >> authentication.js
echo "db.createUser({user:'test_user',pwd:'standalonetestuser',roles:[{role:'readWrite',db:'test'}]})" >> authentication.js
echo "db.auth('test_user', 'standalonetestuser')" >> authentication.js
echo "use admin" >> authentication.js
echo "db.auth('siteRootAdmin', 'standaloneadmin')" >> authentication.js
echo "rs.status()" >> authentication.js
echo "rs.conf()" >> authentication.js
echo "sleep(1000)" >> authentication.js
echo "rs.add('45.56.85.129:27042')" >> authentication.js
echo "sleep(1000)" >> authentication.js
echo "rs.addArb('45.56.85.129:27043')" >> authentication.js
echo "sleep(1000)" >> authentication.js
echo "rs.status()" >> authentication.js
echo "cfg = rs.conf()" >> authentication.js
echo "cfg.members[0].host = '45.56.85.129:27041'" >> authentication.js
echo "rs.reconfig(cfg)" >> authentication.js
echo "sleep(2000)" >> authentication.js
echo "rs.conf()" >> authentication.js

# run script
mongo < authentication.js

# restart supervisord
/etc/init.d/supervisor restart