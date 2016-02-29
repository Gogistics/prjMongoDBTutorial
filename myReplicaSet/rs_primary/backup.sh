# backup mongodb
backup_user=test_user
user_pwd=standalonetestuser

while true
do
  # set timestamp
  timestamp=$(date +"%s")
  backup_file_name="mongodump-$timestamp"
  # backup mongodb
  mongodump --username $backup_user --password $user_pwd --out /data/backup/$backup_file_name
  sleep 6h
done