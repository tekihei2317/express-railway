import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (_, res) => {
  res.json({
    message: "Running",
  });
});

app.listen(port, () => {
  console.log(`Example app is listening at http://localhost:${port}`);
});
