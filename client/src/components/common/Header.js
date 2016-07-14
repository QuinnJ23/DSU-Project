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
<<<<<<< HEAD
						<li><Link to="/about-page">About</Link></li>
						<li><Link to="/todos-page">Forms</Link></li>
						<li><Link to="/manage-todo">Add todo</Link></li>
=======
						<li><Link to='/about-page'> About Page </Link></li>
>>>>>>> b661c66e6f11361c0f74a85e7067d40c94b40804
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Header;
