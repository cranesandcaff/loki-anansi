'use strict';

angular.module('lokiAnansi')
	.factory('User', function ($resource){
		return $resource('/auth/users/:id/', {},
						 {
							 'update': {
								 method: 'PUT'
							 }
						 });
	});