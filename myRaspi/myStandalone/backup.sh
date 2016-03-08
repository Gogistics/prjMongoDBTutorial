# backup mongodb
while true
do
  # set timestamp
  timestamp=$(date +"%s")
  backup_file_name="mongodump-$timestamp"
  # backup mongodb; username: test_user; password: standalonetestuser
  mongodump --db test --username test_user --password standalonetestuser --out /data/backup/$backup_file_name
  sleep 12h
done