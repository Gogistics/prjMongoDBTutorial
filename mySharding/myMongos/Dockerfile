# my twitter stream server
FROM    mongo

# File Author / Maintainer
MAINTAINER Alan Tai <gogistics@gogistics-tw.com>

RUN    apt-get update
RUN    DEBIAN_FRONTEND=noninteractive apt-get install -yq apt-utils git build-essential
RUN    apt-get update
RUN    apt-get clean

# set env
ENV    backup_user=test_user user_pwd=shardingtestuser

# volume
VOLUME   /data/db

# add files to working dir
COPY    ./config.sh /my_scripts
COPY    ./mongodb-keyfile /opt/keyfile/mongodb-keyfile

# Install app dependencies
RUN     cd /opt/keyfile && chmod 600 mongodb-keyfile && chown 999 mongodb-keyfile

# working dir
WORKDIR /my_scripts

# expose ports
EXPOSE  27017

# entry command
CMD mongos --keyFile /opt/keyfile/mongodb-keyfile --configdb 45.56.85.129:27050,45.56.85.129:27051,45.56.85.129:27052 --chunkSize 100