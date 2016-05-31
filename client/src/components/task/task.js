angular.module('tasksApp')
.component('taskComponent', {
	templateUrl: 'resources/components/task/task.html',
	controllerAs: 'taskCtrl',
	controller: taskController,
	bindings: {
		task: '<'
	}
});

function taskController(tasksService, $location) {
	var self = this;
	
	self.changeState = function() {
		tasksService.changeState(self.task);
	};
	
	self.open = function() {
		$location.path(self.task.id);
	};
}