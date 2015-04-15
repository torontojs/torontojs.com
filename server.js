import koa from "koa";
import route from "koa-route";
import React from "react";

import Application from "./templates/Application.js";
import AboutUs from "./templates/AboutUs.js";

let app = koa();

app.use(route.get("/about", function *() {
  this.body = React.renderToStaticMarkup(
    <Application page={AboutUs} />
  );
}));

app.listen(1337);
