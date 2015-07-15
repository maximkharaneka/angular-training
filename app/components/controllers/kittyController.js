(function (module) {
    var kittyController = function ($scope) {

        $scope.kittys = [{
            clickCount: 0,
            name:'Redy',
            src: '/img/Redy.gif'
        }, {
            clickCount: 0,
            name:'Graye',
            src: '/img/Graye.gif'

        }, {
            clickCount: 0,
            name:'Flye',
            src: '/img/Flye.gif'

        }, {
            clickCount: 0,
            name:'Pinkie',
            src: '/img/Pinkie.gif'

        }, {
            clickCount: 0,
            name:'Whity',
            src: '/img/Whity.gif'

        }];

        $scope.kittyClick = function (cat) {
            cat.clickCount = cat.clickCount + 1;
        };

    };
    module.controller("kittyController", kittyController);

}(angular.module("app")));