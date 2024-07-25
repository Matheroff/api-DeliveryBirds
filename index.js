const express = require('express');
const cors = require("cors");
const app = express();

const deliveryBirds = require("./tableau");

const port = 3510;

app.use(cors("*"));

app.get("/", (req, res) => {
    res.send("Notre équipe de volatiles");
});

app.get("/birds", (req, res) => {
    res.json(deliveryBirds);
});

app.get("/birds/:id", (req, res) => {
    const birdId = parseInt(req.params.id);
    const bird = deliveryBirds.find((elem) => elem.id === birdId)
    console.info(birdId);
    console.info(bird);
    res.json(bird);
})

app.listen(port, () => {
    console.log(`http://localhost:3510`)
})




