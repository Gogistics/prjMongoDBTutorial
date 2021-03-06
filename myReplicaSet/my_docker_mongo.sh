#! /bin/sh

### BEGIN INIT INFO
# Required-Start: $remote_fs $syslog
# Required-Stop: $remote_fs $syslog
# Default-Start: 2 3 4 5
# Default-Stop: 0 1 6
# Short-Description: Simple script to start a mongo container
### END INIT INFO

# If you want a command to always run, put it here

# Carry out specific functions when asked to by the system
case "$1" in
  start)
    echo "Starting the docker containers running mongo replica set"
    # run application you want to start
    docker restart replica_set_0_primary replica_set_0_secondary replica_set_0_arb
    ;;
  stop)
    echo "Stopping the docker containers running mongo replica set"
    # kill application you want to stop
    killall mongod
    ;;
  *)
    echo "Usage: /etc/init.d/my_docker_mongo {start|stop}"
    exit 1
    ;;
esac

exit 0