'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var API = require('../helpers/api');


var TodoActionCreator = {
	createTodo: function (todo) {
		var newTodoPromise = API.createTodo(todo);

		newTodoPromise
			.then(function (newTodo) {
				Dispatcher.dispatch({
					actionType: ActionTypes.CREATE_TODO,
					todo: newTodo
				});
			})
			.fail(function (xhr, status, err) {
				console.log('Failed To Post!');
			});
	},

<<<<<<< HEAD
=======
	deleteTodo: function (todo) {
		var deleteTodoPromise = API.deleteTodo(todo);

		deleteTodoPromise
			.then(function () {
				Dispatcher.dispatch({
					actionType: ActionTypes.DELETE_TODO,
					todoId: todo._id
				});
			})
			.fail(function (xhr, status, err) {
				console.log('Failed To Delete Post!')
			});
	},

>>>>>>> b661c66e6f11361c0f74a85e7067d40c94b40804
	updateTodo: function (todo) {
		var updateTodoPromise = API.updateTodo(todo);

		updateTodoPromise
			.then(function (updatedTodo) {
				Dispatcher.dispatch({
					actionType: ActionTypes.UPDATE_TODO,
					todo: updatedTodo
				});
			})
			.fail(function (xhr, status, err) {
				console.log('Failed To Update Post!');
			});
	}
};

module.exports = TodoActionCreator;














