'use strict';
var lokiAnansi =  angular.module('lokiAnansi', [
                                  'ngCookies',
                                  'ngResource',
                                  'ngSanitize',
								  'http-auth-interceptor',
                                  'ui.bootstrap',
                                  'ui.router'
                                ]);
lokiAnansi.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/')

      $stateProvider
        .state('home', {
			url         : '/',
			templateUrl : 'partials/main.html',
			controller: 'MainCtrl'
        })
		.state('login', {
			url		  	: '/login',
			templateUrl : 'partials/login.html',
			controller	: 'loginCtrl'
		})
		.state('register', {
			url			: '/register',
			templateUrl	: 'partials/register.html',
			controller	: 'SignupCtrl'
		})
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
