### **Anleitung für PowerShell**

#### 1. Erstellen der VM
Führe den folgenden Befehl aus, um die VM zu erstellen:
```powershell
az vm create `
    --resource-group "Deine Ressourcengruppe" `
    --name my-vm `
    --public-ip-sku Standard `
    --image Ubuntu2204 `
    --admin-username azureuser `
    --generate-ssh-keys `
    --size Standard_B1s
```

#### 2. NGINX installieren
Verwende eine Custom Script Extension, um NGINX auf der VM zu installieren:
```powershell
az vm extension set `
    --resource-group "Deine Ressourcengruppe" `
    --vm-name my-vm `
    --name customScript `
    --publisher Microsoft.Azure.Extensions `
    --version 2.1 `
    --settings '{"fileUris":["https://raw.githubusercontent.com/MicrosoftDocs/mslearn-welcome-to-azure/master/configure-nginx.sh"]}' `
    --protected-settings '{"commandToExecute": "./configure-nginx.sh"}'
```

#### 3. Öffentliche IP-Adresse abrufen
Speichere die öffentliche IP-Adresse der VM in einer Variablen und zeige sie an:
```powershell
$IPADDRESS = (az vm list-ip-addresses `
    --resource-group "Deine Ressourcengruppe" `
    --name my-vm `
    --query "[].virtualMachine.network.publicIpAddresses[*].ipAddress" `
    --output tsv)

Write-Output $IPADDRESS
```

#### 4. NSG auflisten
Zeige die Network Security Groups in der Ressourcengruppe an:
```powershell
az network nsg list `
    --resource-group "Deine Ressourcengruppe" `
    --query '[].name' `
    --output tsv
```

#### 5. NSG-Regeln anzeigen
Liste die vorhandenen Regeln für die NSG der VM auf:
```powershell
az network nsg rule list `
    --resource-group "Deine Ressourcengruppe" `
    --nsg-name my-vmNSG `
    --query '[].{Name:name, Priority:priority, Port:destinationPortRange, Access:access}' `
    --output table
```

#### 6. Regel für HTTP-Traffic erstellen
Erstelle eine Regel, um HTTP-Traffic (Port 80) zuzulassen:
```powershell
az network nsg rule create `
    --resource-group "Deine Ressourcengruppe" `
    --nsg-name my-vmNSG `
    --name allow-http `
    --protocol tcp `
    --priority 100 `
    --destination-port-range 80 `
    --access Allow
```

---

### **Anleitung für Bash**

#### 1. Erstellen der VM
Führe den folgenden Befehl aus, um die VM zu erstellen:
```bash
az vm create \
    --resource-group "Deine Ressourcengruppe" \
    --name my-vm \
    --public-ip-sku Standard \
    --image Ubuntu2204 \
    --admin-username azureuser \
    --generate-ssh-keys \
    --size Standard_B1s
```

#### 2. NGINX installieren
Installiere NGINX mit einer Custom Script Extension:
```bash
az vm extension set \
    --resource-group "Deine Ressourcengruppe" \
    --vm-name my-vm \
    --name customScript \
    --publisher Microsoft.Azure.Extensions \
    --version 2.1 \
    --settings '{"fileUris":["https://raw.githubusercontent.com/MicrosoftDocs/mslearn-welcome-to-azure/master/configure-nginx.sh"]}' \
    --protected-settings '{"commandToExecute": "./configure-nginx.sh"}'
```

#### 3. Öffentliche IP-Adresse abrufen
Speichere die öffentliche IP-Adresse in einer Variablen und gib sie aus:
```bash
IPADDRESS=$(az vm list-ip-addresses \
    --resource-group "Deine Ressourcengruppe" \
    --name my-vm \
    --query "[].virtualMachine.network.publicIpAddresses[*].ipAddress" \
    --output tsv)

echo $IPADDRESS
```

#### 4. NSG auflisten
Liste die Network Security Groups in der Ressourcengruppe auf:
```bash
az network nsg list \
    --resource-group "Deine Ressourcengruppe" \
    --query '[].name' \
    --output tsv
```

#### 5. NSG-Regeln anzeigen
Zeige die Regeln der NSG an:
```bash
az network nsg rule list \
    --resource-group "Deine Ressourcengruppe" \
    --nsg-name my-vmNSG \
    --query '[].{Name:name, Priority:priority, Port:destinationPortRange, Access:access}' \
    --output table
```

#### 6. Regel für HTTP-Traffic erstellen
Füge eine Regel hinzu, um HTTP-Traffic (Port 80) zuzulassen:
```bash
az network nsg rule create \
    --resource-group "Deine Ressourcengruppe" \
    --nsg-name my-vmNSG \
    --name allow-http \
    --protocol tcp \
    --priority 100 \
    --destination-port-range 80 \
    --access Allow
```
