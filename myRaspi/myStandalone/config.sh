# config. shell
# set authentication
echo "use admin" >> authentication.js
echo "db.addUser({user:'siteUserAdmin',pwd:'standaloneadmin',userSource:'admin',roles:['userAdminAnyDatabase']})" >> authentication.js
echo "db.auth('siteUserAdmin', 'standaloneadmin')" >> authentication.js
echo "db.addUser({user:'siteRootAdmin',pwd:'standaloneadmin',userSource:'admin',roles:['userAdmin']})" >> authentication.js
echo "db.auth('siteRootAdmin', 'standaloneadmin')" >> authentication.js
echo "use test" >> authentication.js
echo "db.addUser({user:'test_user',pwd:'standalonetestuser',userSource:'test',roles:['readWrite']})" >> authentication.js
echo "db.auth('test_user', 'standalonetestuser')" >> authentication.js

# run script
mongo < authentication.js

# restart supervisord
/etc/init.d/supervisor restart