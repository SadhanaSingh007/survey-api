import express from "express";
import fs from "fs";

export const app = express();
const port = 3000;

export function getAverage(arr, gender) {
  const filteredArr = arr.filter((item) => item.gender === gender);
  return filteredArr.length >= 3
    ? (filteredArr.reduce(
        (previousValue, currentValue) =>
          previousValue +
          (currentValue.rating === "" ? 0 : currentValue.rating),
        0
      ) / filteredArr.length).toFixed(1)
    : 0;
}

app.get("/scores", (req, res) => {
  const fileData = fs.readFileSync("challenge.answers.json", "utf8");
  const data = JSON.parse(fileData);

  const scores = {
    femaleScore: getAverage(data, "female"),
    maleScore: getAverage(data, "male"),
    diverseScore: getAverage(data, "diverse"),
  };

  res.json(scores);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
