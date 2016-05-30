angular.module('tasksApp')
.controller('tasksViewCtrl', tasksViewCtrl);

function tasksViewCtrl(tasksService, $location) {

	var self = this;

	self.tasks = tasksService.getTasks();

	self.open = function(task) {
		$location.path(task.id);
	};

	self.changeState = function(task) {
		tasksService.changeState(task);
	};

	self.add = function(text) {
		tasksService.addTask(text);
	};

}