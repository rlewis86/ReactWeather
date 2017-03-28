var React = require('react');

var WeatherForm = React.createClass({
    onFormSbumit: function(e){
        e.preventDefault();

        var myLocation = this.refs.myLocation.value;
        
        if(myLocation.length > 0){
            //clear textbox
            this.refs.myLocation.value = '';

            //call the parent function
            this.props.onSearch(myLocation);
        }
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSbumit}>
                <input type="text" ref="myLocation"/>
                <button type="submit">Get Weather</button>
            </form>
        );
    }
});

module.exports = WeatherForm;