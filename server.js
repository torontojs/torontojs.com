import path from "path";
import express from "express";
import compression from "compression";

const app = express();
const port = process.env.PORT || 1337;

// express static wants this in milliseconds
// even when the Cache-Control header is in seconds :P
const oneDay = 1000 * 60 * 60 * 24;

const staticContentOptions = { maxAge: oneDay };

app.use(compression());

app.use("/assets", express.static("build", staticContentOptions));

app.use("/public", express.static("public", staticContentOptions));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"), staticContentOptions);
});

app.listen(port);

console.log(`Listening on port ${port}`);
