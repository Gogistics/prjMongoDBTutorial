# config. shell
# create authentication script
echo "use admin" >> authentication.sh
echo "db.createUser({user:'siteUserAdmin',pwd:'standaloneadmin',roles:[{role:'userAdminAnyDatabase',db:'admin'}]})" >> authentication.sh
echo "db.auth('siteUserAdmin', 'standaloneadmin')" >> authentication.sh
echo "db.createUser({user:'siteRootAdmin',pwd:'standaloneadmin',roles:[{role:'root',db:'admin'}]})" >> authentication.sh
echo "db.auth('siteRootAdmin', 'standaloneadmin'); db.auth('siteRootAdmin', 'standaloneadmin')" >> authentication.sh
echo "db.createUser({user:'test_user',pwd:'standalonetestuser',roles:[{role:'readWrite',db:'test'}]})" >> authentication.sh

# run script
mongo < authentication.sh

# restart supervisord
/etc/init.d/supervisor restart