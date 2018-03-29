angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
    $scope.submit = function(username) {

        alert("Thanks " + username);

    }
});