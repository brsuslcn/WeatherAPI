var http = require('http');
var express = require('express');
var ejslayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname,'public')));
app.use(ejslayouts);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/public/views'));

var controller = require('./controller.js');
app.use('/', controller);







/*const request = require('request');

const app = express();

app.get('/', (req, res) => {
    let city = req.query.city;
    var request = require('request');
    request(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7d83837327b8a51a8a533ff7e8548af`,
        function(error, response, body){
          let data = JSON.parse(body);
            if(response.statusCode == 200){
                res.send(`"${city}"  is  ${data.weather[0].description}`);
            }

            else
            {
                res.send("bir hata oluştu!!");
            }
        }
    );
});*/

app.listen(3000);
