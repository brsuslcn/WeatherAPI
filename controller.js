
var path = require('path');
var express = require('express');
var router = express.Router();


module.exports.index = function(request, respond)
{
    respond.render('index');
}

module.exports.indexPost = function(request, respond)
{
    var city1 = request.body.city
    console.log(city1);

    var request = require('request');
    request(
        `HERE SPECIAL API`,
        function(error, response, body){
          let data = JSON.parse(body);
            if(response.statusCode == 200){
                console.log(data.main.temp);
                respond.render('weatherstatus', {weatherstatus : city1 + " is " + data.weather[0].description});
                
            }

            else
            {
                
                respond.render('weatherstatus', {weatherstatus : "Invalid city name!!"});
            }
        }
    );

   
   
}

module.exports.pg404 = function(request, respond)
{
respond.render('404');
}





router.get('/', module.exports.index);
router.get('*', module.exports.pg404);
router.post('/', module.exports.indexPost);

module.exports = router;
