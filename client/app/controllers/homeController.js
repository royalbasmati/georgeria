angular.module('controllers', [])

.controller('homeController', function($scope, $state) {

  $scope.gameCards = function() {

    $state.go('gameCards');
  };

});