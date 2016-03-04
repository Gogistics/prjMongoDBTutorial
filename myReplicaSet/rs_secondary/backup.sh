# backup mongodb
while true
do
  # set timestamp
  timestamp=$(date +"%s")
  backup_file_name="mongodump-$timestamp"
  # backup mongodb
  mongodump --db test --username $backup_user --password $user_pwd --out /data/backup/$backup_file_name
  sleep 24h
done