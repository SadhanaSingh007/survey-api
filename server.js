import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.get("/scores", (req, res) => {
  const fileData = fs.readFileSync("challenge.answers.json", "utf8");
  const data = JSON.parse(fileData);

  const scores = { femaleScore: 0, maleScore: 0, diverseScore: 0 };
  const allFemale = data.filter((item) => item.gender === "female");
  const allMale = data.filter((item) => item.gender === "male");
  const allDiverse = data.filter((item) => item.gender === "diverse");

  const averageFemale =
    allFemale.reduce(
      (previousValue, currentValue) => previousValue + currentValue.rating,
      0
    ) / allFemale.length;

  const averageMale =
    allMale.reduce(
      (previousValue, currentValue) =>
        previousValue + (currentValue.rating === "" ? 0 : currentValue.rating),
      0
    ) / allMale.length;

  const averageDiverse =
    allDiverse.reduce(
      (previousValue, currentValue) =>
        previousValue + (currentValue.rating === "" ? 0 : currentValue.rating),
      0
    ) / allDiverse.length;
 
  scores.femaleScore = allFemale.length >= 3 ? averageFemale.toFixed(1) : 0;
  scores.maleScore = allMale.length >= 3 ? averageMale.toFixed(1) : 0;
  scores.diverseScore = allDiverse.length >= 3 ? averageDiverse.toFixed(1) : 0;

  res.json(scores);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
