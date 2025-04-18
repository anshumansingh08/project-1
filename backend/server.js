import express from "express";
import chats from "./data.js";

const app = express();

app.get("/", (req, res) => {
  console.log(res + " Response console");

  res.send("Server running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(res);
});

app.listen(5000, () => console.log("Server Started on port 5000"));
