'use strict';

var React = require('react');
var TextInput = require('../common/TextInput');


var TodoForm = React.createClass({
	render: function () {
		console.log(this.props.errors);
		return (
			<form onSubmit={this.props.saveTodo}>
				<h3>Post Form</h3>
				<TextInput
					name="post"
					placeholder="Post"
					value={this.props.todo.post}
					saveTodoState={this.props.saveTodoState}
					error={this.props.errors.post}
				/>
				<input type="submit" value="Save Todo" className="btn btn-success btn-lg" />
			</form>
		);
	}
});

module.exports = TodoForm;