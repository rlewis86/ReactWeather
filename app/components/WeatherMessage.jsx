var React = require('react');

var WeatherMessage = (props) => {
    var {temp, myLocation} = props;
    
    return (
            <h3 className="text-center">The tempature in {myLocation} is {temp}!</h3>
        );
}

module.exports = WeatherMessage;