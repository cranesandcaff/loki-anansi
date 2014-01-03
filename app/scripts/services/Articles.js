'use strict';

angular.module('lokiAnansi')
	.factory('Articles', function ($resource){
		return $resource('/api/articles/:articleId', {
			articleId: '@_id'
		}, {
			create: {
				method: 'POST'
			},
			update: {
				method: 'PUT'
			}
		});
	});