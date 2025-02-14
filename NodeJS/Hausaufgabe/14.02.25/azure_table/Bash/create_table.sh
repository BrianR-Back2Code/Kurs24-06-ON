STORAGE_KEY=$(cat storage.txt)

az storage table create \
    --name NewTable \
    --account-name brtablestorage \
    --account-key $STORAGE_KEY
