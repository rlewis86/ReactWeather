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
                <input type="text" ref="myLocation" placeholder="Enter Location" />
                <div className="text-center">
                <button className="hollow button expanded"  type="submit">Get Weather</button>
                </div>
            </form>
        );
    }
});

module.exports = WeatherForm;