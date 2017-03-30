var axios = require('axios');

const OPEN_WEATHERMAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=677b283593d4b252ccba3ed69c24d66b&units=imperial';

module.exports = {
    getTemp: function (myLocation) {
        var encodedLocation = encodeURIComponent(myLocation);
        var requestUrl = `${OPEN_WEATHERMAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        },
            function (res) {
                throw new Error('Unable to find weather for that location!');
            })
    }
}