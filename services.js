// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "Toronto, ON";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
   
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
        return weatherResult = weatherAPI.get({ q: city, cnt: days, APPID: '7142da4098dac47b689d011c59fb174e'  });
    };
    
}]);