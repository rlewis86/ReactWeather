var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Rob's Weather Site was built using <a target="_blank" href="https://facebook.github.io/react/docs/hello-world.html">React</a>, <a target="_blank" href="http://foundation.zurb.com/">Foundation-Sites</a>, and <a target="_blank" href="https://openweathermap.org/">Open Weather Map API.</a></p>
            <p>For more information you can contact the developer, Rob, at <a href="mailto:rswl86@gmail.com">rswl86@gmail.com</a>.</p>
        </div>
    );
}

module.exports = About;