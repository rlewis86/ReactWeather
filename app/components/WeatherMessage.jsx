var React = require('react');

var WeatherMessage = (props) => {
    var {temp, myLocation} = props;
    
    return (
            <p>The tempature in {myLocation} is {temp}!</p>
        );
}

module.exports = WeatherMessage;