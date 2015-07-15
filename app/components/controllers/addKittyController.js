(function (module) {
    var addKittyController = function ($scope) {

        $scope.name="";
        $scope.src="";

        $scope.tmpSrc="";

        $scope.urlBlur = function () {
            $scope.src=$scope.tmpSrc;
        };


    };
    module.controller("addKittyController", addKittyController);

}(angular.module("app")));