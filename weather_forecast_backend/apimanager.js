var axios = require('axios'); 

async function commonapi(url){
    var config = {
        method: 'get',
        url: url,
        headers: { 
          'Content-Type': 'application/json'
        }
      };
    let data = await axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return {}
        });
    return data;
}

module.exports = {
    commonapi
}