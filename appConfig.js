export default {
  environment: (process.env.NODE_ENV === "production" ? "production" : "development")
, serverPort: 1337
, webpackDevServerPort: 1338
}
