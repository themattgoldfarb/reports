/**
 * Created by matt on 11/15/14.
 */
var app = angular.module('myApp', ['mc.resizer', 'section.directive']);

app.controller('MainCtrl', function($scope) {
    $scope.content = 'Hello World';
});

