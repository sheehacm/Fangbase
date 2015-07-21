/* global app:true */
/* exported app */

(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name fangbaseApp
   * @description
   * # fangbaseApp
   *
   * Main module of the application.
   */
  angular
    .module('fangbaseApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/posts.html',
          controller: 'PostsCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();