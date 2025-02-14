STORAGE_KEY=$(cat storage.txt)

az storage entity insert \
    --table-name NewTable \
    --account-name brtablestorage \
    --account-key $STORAGE_KEY \
    --entity PartitionKey=Kunde1 RowKey=1 Name="Dimi" Alter=30
