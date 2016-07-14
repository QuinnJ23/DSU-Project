'use strict';

var React = require('react');
var TodoForm = require('./TodoForm');
var TodoActionCreator = require('../../actions/todoActionCreator');
var browserHistory = require('react-router').browserHistory;
var TodoStore = require('../../stores/todoStore');

var ManageTodoPage = React.createClass({

	getInitialState: function () {
		return {
			errors: {},
			todo: {
				post: ''
			}
		}
	},

	componentWillMount: function () {
		var todoId = this.props.params.id;

		if (todoId) {
			this.setState({
				todo: TodoStore.getTodoById(todoId)
			});
		}
	},

	saveTodoState: function (event) {
		var field = event.target.name;
		var value = event.target.value;
		var newTodo = Object.assign({}, this.state.todo);

		// sort of like todo.title or 
		newTodo[field] = value;

		this.setState({
			todo: newTodo
		});

	},

	saveTodo: function (event) {
		event.preventDefault();

		if (!this.todoFormIsValid()) {
			return;
		}

		if (this.state.todo._id) {
			TodoActionCreator.updateTodo(this.state.todo);
		} else {
			TodoActionCreator.createTodo(this.state.todo);
		}
		// todoApi.saveTodo(this.state.todo);
		
		browserHistory.push('/todos-page');

	},

	todoFormIsValid: function () {
		var formIsValid = true;
		var newErrors = {};

		if (this.state.todo.post.length < 3) {
			newErrors.post = 'Post cannot be less than 3 characters...pato';
			formIsValid = false;
		}


		this.setState({
			errors: newErrors
		});

		return formIsValid;

	},

	render: function () {
		console.log(this.state.todo);
		return (
			<div>
				<TodoForm
					todo={this.state.todo}
					saveTodoState={this.saveTodoState}
					saveTodo={this.saveTodo}
					errors={this.state.errors}
				/>
			</div>
		);
	}
});

module.exports = ManageTodoPage;







