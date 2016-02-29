# config. shell
# set authentication
echo "use admin" >> authentication.js
echo "db.createUser({user:'siteUserAdmin',pwd:'standaloneadmin',roles:[{role:'userAdminAnyDatabase',db:'admin'}]})" >> authentication.js 
echo "db.auth('siteUserAdmin', 'standaloneadmin')" >> authentication.js
echo "db.createUser({user:'siteRootAdmin',pwd:'standaloneadmin',roles:[{role:'root',db:'admin'}]})" >> authentication.js
echo "db.auth('siteRootAdmin', 'standaloneadmin'); db.auth('siteRootAdmin', 'standaloneadmin')" >> authentication.js
echo "db.createUser({user:'test_user',pwd:'standalonetestuser',roles:[{role:'readWrite',db:'test'}]})" >> authentication.js

# restart supervisord
/etc/init.d/supervisor restart