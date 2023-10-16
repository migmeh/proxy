const http = require('http');
const request = require('request');

const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWE4OTE1NjQ1NTAxYTI0OTM3MjdkNmIwOWNiYWJkMCIsInN1YiI6IjY1MmIwZDFhMGNiMzM1MTZmZDQ5OWNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E9TLUqdT5_A-by2QM0gdJ4MSHqS2KLufOvhcSMqn7uE';
const port = 8080;

const server = http.createServer((req, res) => {
    const options = {
        url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' + req.url,
        headers: {
            'Authorization': 'Bearer ' + apiKey
        }
    };
    const apiRequest = request(options);
    req.pipe(apiRequest);
    apiRequest.pipe(res);
});

server.listen(port, () => {
    console.log('El servidor proxy está escuchando en el puerto' +port);
    console.log('http://localhost:' +port);
});
