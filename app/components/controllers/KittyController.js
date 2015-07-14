(function (module) {
    var kittyController = function ($scope, $http) {

        $scope.kitty = {
            clickCount: 0,
            src: '/img/cat.jpg',
            kittyClick: function () {
                //this.clickCount = this.clickCount + 1;

                var that = this;
                $http.get('/kittyCount').
                    success(function (data, status, headers, config) {
                        // this callback will be called asynchronously
                        // when the response is available
                        that.clickCount =  parseInt(data);
                        that.clickCount = that.clickCount + 1;
                        $http.get('/kittyCount?count='+that.clickCount).
                            success(function (data, status, headers, config) {
                                // this callback will be called asynchronously
                                // when the response is available
                            }).
                            error(function (data, status, headers, config) {
                                // called asynchronously if an error occurs
                                // or server returns response with an error status.
                            });
                    }).
                    error(function (data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });


            }
        };

        //$http.get("/kittyCount")
        //    .then(function () {
        //        // process success
        //        // ...
        //    })
        //    .catch(alerting.errorHandler("Failed to load data!"));


    };
    module.controller("kittyController", kittyController);

}(angular.module("app")));