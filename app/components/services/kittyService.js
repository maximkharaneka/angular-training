(function () {
    "use strict";
angular
    .module('app')
    .factory('kittyService', kittyService);
function kittyService() {
    var kittyFactory = {
        All: function () {
            return [{
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
        }
    };

    return kittyFactory;
}

})();