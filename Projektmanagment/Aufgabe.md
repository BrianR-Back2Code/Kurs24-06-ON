# 🎤 Event-Planungsplattform

## 📌 **1. Projektübersicht**

Unsere Plattform ermöglicht Nutzern, **Veranstaltungen zu erstellen, zu verwalten und mit Freunden zu teilen**.

### **🔹 Hauptfunktionen:**

✅ Event-Erstellung, Bearbeitung & Löschung\
✅ Kommentarfunktion & Push-Benachrichtigungen\
✅ Teilnehmerverwaltung & Bestellungen\
✅ Integration mit Google Kalender\
✅ Mobile-optimiertes Design



### 🎯 Zielgruppe



Unsere Plattform richtet sich an:

✅ Event-Organisatoren → Vereine, Firmen, Privatpersonen, die Veranstaltungen effizient planen möchten.

✅ Teilnehmer → Personen, die einfach Events entdecken, sich anmelden und Bestellungen aufgeben möchten.

✅ Gastronomie & Catering → Restaurants, Foodtrucks oder Lieferdienste, die Bestellungen für Events bündeln können.

---

## 🛠 **2. Technologie-Stack**

### **📍 Frontend:**

- **React oder Next.js** → Schnelle, interaktive UI
- **AWS Amplify / S3 + CloudFront** → Hosting & Skalierung

### **📍 Backend:**

- **AWS Lambda + API Gateway** → Serverless & skalierbar
- **Express.js (Fallback für EC2-Setup)**
- **AWS EventBridge** → Automatische Benachrichtigungen
- **AWS SNS (Simple Notification Service)** → E-Mail-/SMS-Updates

### **📍 Datenbank:**

- **AWS DynamoDB** → Skalierbare NoSQL-Lösung
- **AWS S3** → Speicherung von Eventbildern
- **AWS Secrets Manager** → Sichere Speicherung von API-Keys & Passwörtern

### **📍 Sicherheit & Skalierung:**

- **AWS Cognito** → User-Authentifizierung
- **AWS IAM** → Rechteverwaltung
- **AWS WAF & Shield** → Schutz vor Angriffen
- **AWS CloudWatch** → Logging & Monitoring

---

## 🏗 **3. Architektur (Serverless Ansatz)**

```plaintext
                +----------------------+
                |    Frontend (React)   |
                |  - Hosted on S3       |
                |  - Served via CloudFront |
                +-----------+----------+
                            |
                            ▼
                +----------------------+
                |  API Gateway (REST)   |
                |  - Auth via Cognito   |
                +-----------+----------+
                            |
            ---------------------------------
            |               |               |
            ▼               ▼               ▼
    +-------------+   +-------------+   +-------------+
    | AWS Lambda  |   | AWS Lambda  |   | AWS Lambda  |
    | Create Event|   | Get Events  |   | Order Pizza |
    +-------------+   +-------------+   +-------------+
            |               |               |
            ▼               ▼               ▼
    +-------------+   +-------------+   +-------------+
    | DynamoDB    |   | DynamoDB    |   | DynamoDB    |
    | Events      |   | Users       |   | Orders      |
    +-------------+   +-------------+   +-------------+
            |
            ▼
    +----------------------+
    |  SNS (Notifications)  |
    |  - Email Confirmations|
    |  - Order Updates      |
    +----------------------+
```

---

## 📊 **4. Datenbankstruktur (Key-Value in DynamoDB)**

### **Events (Key: ****************************************************************************`event:{eventId}`****************************************************************************)**

```json
{
  "id": "event:123",
  "name": "Tech Meetup 2025",
  "category": ["Tech", "IT", "Business"],
  "description": "Ein Meetup für Tech-Enthusiasten",
  "start_time": "2025-06-15T18:00:00Z",
  "end_time": "2025-06-15T21:00:00Z",
  "location": "Berlin",
  "organizer_id": "user:42"
}
```

### **Benutzer (Key: ****************************************************************************`user:{userId}`****************************************************************************)**

```json
{
  "id": "user:42",
  "name": "Max Mustermann",
  "email": "max@example.com",
  "role": "organizer"
}
```

### **Bestellungen für ein Event (Key: ****************************************************************************`event:{eventId}:orders`****************************************************************************)**

```json
{
  "user:42": {
    "items": [
      { "name": "Pizza", "price": 12.50 },
      { "name": "Cola", "price": 3.00 }
    ],
    "total_price": 15.50,
    "status": "pending"
  }
}
```

---

## 🚀 **5. CI/CD & Entwicklungsprozess**

### **📌 Entwicklungsmodell:**

✅ Scrum (2-Wochen-Sprints mit Dailys & Retrospektiven)\
✅ Jira Software zur Aufgabenverwaltung\
✅ Code Reviews über GitHub

### **📌 CI/CD-Pipeline:**

✅ **GitHub Actions** → Automatisierte Tests\
✅ **AWS CodeBuild & CodeDeploy** → Deployment in AWS\
✅ **Jest & Selenium** → Testing für Backend & UI

---

## 🎯 **6. Vorteile & Fazit**

🔹 **Serverless = Skalierbar & kosteneffizient**\
🔹 **DynamoDB = Schnelle Abfragen & einfache Struktur**\
🔹 **AWS SNS & EventBridge = Automatische Benachrichtigungen**\
🔹 **S3 & CloudFront = Schnelle Bereitstellung & globaler Zugriff**\
🔹 **Sicherheit durch AWS WAF, Cognito & IAM**

👉 Diese Architektur bietet eine robuste, skalierbare und sichere Grundlage für unsere Event-Planungsplattform! 🚀



