angular.module('georgeria', ['controllers', 'ui.router', 'gameCards', 'play'])

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

  $stateProvider
    .state('play', {
      url: '/play',
      templateUrl: 'app/views/play.html',
      controller: 'playController'
    });

});