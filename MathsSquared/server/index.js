const express = require("express");
const next = require("next");
const helmet = require("helmet");
const path = require("path");
const { PORT, IS_PROD } = require("./config");
const routes = require("./routes");

const app = next({
  dev: !IS_PROD,
  dir: path.join(__dirname, "../"),
  distDir: path.join(__dirname, "../.client-dist"),
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    helmet(),
    express.static(path.join(__dirname, "../static"), {
      maxage: !IS_PROD ? "0" : "1d",
    })
  );

  server.get("/ping", (req, res) => {
    return res.send("pong");
  });

  // mount the APIs
  server.use("/api/v1", routes);

  // ssr
  server.get("*", handle);

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
