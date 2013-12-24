'use strict'

angular.module('lokiAnansi')
	.factory('Session', function($resource){
		return $resource('/auth/session/');
	});