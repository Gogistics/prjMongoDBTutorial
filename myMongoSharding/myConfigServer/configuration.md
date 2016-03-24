###Configuration of Config. Server

$ cd myConfigServer/

$ docker build -t my_configsvr .

$ docker run --name mongo_configsvr_0 -p 27050:27019 -d my_configsvr

$ docker run --name mongo_configsvr_1 -p 27051:27019 -d my_configsvr

$ docker run --name mongo_configsvr_2 -p 27052:27019 -d my_configsvr
