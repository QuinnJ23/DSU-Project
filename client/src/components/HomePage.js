'use strict';

var React = require('react');
var TodoForm = require('./todos/TodoForm');
var TextInput = require('./common/TextInput');
var Link = require('react-router').Link;
var TodoList = require('./todos/todoList');
var TodoStore = require('../stores/todoStore');
var browserHistory = require('react-router').browserHistory;
var TodoActionCreator = require('../actions/todoActionCreator');
var $ = require('jquery');





var Home = React.createClass({
	getInitialState: function () {
		return {
			todos: TodoStore.getAllTodos(),

			errors: {},
			todo: {
				post: ''
			}

		}
	},

	componentWillMount: function () {
		TodoStore.addChangeListener(this.onChange);

		var todoId = this.props.params.id;

		if (todoId) {
			this.setState({
				todo: TodoStore.getTodoById(todoId)
			});
		}

	},

	componentWillUnmount: function () {
		TodoStore.removeChangeListener(this.onChange);
	},

	onChange: function () {
		this.setState({
			todos: TodoStore.getAllTodos()
		});
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

		this.setState({
			todo: {post: ''}
		})
		// todoApi.saveTodo(this.state.todo);
		

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
		var displayTodos = this.state.todos.slice()
		return (
			<div className="jumbotron">
				<h1>Welcome To Swoop</h1>
				<p>Fly with the eagles</p>
				<TodoForm
					todo={this.state.todo}
					saveTodoState={this.saveTodoState}
					saveTodo={this.saveTodo}
					errors={this.state.errors}
				/>

				<TodoList
					todos={displayTodos.reverse()}
					/>
			</div>
		);
	}
	

});


var time = new Date().getTime();

$(document.body).bind("keypress", function(e) {
	time = new Date().getTime();
});

function refresh() {
	if(new Date().getTime() - time >= 30000) {
		window.location.reload(true);
	} else {
		setTimeout(refresh, 5000);
	}
}
setTimeout(refresh, 5000);


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