'use strict';

var React = require('react');


var AboutPage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>About Swoop</h1>
				<p>We are going to change the way people communicate</p>
				<ul>
					<li>Gulp</li>
					<li>React</li>
					<li>React Router</li>
					<li>Node</li>
					<li>Browserify</li>
					<li>Bootstrap</li>
					<li>Flux</li>
				</ul>
			</div>
		);
	}
});

module.exports = AboutPage;