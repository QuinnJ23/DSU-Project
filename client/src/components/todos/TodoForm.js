'use strict';

var React = require('react');
var TextInput = require('../common/TextInput');


var TodoForm = React.createClass({
	render: function () {
		console.log(this.props.errors);
		return (
			<form onSubmit={this.props.saveTodo}>
				<TextInput
					name="post"
					placeholder="Enter Your Swoop Here"
					value={this.props.todo.post}
					saveTodoState={this.props.saveTodoState}
					error={this.props.errors.post}
					autocomplete="off"
				/>
				<input type="submit" value="Post" className="btn btn-success btn-lg" />
			</form>
		);
	}
});

module.exports = TodoForm;