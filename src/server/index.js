const os = require("os");
const express = require("express");

const { nestedData } = "./data";

// basic deep clone
const database = JSON.parse(JSON.stringify(nestedData));

const app = express();

app.use(express.static("dist"));
app.get("/api/getNestedData", (req, res) => res.send(database));

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
