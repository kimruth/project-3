const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/commentsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const CommentSchema = new mongoose.Schema({
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", CommentSchema);

// Ajouter un commentaire
app.post("/comments", async (req, res) => {
  const newComment = new Comment({ message: req.body.message });
  await newComment.save();
  res.json(newComment);
});

// Récupérer les commentaires (pagination par 5)
app.get("/comments", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const comments = await Comment.find()
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);
  res.json(comments);
});

app.listen(3000, () => console.log("Serveur sur http://localhost:3000"));
