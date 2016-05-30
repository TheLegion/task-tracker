angular.module('tasksApp')
.component('taskList', {
	templateUrl: 'components/taskList/taskList.html',
	controller: taskListCtrl,
	controllerAs: 'tasksCtrl',
	bindings: {
		tasks: '<',
		changeState: '&',
		add: '&',
		open: '&'
	}
});

function taskListCtrl() {
	var self = this;

	self.addTask = function() {
		if (self.newTaskText) {
			self.add({text: self.newTaskText});
			self.newTaskText = '';
		}
	};
}