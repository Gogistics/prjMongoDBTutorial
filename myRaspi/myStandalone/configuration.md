### Configuration Steps
NOTE: You can create your own Dockerfile or clone this repo. and use the existing Dockerfile to create a standalone container

------

**1. Create folders**

mkdir -p myReplicaSet/data/backup

**2. Create keyfile to enable Internal Authentication of MongoDB**

cd myReplicaSet

**Create keyfile, encryption keyfile, self-signed certificate**

openssl rand -base64 741 > /srv/mongodb/mongodb-keyfile

cat mongodb-cert.key mongodb-cert.crt > mongodb.pem

**Edit Dockerfile**

nano Dockerfile

**3. Build Images, run container, and set authentication**

docker build -t alantai/my_standalone_mongodb .

docker run --name mongo_standalone -p 27025:27017 -d alantai/my_standalone_mongodb

docker exec mongo_standalone bash ./config.sh

docker exec -d mongo_standalone bash ./backup.sh

docker exec -it mongo_standalone bash