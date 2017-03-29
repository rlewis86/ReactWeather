var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (myLocation) {
        var that = this;
        debugger;

        this.setState({
            isLoading: true
        });

        openWeatherMap.getTemp(myLocation).then(function (temp) {
            that.setState({
                isLoading: false,
                myLocation: myLocation,
                temp: temp
            });
        },
            function (errorMsg) {
                that.setState({
                    setLoading: false,
                });
                alert(errorMsg);
            });
    },
    render: function () {

        var { isLoading, temp, myLocation } = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather....</h3>
            } else if (temp && myLocation) {
                return <WeatherMessage myLocation={myLocation} temp={temp} />
            }
        }
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;