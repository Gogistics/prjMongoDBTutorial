### Configuration Steps
NOTE: You can create your own Dockerfile or clone this repo. and use the existing Dockerfile to create a standalone container

------

**1. Create folders**

$ mkdir -p myReplicaSet/data/backup

**2. Create keyfile to enable Internal Authentication of MongoDB**

$ cd myReplicaSet

**Create keyfile, encryption keyfile, self-signed certificate**

$ openssl rand -base64 741 > /srv/mongodb/mongodb-keyfile

$ cat mongodb-cert.key mongodb-cert.crt > mongodb.pem

**Edit Dockerfile**

nano Dockerfile

**3. Build Images, run container, and set authentication**

$ docker build -t alantai/my_standalone_mongodb .

$ docker run --name mongo_standalone -p 27025:27017 -d alantai/my_standalone_mongodb

$ docker exec mongo_standalone bash ./config.sh

$ docker exec -d mongo_standalone bash ./backup.sh

$ docker exec -it mongo_standalone bash

**4. Create shell script, my_docker_mongo, under /etc/init.d/ to start and stop the containers **

$ chmod 755 /etc/init.d/my_docker_mongo

$ /etc/init.d/my_docker_mongo start

$ /etc/init.d/my_docker_mongo stop

$ update-rc.d my_docker_mongo defaults

**Import Data to DB**

EX:

mongoimport --db test -u test_user -p standalonetestuser --file ./us_economic_assistance.csv --headerline --type csv -c us_economic_assistance --drop --ignoreBlanks

mongoimport --db test -u test_user -p standalonetestuser --file life_expectancy.tsv --headerline --type tsv -c life_expectancy --drop --ignoreBlanks
