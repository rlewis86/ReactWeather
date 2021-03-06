var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(myLocation).then(function (temp) {
            that.setState({
                isLoading: false,
                myLocation: myLocation,
                temp: temp
            });
        },
            function (e) {
                that.setState({
                    setLoading: false,
                    errorMessage: e.message
                });
            });
    },
    render: function () {

        var { isLoading, temp, myLocationm, errorMessage } = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather....</h3>
            } else if (temp && myLocation) {
                return <WeatherMessage myLocation={myLocation} temp={temp} />
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return(
                    <ErrorModal message={errorMessage}/>
                    
                )
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;