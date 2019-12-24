const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    console.log('headers', req.headers);
    res.send('Hello CORS.')
})
app.listen(3000);