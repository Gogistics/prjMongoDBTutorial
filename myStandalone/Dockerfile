# my twitter stream server
FROM    mongo

# File Author / Maintainer
MAINTAINER Alan Tai <gogistics@gogistics-tw.com>

# run commands
RUN    apt-get update
RUN    DEBIAN_FRONTEND=noninteractive apt-get install -yq apt-utils git build-essential supervisor
RUN    apt-get update
RUN    apt-get clean

# set env
ENV    backup_user=test_user user_pwd=standalonetestuser

# create volume; /data/db for replica set /data/arb for arbiter
VOLUME   /data/db

# add files to working dir
COPY   ./backup.sh ./config.sh /my_scripts/
COPY   ./mongodb-keyfile ./mongodb-encryption-keyfile /opt/keyfile/
COPY   ./mongodb-cert.key ./mongodb-cert.crt ./mongodb.pem /etc/ssl/
COPY   ./my_supervisord.conf /etc/supervisor/conf.d/

# directory
ADD   ./data/backup /data/backup

# Install app dependencies
RUN    chmod 600 /opt/keyfile/mongodb-keyfile && chown 999 /opt/keyfile/mongodb-keyfile
RUN    chmod 600 /opt/keyfile/mongodb-encryption-keyfile && chown 999 /opt/keyfile/mongodb-encryption-keyfile
RUN    chmod +x /my_scripts/backup.sh

# set work dir
WORKDIR /my_scripts

# expose ports
EXPOSE  27017

# standalone --dbpath /data/db
CMD mongod --dbpath /data/db --smallfiles --keyFile /opt/keyfile/mongodb-keyfile --enableEncryption --encryptionKeyFile /opt/keyfile/mongodb-encryption-keyfile --sslMode requireSSL --sslPEMKeyFile /etc/ssl/mongodb.pem
