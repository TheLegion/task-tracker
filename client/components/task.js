angular.module('tasksApp')
.component('taskComponent', {
	templateUrl: 'components/task.html',
	controllerAs: 'taskCtrl',
	bindings: {
		task: '<',
		changeState: '&',
		open: '&'
	}
});