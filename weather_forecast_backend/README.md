### Install dependencies
> npm install

### Run nodejs server

Run command
> node server.js

### Location search api that return list of cities from https://www.metaweather.com/api/
POST http://localhost:8080/api/location/search
{
    "query": "z"
}

### Location api that return weather information of specific city from https://www.metaweather.com/api/
POST http://localhost:8080/api/location
{
    "woeid": "1393672"
}