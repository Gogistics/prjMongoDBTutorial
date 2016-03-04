### Configuration Steps

**1. Create folders**

mkdir -p myReplicaSet/data/backup

**2. Create keyfile to enable Internal Authentication of MongoDB**

cd myReplicaSet

openssl rand -base64 741 > /srv/mongodb/mongodb-keyfile

nano Dockerfile

NOTE: You can create your own Dockerfile or clone this repo. and use the existing Dockerfile to create a replica set

**3. Create Images**

cd /PATH-TO-rs_primary

docker build -t alantai/my_primary .

docker build -t alantai/my_secondary ./rs_secondary

docker build -t alantai/my_arb ./rs_arb