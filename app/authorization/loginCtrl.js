var app = angular.module('app');

app.controller('loginCtrl', ['$window', '$scope', 'userObj', 'authenticationService', '$cookieStore', '$location', function ($window ,$scope, userObj, authenticationService, $cookieStore, $location) {
    'use strict';
    $scope.users = [];
    $scope.userName = '';
    $scope.userEmail = '';
    $scope.userPassword = '';
    $scope.userActive = 0;
    $scope.userNotActive = 1;

    $scope.users = userObj.user;

    if( $cookieStore.get('user') )
    {
        $scope.userActive = 1;
        $scope.userNotActive = 0;
    }

    $scope.login = function () {
       var autheticationResult =  authenticationService.checkLogin($scope.users, $scope.userEmail, $scope.userPassword);

        if(autheticationResult) {
            $scope.userName = autheticationResult.name;
            $cookieStore.put('user', $scope.userName);
            $cookieStore.put('fullUserData', autheticationResult);
            $window.location.reload();
    //        $location.path('#/home');
        }
    };

    $scope.logout = function(){
        $scope.userActive = 0;
        $scope.userNotActive = 1;
        $cookieStore.put('user', '');
        $cookieStore.put('fullUserData', undefined);
        $window.location.reload();
     //   $location.path('#/authorization');
    };
}]);
