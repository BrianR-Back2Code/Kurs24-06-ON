STORAGE_KEY=$(az storage account keys list \
    --resource-group rg-24-06-on-rechlin-brian \
    --account-name brtablestorage \
    --query "[0].value" --output tsv)
