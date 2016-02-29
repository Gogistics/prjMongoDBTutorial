### Configuration Steps

**1. Create folders**

mkdir -p myReplicaSet/data/backup

**2. Create keyfile to enable Internal Authentication of MongoDB**

cd myReplicaSet

openssl rand -base64 741 > /srv/mongodb/mongodb-keyfile

nano Dockerfile

NOTE: You can create your own Dockerfile or clone this repo. and use the existing Dockerfile to create a standalone container

**3. Build Images, run container, and set authentication**

docker build -t alantai/my_standalone_mongodb .

docker run --name mongo_standalone -p 27017:27017 -d alantai/my_standalone_mongodb

docker exec mongo_standalone bash ./config.sh

docker exec -it mongo_standalone bash