'use strict';

/**
 * @ngdoc function
 * @name personalwebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalwebsiteApp
 */
angular.module('personalwebsiteApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.isActive = function(path) {
    if ($location.path().substr(0, path.length) === path) {
      return true;
    } else {
      return false;
    }
};
  });
