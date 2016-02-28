# config. shell
mongod --dbpath /data/db --smallfiles --keyFile /opt/keyfile/mongodb-keyfile

# set authentication
mongo admin --eval "db.createUser({user:'siteUserAdmin',pwd:'standaloneadmin',roles:[{role:'userAdminAnyDatabase',db:'admin'}]}); db.auth('siteUserAdmin', 'standaloneadmin'); db.createUser({user:'siteRootAdmin',pwd:'standaloneadmin',roles:[{role:'root',db:'admin'}]}); db.auth('siteRootAdmin', 'standaloneadmin'); db.auth('siteRootAdmin', 'standaloneadmin'); db.createUser({user:'test_user',pwd:'standalonetestuser',roles:[{role:'readWrite',db:'test'}]});"

# restart supervisord
/etc/init.d/supervisor restart