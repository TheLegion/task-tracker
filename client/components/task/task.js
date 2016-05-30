angular.module('tasksApp')
.component('taskComponent', {
	templateUrl: 'components/task/task.html',
	controllerAs: 'taskCtrl',
	bindings: {
		task: '<',
		changeState: '&',
		open: '&'
	}
});