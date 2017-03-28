var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


var objOne = {
    name: 'Robert',
    location: 'Barberton'
};

var objTwo = {
    age: 25,
    ...objOne
};

console.log(objTwo);

// Render in the DOM
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        <Route path="about" component={About} />
        <Route path="examples" component={Examples} />
            <IndexRoute component={Weather} />
        </Route>
    </Router>,
    document.getElementById('app')
);
