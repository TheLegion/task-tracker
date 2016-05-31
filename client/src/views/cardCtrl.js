angular.module('tasksApp')
.controller('taskViewCtrl', taskViewCtrl);

function taskViewCtrl(tasksService, $routeParams, $scope) {
	var id = parseInt($routeParams.id);
	$scope.task = tasksService.get(id);
}