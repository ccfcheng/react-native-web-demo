const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, 'dist')))
// app.get('/', (req, res) => {
//   res.sendFile('index.html');
// });

app.listen(8080, () => console.log('Listening on port 8080'));
