angular.module('georgeria', ['controllers', 'ui.router'])

.config(function($stateProvider, $httpProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/views/home.html',
      controller: 'homeController'
    });

  $stateProvider
    .state('gameCards', {
      url: '/gameCards',
      templateUrl: 'app/views/gameCards.html',
      controller: 'gameCardsController'
    });

});