import Request from "supertest";
import { app, getAverage } from "./server";
import { jest } from "@jest/globals";
import fs from "fs";

jest.mock("fs");

const spy = jest.spyOn(fs, "readFileSync").mockImplementation();

describe("/scores endpoint", () => {
  it("should calculate scores correctly based on the mocked data", async () => {
    const mockData = JSON.stringify([
      { gender: "female", rating: 5 },
      { gender: "female", rating: 6 },
      { gender: "female", rating: 7 },
      { gender: "male", rating: 8 },
      { gender: "male", rating: 9 },
      { gender: "male", rating: 0 },
      { gender: "diverse", rating: 5 },
      { gender: "diverse", rating: 7 },
      { gender: "diverse", rating: 0 },
    ]);

    fs.readFileSync.mockReturnValue(mockData);

    const response = await Request(app).get("/scores");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      femaleScore: "6.0",
      maleScore: "5.7",
      diverseScore: "4.0",
    });
  });

  it("should return 0 for groups with less than 3 members", async () => {
    const mockData = JSON.stringify([
      { gender: "female", rating: 5 },
      { gender: "female", rating: 6 },
      { gender: "male", rating: 0 },
    ]);

    fs.readFileSync.mockReturnValue(mockData);

    const response = await Request(app).get("/scores");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      femaleScore: 0,
      maleScore: 0,
      diverseScore: 0,
    });
  });
});

describe("getAverage function", () => {
  it("should calculate average correctly", () => {
    const testData = [
      { gender: "female", rating: 5 },
      { gender: "female", rating: 6 },
      { gender: "female", rating: 7 },
    ];

    const average = getAverage(testData, "female");
    expect(average).toBe("6.0");
  });

  it("should handle empty arrays gracefully", () => {
    const testData = [];

    const average = getAverage(testData, "female");
    expect(average).toBe(0);
  });
});
