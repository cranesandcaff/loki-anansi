'use strict';

angular.module('lokiAnansi')
	.controller('LoginCtrl', function($scope, Auth, $location, $modalInstance){
		$scope.error = {};
		$scope.user = {};
		
		$scope.login= function(form){
			Auth.login('password', {
				'email' : $scope.user.email,
				'password': $scope.user.password
			}, 
			function(err){
				$scope.errors = {};
				
				if (!err){
					$location.path('/admin');
					$modalInstance.close();
				} else {
					angular.forEach(err.errors, function(error, field){
						form[field].$setValidity('mongoose', false);
						$scope.errors[field] = error.type;
					});
					$scope.errors.other = err.message;
				}
			});
		};
	});