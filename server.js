const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;
const bodyParser = require("body-parser");

const nextI18next = require("./Utils/translation/i18n");

// const port = process.env.PORT || 3000;
// const app = next({ dev: process.env.NODE_ENV !== "production" });
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();
//   server.use(nextI18NextMiddleware(nextI18next));
//   server.use(bodyParser.urlencoded({ extended: true }));
//   server.use(bodyParser.json());

//   server.post("/listings", (req, res) => {
//     console.log("post akin");
//     return app.render(req, res, "/listings", req.query);
//   });

//   server.get("*", (req, res) => {
//     console.log(req.body);

//     return handle(req, res);
//   });

//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });

(async () => {
  await app.prepare();
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));
  // server.use(bodyParser.urlencoded({ extended: true }));
  // server.use(bodyParser.json());

  server.all("*", (req, res) => handle(req, res));

  server.post("/listings", (req, res, next) => {
    console.log("akin");
    return app.render(req, res, "/listings", req.query);
  });

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
