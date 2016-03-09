# Tutorial for Learning MongoDB with Docker

This tutorial basically include three sections, the first section is about creating a standalone container, the second section is about creating a MongoDB replica set, and the third section is about creating a MongoDB sharding. Debian 7 and 8.1 are used in this tutorial.

[Slides on Google Drive](https://drive.google.com/folderview?id=0BzeAAvM5Ha9sNHh3SU4tYkRtYUU&usp=sharing)

------

Section 1. Standalone

In this section, a docker container which runs a standalone MongoDB will be created

======

Section 2. Replica Set

In this section, three docker conatiners which respectively run primary, secondary, and arbiter will be created

======

Section 3. Sharding

In this section, three groups including mongos group, config-servers group, and sharding group will be created

* mongos group include two containers which run two mongos

* config-server group include three containers which run config. servers

* sharding group include three shards which respectively run a replica set; a replica set include three containers which respectively run primary, secondary, and arbiter

======

Section 4. MongoDB with Docker on Raspberry Pi 2

* In this section, docker containers of MongoDB will be created on the Raspberry Pi (the purpose of MongoDB setup on Raspberry Pi is for the further IoT development)

======

Section 5. GraphQL end-point server with MongoDB

continue...

------

### Prerequisites

+ Operating System: Linux OS
+ Configuration Tools: docker

NOTE: If you are using Mac or Windows OS, you can install Vituralbox to run Linux OS

Ref. Links:

- [Install Docker on Linux](https://docs.docker.com/linux/step_one/)
- [Install Docker on Mac](https://docs.docker.com/engine/installation/mac/)
- [Install Docker on Windows](https://docs.docker.com/windows/step_one/)
- [Issue Solution (if you get error "Depends: init-system-helpers (>= 1.18~) but it is not installable")](https://github.com/docker/docker/issues/16878)
- [Docker Installation on Raspberry Pi](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)