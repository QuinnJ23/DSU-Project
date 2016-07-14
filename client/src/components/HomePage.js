'use strict';

var React = require('react');
var TodoForm = require('./todos/TodoForm');
var TextInput = require('./common/TextInput');
var Link = require('react-router').Link;
var TodoList = require('./todos/TodoList');
var TodoStore = require('../stores/todoStore');



var Home = React.createClass({
	getInitialState: function () {
		return {
			todos: TodoStore.getAllTodos()
		}
	},

	componentWillMount: function () {
		TodoStore.addChangeListener(this.onChange);
	},

	componentWillUnmount: function () {
		TodoStore.removeChangeListener(this.onChange);
	},

	onChange: function () {
		this.setState({
			todos: TodoStore.getAllTodos()
		});
	},

	render: function () {
		return (
			<div className="jumbotron">
				<h1>Welcome To Swoop</h1>
				<p>Lets post some stuff</p>
				<TodoList
					todos={this.state.todos}
					/>
			</div>
		);
	}
	

});




module.exports = Home;