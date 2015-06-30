angular.module('app')
.controller('AddCtrl', function($scope, catsResource, $location) {
	var lastId = '';
	catsResource.get().$promise.then(function (result) {
        lastId = result.lastId;
    });
	$scope.submit = function(){
		$scope.cat.count = 0;
		$scope.cat.id = ++lastId;
		catsResource.save($scope.cat);
		$location.path('/view');
	};
});