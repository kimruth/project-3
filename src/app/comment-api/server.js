require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(process.env.MONGO_URI, {  })
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.error(err));

// Définition du modèle Commentaire
const CommentSchema = new mongoose.Schema({
  author: String,
  content: String,
  date: { type: Date, default: Date.now }
});
const Comment = mongoose.model('Comment', CommentSchema);

// Endpoint pour récupérer les commentaires
try {
app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});
} catch {}

// Endpoint pour ajouter un commentaire
try {
app.post('/comments', async (req, res) => {
  const newComment = new Comment(req.body);
  await newComment.save();
  res.json(newComment);
});
} catch {}

// Lancer le serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
