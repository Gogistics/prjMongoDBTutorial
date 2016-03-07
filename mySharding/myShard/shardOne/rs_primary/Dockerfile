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

# create volume; /data/db for replica set
VOLUME   /data/db

# add files to working dir
COPY   ./mongodb-keyfile /opt/keyfile/mongodb-keyfile
COPY   ./backup.sh ./config.sh /my_scripts/
COPY   ./my_supervisord.conf /etc/supervisor/conf.d/

# add repo.
ADD    ./data/backup /data/backup

# Install app dependencies
RUN    cd /opt/keyfile && chmod 600 mongodb-keyfile && chown 999 mongodb-keyfile && chmod +x /my_scripts/backup.sh

# set work dir
WORKDIR /my_scripts

# expose ports
EXPOSE  27017

# primary or secondary --dbpath /data/db
CMD mongod --dbpath /data/db --smallfiles --keyFile /opt/keyfile/mongodb-keyfile --replSet "rs0"
