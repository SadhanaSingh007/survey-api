# Survey Scores API

This project provides a REST API using Node.js and Express, which calculates and returns average scores based on survey responses segmented by gender. The scores are derived from a provided JSON dataset.

## Features

- **GET /scores Endpoint**: Returns the average scores for each gender (`female`, `male`, and `diverse`). Scores are calculated only if there are at least three responses for that gender; otherwise, the score defaults to zero.

## Installation

To get started with this project, clone the repository and install the dependencies.

```bash
git clone https://github.com/SadhanaSingh007/survey-api.git
cd survey-api
npm install
```

## Running the Server

To start the server, run the following command:

```bash
npm start
```

This will launch the server on `http://localhost:3000`. Accessing `http://localhost:3000/scores` will provide you with the average scores based on the processed survey data.

## API Usage

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

### Example

To retrieve the scores, use the following curl command or visit the URL in a web browser:

```bash
curl http://localhost:3000/scores
```

This command will fetch the average scores for each gender category from the server.

## Data Format

The server expects data in the following JSON format, as exemplified by the sample dataset:

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