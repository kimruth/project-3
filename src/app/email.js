const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors()); // Autorise les requêtes cross-origin (Angular -> Node.js)

// Configuration du transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Ton adresse Gmail
    pass: process.env.EMAIL_PASS, // Ton mot de passe d'application
  },
});

// Route pour recevoir les messages du formulaire Angular
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    const mailOptions = {
      from: email, // L'email de l'utilisateur qui envoie le message
      to: process.env.EMAIL_USER, // Ton adresse Gmail qui recevra le message
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    res.status(500).json({ error: "Erreur lors de l'envoi du message." });
  }
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
