angular.module('tasksApp', ['ngRoute'])
.service('tasksService', tasksService)
.config(routeConfig);

function routeConfig($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/list.html',
		controller: 'tasksViewCtrl',
		controllerAs: 'tasksViewCtrl'
	})
	.when('/:id', {
		templateUrl: 'views/card.html',
		controller: 'taskViewCtrl'
	})
	.otherwise('/');
}

function tasksService() {
	var tasks = [{
		id: 1,
		text: 'Изучить основы ангуляра',
		checked: true
	}, {
		id: 2,
		text: 'Изучить роутинг',
		checked: true
	}, {
		id: 3,
		text: 'Изучить компоненты'
	}, {
		id: 4,
		text: '???'
	}, {
		id: 5,
		text: 'Profit'
	}];

	return {
		getTasks: function() {
			return tasks;
		},
		changeState: function(task) {
			task.checked = !task.checked;
		},
		addTask: function(text) {
			var task = {
				id: tasks[tasks.length - 1].id + 1,
				text: text,
				checked: false
			};
			tasks.push(task);
		},
		get: function(id) {
			for (var i = 0; i < tasks.length; i++) {
				var task = tasks[i];
				if (task.id === id) {
					return task;
				}
			}
			return null;
		}
	};
}