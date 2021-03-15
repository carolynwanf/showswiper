const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('.'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.options('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");
  
    res.sendStatus(200);
  
  });