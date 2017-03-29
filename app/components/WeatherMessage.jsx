var React = require('react');

var WeatherMessage = (props) => {
    var {temp, myLocation} = props;
    
    return (
            <p className="text-center">The tempature in {myLocation} is {temp}!</p>
        );
}

module.exports = WeatherMessage;