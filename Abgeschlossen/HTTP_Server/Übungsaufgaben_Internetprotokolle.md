### Aufgabe: FTP

1. **Hauptfunktion des FTP:**
   Das File Transfer Protocol (FTP) dient dem Austausch von Dateien zwischen einem Client und einem Server in einem Netzwerk. Es ermöglicht das Hochladen, Herunterladen und Verwalten von Dateien auf einem FTP-Server.

2. **Grundlegender Arbeitsablauf beim Hochladen einer Datei auf einen FTP-Server:**
   - Der Benutzer stellt eine Verbindung zum FTP-Server über einen FTP-Client her.
   - Nach der Authentifizierung (Benutzername und Passwort) erhält der Benutzer Zugriff auf die Verzeichnisstruktur des Servers.
   - Der Benutzer navigiert zum Zielverzeichnis auf dem Server.
   - Die gewünschte Datei wird vom lokalen System des Benutzers ausgewählt und mit dem Befehl „Upload“ auf den Server übertragen.

### Aufgabe: SSH

1. **Hauptfunktion von SSH:**
   SSH (Secure Shell) dient der sicheren, verschlüsselten Kommunikation über ein unsicheres Netzwerk, insbesondere für den Fernzugriff auf Server und die Remote-Verwaltung von Systemen.

2. **Prozess der SSH-Authentifizierung:**
   - Der Benutzer initiiert eine SSH-Verbindung zum Server.
   - Der Server sendet einen öffentlichen Schlüssel zum Benutzer.
   - Der Benutzer authentifiziert sich, meist mit einem Passwort oder einem privaten Schlüssel.
   - Der Server überprüft die Authentifizierung und ermöglicht dem Benutzer den Zugriff, wobei die Kommunikation während der gesamten Sitzung verschlüsselt bleibt.

### Aufgabe: UDP

1. **Hauptfunktion des UDP:**
   Das User Datagram Protocol (UDP) bietet ein verbindungsloses, unzuverlässiges Kommunikationsprotokoll, bei dem Daten in Datagrammen gesendet werden, ohne vorher eine Verbindung aufzubauen.

2. **Beispiel für eine Anwendung von UDP:**
   UDP wird häufig in Echtzeitanwendungen verwendet, bei denen Geschwindigkeit wichtiger ist als Zuverlässigkeit, z.B. bei Video-Streaming, Online-Spielen oder VoIP (Voice over IP).

### Aufgabe: TCP

1. **Hauptfunktion des TCP:**
   Das Transmission Control Protocol (TCP) ist ein verbindungsorientiertes, zuverlässiges Kommunikationsprotokoll, das die Datenübertragung zwischen zwei Systemen sicherstellt. Es garantiert die Lieferung der Daten in der richtigen Reihenfolge und ohne Verluste.

2. **Beispiel für eine Anwendung von TCP:**
   TCP wird bei Anwendungen verwendet, bei denen eine zuverlässige Datenübertragung erforderlich ist, z.B. beim Abrufen von Webseiten (HTTP/HTTPS), bei der E-Mail-Kommunikation (SMTP) und beim Dateitransfer (FTP).

3. **Gemeinsamkeiten und Unterschiede zwischen UDP und TCP:**
   - **Gemeinsamkeiten:**
     - Beide gehören zur Transportschicht des OSI-Modells.
     - Beide Protokolle transportieren Daten über das Netzwerk.
   - **Unterschiede:**
     - TCP ist verbindungsorientiert, UDP ist verbindungslos.
     - TCP bietet Zuverlässigkeit (Fehlerkorrektur, Reihenfolgegarantie), UDP nicht.
     - TCP ist langsamer, aber zuverlässiger, während UDP schneller ist, aber keine Garantie für die Zustellung bietet.

### Aufgabe: DNS

1. **Hauptfunktion des DNS:**
   Das Domain Name System (DNS) übersetzt menschenlesbare Domänennamen (z.B. www .example.com) in IP-Adressen, die von Computern zur Kommunikation verwendet werden.

2. **Prozess der DNS-Übersetzung:**
   - Ein Benutzer gibt eine URL (z.B. www .example.com) in den Browser ein.
   - Der Browser fragt den lokalen DNS-Server nach der IP-Adresse der Domäne.
   - Wenn der lokale Server die IP-Adresse nicht kennt, wird die Anfrage an einen höheren DNS-Server weitergeleitet.
   - Sobald die IP-Adresse ermittelt wurde, wird sie an den Browser zurückgegeben, und die Webseite kann geladen werden.

### Aufgabe: DHCP

1. **Hauptfunktion des DHCP:**
   Das Dynamic Host Configuration Protocol (DHCP) automatisiert die Zuweisung von IP-Adressen und anderen Netzwerkkonfigurationsparametern an Geräte in einem Netzwerk.

2. **DHCP-Lease-Prozess:**
   - Ein Gerät (Client) sendet eine DHCP-Discover-Nachricht, um eine IP-Adresse anzufordern.
   - Der DHCP-Server antwortet mit einem DHCP-Offer, das eine IP-Adresse anbietet.
   - Der Client akzeptiert das Angebot mit einer DHCP-Request-Nachricht.
   - Der Server bestätigt die Zuweisung mit einer DHCP-Ack-Nachricht, und der Client erhält die IP-Adresse für einen bestimmten Zeitraum (Lease).

### Aufgabe: HTTP

1. **Hauptfunktion von HTTP:**
   Das Hypertext Transfer Protocol (HTTP) ist ein Anwendungsprotokoll, das den Austausch von Daten, insbesondere von Webseiteninhalten, zwischen einem Webbrowser (Client) und einem Webserver ermöglicht.

2. **Grundlegender Arbeitsablauf bei der Verwendung von HTTP:**
   - Der Benutzer gibt eine URL in den Browser ein.
   - Der Browser sendet eine HTTP-Request-Nachricht an den Webserver, um die Webseite anzufordern.
   - Der Webserver verarbeitet die Anfrage und sendet die entsprechenden Inhalte (HTML, CSS, JavaScript) als HTTP-Response zurück.
   - Der Browser rendert die empfangene Webseite für den Benutzer.

### Aufgabe: HTTPS

1. **Hauptfunktion von HTTPS:**
   Das Hypertext Transfer Protocol Secure (HTTPS) ist die sichere Version von HTTP. Es verwendet eine Verschlüsselung, um die Vertraulichkeit und Integrität der übertragenen Daten zu gewährleisten.

2. **Wichtigkeit von HTTPS und Unterschiede zu HTTP:**
   - HTTPS schützt vor Man-in-the-Middle-Angriffen, indem es die Kommunikation zwischen Client und Server verschlüsselt.
   - Es verwendet SSL/TLS, um eine sichere Verbindung aufzubauen.
   - Im Gegensatz zu HTTP, das Daten unverschlüsselt überträgt, gewährleistet HTTPS, dass Daten privat und unverändert bleiben.

### Aufgabe: OSI-Schichten und zugehörige Protokolle

| **OSI-Schicht**       | **Protokoll 1** | **Protokoll 2** |
| --------------------- | --------------- | --------------- |
| Anwendungsschicht     | HTTP            | FTP             |
| Darstellungsschicht   | SSL             | TLS             |
| Sitzungsschicht       | NetBIOS         | RPC             |
| Transportschicht      | TCP             | UDP             |
| Netzwerkschicht       | IP              | ICMP            |
| Sicherungsschicht     | Ethernet        | PPP             |
| Physikalische Schicht | WLAN            | DSL             |
