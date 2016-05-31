angular.module('tasksApp', ['ngRoute'])
.service('tasksService', tasksService)
.config(routeConfig);

function routeConfig($routeProvider) {
	$routeProvider
	.when('/', {
		template: '<task-list></task-list>'
	})
	.when('/:id', {
		templateUrl: 'resources/views/card.html',
		controller: 'taskViewCtrl'
	})
	.otherwise('/');
}

function tasksService($http) {
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
			return $http.get('./tasks').then(returnData);
		},
		changeState: function(task) {
			// TODO
//			task.checked = !task.checked;
		},
		addTask: function(text) {
			// TODO
//			var task = {
//				id: tasks[tasks.length - 1].id + 1,
//				text: text,
//				checked: false
//			};
//			tasks.push(task);
		},
		get: function(id) {
			return $http.get('./tasks/' + id).then(returnData);
		}
	};
	
	function returnData(response) {
		return response.data;
	}
}