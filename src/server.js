const express = require("express");
const cors = require("cors");

const server = express();

//Routers

// Middlewares
server.use(cors());
server.use(express.json());
server.use(express.urlencoded());
server.get("/", async (request, response) => {
  response.json("Welcome to the dental API");
});

module.exports = server;
