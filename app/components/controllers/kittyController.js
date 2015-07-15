(function (module) {
    var kittyController = function ($scope,kittyService) {

        $scope.mainIndex = 0;
        $scope.kittys = kittyService.All();

        $scope.kittyClick = function (cat) {
            cat.clickCount = cat.clickCount + 1;
        };
        $scope.kittyNameClick = function (cat) {
            var index;
            $scope.kittys.some(function(entry, i) {
                if (entry.name == cat.name) {
                    index = i;
                    return true;
                }
            });
            $scope.mainIndex = index;
            $scope.kittys[index].isViewed=true;
        };
        $scope.kittyIncrease = function (cat, delta) {
            cat.clickCount = cat.clickCount + delta;
        };
        $scope.applyFind = function () {
            $scope.nameFilter=$scope.findName;
        };


    };
    module.controller("kittyController", kittyController);

}(angular.module("app")));