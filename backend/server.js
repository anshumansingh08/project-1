import dotenv from "dotenv";
import express from "express";
import chats from "./data.js";
const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  console.log(res + " Response console");

  res.send("Server running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  res.send(chats.find((c) => c._id === req.params.id));
});

app.listen(PORT, () => console.log("Server Started on port 5000"));
