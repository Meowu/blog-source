const express = require('express');
const app = express();
const WHITE_LIST = ['http://127.0.0.1:4000']
app.use((req, res, next) => {
    const { origin } = req.headers;
    console.log('headers', req.headers);
    if (WHITE_LIST.includes(origin)) {
        res.set({
            'Access-Control-Allow-Origin': origin,
            'Access-Control-Allow-Methods': 'GET'
        })
    }
    next();
})
app.get('/greet', (req, res) => {
    console.log('headers', req.header);
    res.send('Hello CORS.')
})
app.listen(3000);