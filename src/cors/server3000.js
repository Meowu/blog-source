const express = require('express');
const app = express();
const WHITE_LIST = ['http://127.0.0.1:4000']
app.use((req, res, next) => {
    const { origin } = req.headers;
    console.log('options headers', req.headers);
    if (WHITE_LIST.includes(origin)) {
        const headers = {
            'Access-Control-Allow-Origin': origin,
            'Access-Control-Allow-Methods': '*'
        }
        const reqHeader = req.headers['access-control-request-headers'];
        if (reqHeader) {
            headers['Access-Control-Allow-Headers'] = reqHeader;
        }
        res.set(headers);
        if (req.method === 'OPTIONS') {
            res.end();
        }
    }
    next();
})

app.get('/greet', (req, res) => {
    console.log('headers', req.headers);
    res.send('Hello CORS.')
})

app.put('/message', (req, res) => {

})

app.post('/message', (req, res) => {
    console.log('post headers', req.headers);
    res.send('post success');
})
app.listen(3000);