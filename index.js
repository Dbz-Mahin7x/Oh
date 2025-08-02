const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Bite
app.get("/bite", (req, res) => {
    const bites = [
        "https://media.tenor.com/nezuko-bite1.gif",
        "https://media.tenor.com/nezuko-bite2.gif",
        "https://media.tenor.com/nezuko-bite3.gif"
    ];
    res.json({ url: bites[Math.floor(Math.random() * bites.length)] });
});

// Hug
app.get("/hug", (req, res) => {
    const hugs = [
        "https://media.tenor.com/anime-hug1.gif",
        "https://media.tenor.com/anime-hug2.gif"
    ];
    res.json({ url: hugs[Math.floor(Math.random() * hugs.length)] });
});

// Kiss
app.get("/kiss", (req, res) => {
    const kisses = [
        "https://media.tenor.com/anime-kiss1.gif",
        "https://media.tenor.com/anime-kiss2.gif"
    ];
    res.json({ url: kisses[Math.floor(Math.random() * kisses.length)] });
});

// Slap
app.get("/slap", (req, res) => {
    const slaps = [
        "https://media.tenor.com/anime-slap1.gif",
        "https://media.tenor.com/anime-slap2.gif"
    ];
    res.json({ url: slaps[Math.floor(Math.random() * slaps.length)] });
});

app.listen(PORT, () => console.log(`Mahin API is live on ${PORT} 😘`));
