angular.module('tasksApp')
.component('taskList', {
	templateUrl: 'components/taskList/taskList.html',
	controller: taskListCtrl,
	controllerAs: 'tasksCtrl',
	bindings: {
		add: '&',
	}
});

function taskListCtrl(tasksService) {
	var self = this;
	
	self.tasks = tasksService.getTasks();

	self.addTask = function() {
		if (self.newTaskText) {
			tasksService.add(self.newTaskText);
			self.newTaskText = '';
		}
	};
}