if(process.env.NODE_ENV === "production") {
  require("./client.prod.js");
}
else {
  require("./client.dev.js");
}
