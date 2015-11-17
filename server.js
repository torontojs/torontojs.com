import path from "path";
import express from "express";

const app = express();
const port = process.env.PORT || 1337;

app.use("/assets", express.static("build"));

app.use("/public", express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port);

console.log(`Listening on port ${port}`);
