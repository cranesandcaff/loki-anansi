'use strict';
var lokiAnansi =  angular.module('lokiAnansi', [
                                  'ngCookies',
                                  'ngResource',
                                  'ngSanitize',
                                  'ui.bootstrap',
                                  'ui.router'
                                ]);
  lokiAnansi.config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home')

      $stateProvider
        .state('home', {
          url         : '/home',
          templateUrl : '../views/partials/main.html'
        })
});

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
//DIRECTIVES
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

lokiAnansi.directive('bgFull', function () {
  var slideheight = $(window).height() - $('.globalHeader').outerHeight() + 'px';
  console.log($(window).height());
  console.log($('.globalHeader').outerHeight())
  console.log(slideheight);
  return {
    restrict:'AE',
    link: function (scope, element, attrs) {
              element.css({'min-height': slideheight});
            }
  }
});