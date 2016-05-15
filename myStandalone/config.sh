# config. shell
# set authentication
# test db
# strider db: db.createUser({user:'strider_user',pwd:'standalonestrider',roles:[{role:'readWrite',db:'my_strider'}]})
# strider db: db.createUser({user: "strider_admin", pwd: "standalonestrideradmin", roles: [{role: "dbOwner",db: 'my_strider'}]})
echo "use admin" >> authentication.js
echo "db.createUser({user:'siteUserAdmin',pwd:'standaloneadmin',roles:[{role:'userAdminAnyDatabase',db:'admin'}]})" >> authentication.js
echo "db.auth('siteUserAdmin', 'standaloneadmin')" >> authentication.js
echo "db.createUser({user:'siteRootAdmin',pwd:'standaloneadmin',roles:[{role:'root',db:'admin'}]})" >> authentication.js
echo "db.auth('siteRootAdmin', 'standaloneadmin')" >> authentication.js
echo "use test" >> authentication.js
echo "db.createUser({user:'test_user',pwd:'standalonetestuser',roles:[{role:'readWrite',db:'test'}]})" >> authentication.js
echo "db.auth('test_user', 'standalonetestuser')" >> authentication.js

# run script
mongo < authentication.js

# restart supervisord
/etc/init.d/supervisor restart