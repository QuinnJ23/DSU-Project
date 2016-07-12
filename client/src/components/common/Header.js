'use strict';

var React = require('react');
var Link = require('react-router').Link;


var Header = React.createClass({
	render: function () {
		return (
			<div className="navbar navbar-default">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">Swoop</Link>
					<ul className="nav navbar-nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/todos-page">Test view posts</Link></li>
						<li><Link to="/manage-todo">Test add posts</Link></li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Header;
