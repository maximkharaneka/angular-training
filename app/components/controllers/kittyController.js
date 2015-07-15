(function (module) {
    var kittyController = function ($scope) {
        $scope.mainIndex = 0;

        $scope.kittys = [{
            clickCount: 0,
            name:'Redy',
            src: '/img/Redy.gif',
            isViewed:false
        }, {
            clickCount: 0,
            name:'Graye',
            src: '/img/Graye.gif',
            isViewed:false

        }, {
            clickCount: 0,
            name:'Flye',
            src: '/img/Flye.gif',
            isViewed:false

        }, {
            clickCount: 0,
            name:'Pinkie',
            src: '/img/Pinkie.gif',
            isViewed:false

        }, {
            clickCount: 0,
            name:'Whity',
            src: '/img/Whity.gif',
            isViewed:false

        }];

        $scope.kittyClick = function (cat) {
            cat.clickCount = cat.clickCount + 1;
        };
        $scope.kittyNameClick = function (index) {
            $scope.mainIndex = index;
            $scope.kittys[index].isViewed=true;
        };
        $scope.kittyIncrease = function (cat, delta) {
            cat.clickCount = cat.clickCount + delta;
        };
    };
    module.controller("kittyController", kittyController);

}(angular.module("app")));