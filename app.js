const express = require("express");
const app = express();
const { getAllTopics } = require("./controllers/topics.controllers");
const { getAllApiEndpoints } = require('./controllers/api.controllers');
const { getAllArticles } = require('./controllers/articles.controllers');


const {
  handlePsqlErrors,
  handleCustomErrors,
  handleServersErrors,
} = require("./errors");

app.get("/api/topics", getAllTopics);



app.get("/api/", getAllApiEndpoints);

app.get('/api/articles', getAllArticles);

app.use(handlePsqlErrors);

app.use(handleCustomErrors);

app.use(handleServersErrors);

module.exports = app;