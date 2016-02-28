# my twitter stream server
FROM    mongo

# File Author / Maintainer
MAINTAINER Alan Tai <gogistics@gogistics-tw.com>

RUN    apt-get update
RUN    DEBIAN_FRONTEND=noninteractive apt-get install -yq apt-utils git build-essential supervisor
RUN    apt-get update
RUN    apt-get clean

# create volume; /data/db for replica set /data/arb for arbiter
VOLUME   /data/db

# add files to working dir
COPY   ./mongodb-keyfile /opt/keyfile/mongodb-keyfile
COPY   ./backup.sh ./config.sh /my_scripts/
COPY   ./my_supersivord.conf /etc/supervisor/conf.d/
COPY   ./data/backup /data/backup

# Install app dependencies
RUN    cd /opt/keyfile && chmod 600 mongodb-keyfile && chown 999 mongodb-keyfile && chmod +x /my_scripts/backup.sh

EXPOSE  27017

# primary or secondary --dbpath /data/db
CMD sh /my_scripts/config.sh
