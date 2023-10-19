const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;
var cors = require('cors');

const apiKey = 'f5a8915645501a2493727d6b09cbabd0';


// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));

app.get('/trending/movie/day', async (req, res) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&media_type=movie`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener películas');
    }
});

app.get('/search/movie', async (req, res) => {
    const movieTitle = req.query.query;
    if (!movieTitle) {
        return res.status(400).send('Se requiere el título de la película');
    }

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieTitle}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al buscar películas');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
