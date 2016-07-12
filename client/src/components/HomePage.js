'use strict';

var React = require('react');
var TodoForm = require('./todos/TodoForm');
var TextInput = require('./common/TextInput');


var Home = React.createClass({
	render: function () {
		return (
			<div className="jumbotron">
				<h1>Welcome To Swoop</h1>
				<p>Lets post some stuff</p>
			</div>
		);
	
		console.log(this.props.errors);
		return (
			<form onSubmit={this.props.saveTodo}>
				<h3>Todo Form</h3>
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



// var TodoForm = React.createClass({
// 	render: function () {
// 		console.log(this.props.errors);
// 		return (
// 			<form onSubmit={this.props.saveTodo}>
// 				<h3>Todo Form</h3>
// 				<TextInput
// 					name="post"
// 					placeholder="Post"
// 					value={this.props.todo.post}
// 					saveTodoState={this.props.saveTodoState}
// 					error={this.props.errors.post}
// 				/>
// 				<input type="submit" value="Save Todo" className="btn btn-success btn-lg" />
// 			</form>
// 		);
// 	}
// });


module.exports = Home;