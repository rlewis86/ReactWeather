var React = require('react');
var { Link } = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out</p>
            <ol>
                <li>
                    <Link to="/?location=Dover,OH'">Dover, OH</Link>
                </li>
                <li>
                    <Link to="/?location=Cleveland,OH'">Cleveland, OH</Link>
                </li>
                <li>
                    <Link to="/?location=Columbus,OH'">Columbus, OH</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Examples;