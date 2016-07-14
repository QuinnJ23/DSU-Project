'use strict';

var React = require('react');
var TextInput = require('../common/TextInput');


var TodoForm = React.createClass({
	render: function () {
		console.log(this.props.errors);
		return (
			<form onSubmit={this.props.saveTodo}>
				<h3>Post a Swoop</h3>
				<TextInput
					placeholder="Enter your Swoop Here"
					value={this.props.todo.post}
					saveTodoState={this.props.saveTodoState}
					error={this.props.errors.post}
				/>
				<input type="submit" value="Post" className="btn btn-success btn-lg" />
			</form>
		);
	}
});

module.exports = TodoForm;