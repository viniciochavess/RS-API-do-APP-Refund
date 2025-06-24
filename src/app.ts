import express from "express";

export const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("olá mundo");
});
