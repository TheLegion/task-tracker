angular.module('tasksApp')
.component('taskList', {
	templateUrl: 'resources/components/taskList/taskList.html',
	controller: taskListCtrl,
	controllerAs: 'tasksCtrl'
});

function taskListCtrl(tasksService) {
	var self = this;
	
	tasksService.getTasks().then(function(tasks) {
		self.tasks = tasks;
	});

	self.addTask = function() {
		if (self.newTaskText) {
			tasksService.add(self.newTaskText);
			self.newTaskText = '';
		}
	};
}