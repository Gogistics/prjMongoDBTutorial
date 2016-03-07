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
COPY   ./mongodb-keyfile /opt/keyfile/mongodb-keyfile
COPY   ./my_supervisord.conf /etc/supervisor/conf.d/

# add repo.
ADD    ./data/backup /data/backup

# Install app dependencies
RUN    cd /opt/keyfile && chmod 600 mongodb-keyfile && chown 999 mongodb-keyfile && chmod +x /my_scripts/backup.sh

# expose exports
EXPOSE  27017

# primary or secondary --dbpath /data/db
CMD mongod --dbpath /data/db --smallfiles --keyFile /opt/keyfile/mongodb-keyfile --replSet "rs2"
