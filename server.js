const express = require('express');
const app = express();
const router = require('./routing/router');

const nunjucks = require('nunjucks');
nunjucks.configure(__dirname + '/views', { express: app });
app.set('view engine', 'njk');
app.set('views', __dirname + '/views');

// Serve static files from the "views" directory with router prefix
app.use('/views', express.static(__dirname + '/views'));

app.use('/', router);


const port = 3000;
app.listen(port, () => console.log(`Example app listening on  https://localhost/${port}/ !`))









