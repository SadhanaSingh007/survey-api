# Umfrageergebnisse-API

Dieses Projekt stellt eine REST-API mit Node.js und Express bereit, die Durchschnittswerte basierend auf nach Geschlecht segmentierten Umfrageantworten berechnet und zurückgibt. Die Bewertungen werden aus einem bereitgestellten JSON-Datensatz abgeleitet.

## Merkmale

- **GET /scores-Endpunkt**: Gibt die durchschnittlichen Bewertungen für jedes Geschlecht (`female`, `male`, and `diverse`) zurück. Die Punktzahl wird nur berechnet, wenn für dieses Geschlecht mindestens drei Antworten vorliegen. andernfalls ist die Punktzahl standardmäßig Null.

## Installation

Um mit diesem Projekt zu beginnen, klonen Sie das Repository und installieren Sie die Abhängigkeiten.

```bash
git clone https://github.com/SadhanaSingh007/survey-api.git
cd survey-api
npm install
```

## Ausführen des Servers

Um den Server zu starten, führen Sie den folgenden Befehl aus:

```bash
npm start
```

Dadurch wird der Server unter `http://localhost:3000` gestartet. Wenn Sie auf `http://localhost:3000/scores` zugreifen, erhalten Sie die durchschnittlichen Ergebnisse basierend auf den verarbeiteten Umfragedaten.

## API-Nutzung

### GET /scores

- **URL**: `/scores`
- **Method**: `GET`
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```json
    {
      "femaleScore": 7.5,
      "maleScore": 8.0,
      "diverseScore": 8.6
    }
    ```
### Beispiel

Um die Ergebnisse abzurufen, verwenden Sie den folgenden Curl-Befehl oder besuchen Sie die URL in einem Webbrowser:

```bash
curl http://localhost:3000/scores
```

Dieser Befehl ruft die durchschnittlichen Punktzahlen für jede Geschlechtskategorie vom Server ab.

## Datei Format

Der Server erwartet Daten im folgenden JSON-Format, wie im Beispieldatensatz dargestellt:

```json
[
  {
    "_id": "64f35f1be1b807d66c78274e",
    "rating": 8,
    "gender": "male"
  },
  {
    "_id": "64f5ec161777cc7cef3e0db8",
    "rating": 10,
    "gender": "female"
  }
  // Additional entries...
]
```
