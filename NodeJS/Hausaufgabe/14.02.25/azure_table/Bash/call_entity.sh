STORAGE_KEY=$(cat storage.txt)

az storage entity show \
    --table-name NewTable \
    --account-name brtablestorage \
    --account-key $STORAGE_KEY \
    --partition-key Kunde1 \
    --row-key 1
