const express = require('express');

const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect = encodeURIComponent('http://localhost:3000/api/discord/callback');

router.get('/login', (req, res) => {
  res.redirect(`https://discord.com/api/oauth2/authorize?client_id=731919501523943514&redirect_uri=http%3A%2F%2Fcable.bennocraft.net%2F&response_type=code&scope=guilds%20identify`);
});

module.exports = router;
