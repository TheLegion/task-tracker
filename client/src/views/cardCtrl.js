angular.module('tasksApp')
.controller('taskViewCtrl', taskViewCtrl);

function taskViewCtrl(tasksService, $routeParams, $scope) {
	var id = parseInt($routeParams.id);
	tasksService.get(id).then(function (task) {
		$scope.task = task;
	});
}