const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
    response.send( await readFile('index.html', 'utf8') );
    
});

// console.log("Hello")
// console.log("This is the output of our index.js file")

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));
