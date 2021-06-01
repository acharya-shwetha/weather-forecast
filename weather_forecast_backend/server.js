var express    = require('express');    
var app        = express();     
var cors = require('cors');  
const { commonapi } = require("./apimanager"); 

var port = process.env.PORT || 8080;        

app.use(express.json());

app.use(cors());

app.post('/api/location/search', async function(request, response){     
    let { query } = request.body;
    let url =  `https://www.metaweather.com/api/location/search/?query=${query}`
    let data = await commonapi(url);
    if(Object.keys(data).length <= 0){
        data = [];
    }
    response.send({locationLists: data});   
  });


  app.post('/api/location', async function(request, response){   
    let { woeid } = request.body;
    let url =  `https://www.metaweather.com/api/location/${woeid}`
    let data = await commonapi(url);
    response.send({locationDatas: data});   
  });



app.listen(port);
console.log('listening to port ' + port);