'use strict';

var React = require('react');
var Link = require('react-router').Link;
var TodoActionCreator = require('../../actions/todoActionCreator');


var TodoList = React.createClass({

	updateTodo: function (todo, event) {
		event.preventDefault();
		todo.completed ? todo.completed = false : todo.completed = true;
		TodoActionCreator.updateTodo(todo);
	},

	render: function () {
		var output;

		var createTodoRow = function (todo) {
			var tdClass = '';
			var isDone = 'Mark as Done';
			var todopost = todo.post;


			if (todo.completed) {
				tdClass = 'todo-done';
				isDone = 'Mark as Not Done';
				todopost = (<s>{todo.post}</s>);
			}

			return (
				<tr key={todo._id}>
					<td className={tdClass}><Link to={'/manage-todo/' + todo._id}>{todopost}</Link></td>
					<td><a href="#" onClick={this.deleteTodo.bind(this, todo)}>Delete</a></td>
					<td><a href="#" onClick={this.updateTodo.bind(this, todo)}>{isDone}</a></td>
				</tr>
			);
		};

		if (this.props.todos.length > 0) {
			output = this.props.todos.map(createTodoRow, this)
		} else {
			output = (<tr><td>There aren't any posts</td></tr>);
		}
		return (
			<table className="table">
				<thead>
					<tr>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{output}
				</tbody>
			</table>
		);
	}
});

module.exports = TodoList;
