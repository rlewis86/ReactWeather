var express = require('express');
var cors = require('cors');

//Create the app
var app = express();

app.use(express.static('public'));
app.use(cors());

app.listen(3000, function(){
    console.log('express server is up on port 3000')
});
