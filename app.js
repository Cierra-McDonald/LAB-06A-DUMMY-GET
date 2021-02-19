const express = require('express');
const cors = require('cors');
const app = express();

const { plants } = require('./data.js');

app.use(cors()); 


app.get('/', (req, res) => { 
    res.json({Greeting: 'Hello You are doing FANTASTIC!'});

});

app.get('/plants', (req, res) => { 
    console.log(plants);
    res.json({ results: plants });

});

app.get('/plants/:id', (req, res) => { 
    console.log(plants);

    const id = Number(req.params.id);

    const selectedPlant = plants.find((plant) => plant.id === id)

    res.json({ results: selectedPlant });

});

module.exports = { 
    app
};


