Du kannst die Azure CLI auf deinem Ubuntu-System mit den folgenden Schritten installieren:

### **1. Microsoft Repository hinzufügen**
Führe die folgenden Befehle im Terminal aus:

```bash
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

Dieser Befehl lädt das Installationsskript von Microsoft herunter und führt es aus.

---

### **2. Installation überprüfen**
Nach der Installation kannst du prüfen, ob Azure CLI erfolgreich installiert wurde:

```bash
az --version
```

Falls die Version angezeigt wird, ist die Installation erfolgreich.

---

### **3. Anmelden bei Azure**
Melde dich mit deinem Azure-Konto an:

```bash
az login
```
### Link kopieren 
- Steht im Terminal

- Auf andere Anmeldung klicken und über Organisation anmelden : techstartergmbh.onmicrosoft.com
