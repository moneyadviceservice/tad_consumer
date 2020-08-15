const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;
const bodyParser = require("body-parser");

const nextI18next = require("./Utils/translation/i18n");

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.post("/listings", (req, res) => {
    let query = req.body;

    const queryString = () => {
      var out = [];
      for (var key in query) {
        if (query.hasOwnProperty(key)) {
          out.push(key + "=" + encodeURIComponent(query[key]));
        }
      }
      return out.join("&");
    };
    res.redirect("/en/listings?" + queryString());
  });

  server.get("*", nextI18NextMiddleware(nextI18next), (req, res) => {
    return handle(req, res);
  });

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
