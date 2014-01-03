'use strict';
var lokiAnansi =  angular.module('lokiAnansi', [
                                  'ngCookies',
                                  'ngResource',
                                  'ngSanitize',
                                  'http-auth-interceptor',
                                  'ui.bootstrap',
                                  'ngRoute'
                                ]);
lokiAnansi.config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/mainSite/main.html',
          controller: 'MainCtrl'
        })
        .when('/register', {
          templateUrl : 'partials/register.html',
          controller  : 'SignupCtrl'
        })
        .when('/articles', {
          templateUrl : 'partials/admin/admin.html'
        })
        .when('/articles/create', {
          templateUrl: 'partials/admin/newArticle.html'
        })
        .when('/articles/:blogId', {
          templateUrl: 'partials/admin/admin.html'
        })
        .when('/research', {
          templateUrl: 'partials/mainSite/research.html'
        })
        .otherwise({
          redirectTo: '/'
        });      
    $locationProvider.html5Mode(true);
  });
lokiAnansi.run(function ($rootScope, $location, Auth) {
    //watching the value of the currentUser variable.
    $rootScope.$watch('currentUser', function(currentUser) {
      // if no currentUser and on a page that requires authorization then try to update it
      // will trigger 401s if user does not have a valid session
      if (!currentUser && (['/', '/login', '/logout', '/register'].indexOf($location.path()) == -1 )) {
        Auth.currentUser();
      }
    });

    // On catching 401 errors, redirect to the login page.
    $rootScope.$on('event:auth-loginRequired', function() {
      $location.path('/login');
      return false;
    });
  });
