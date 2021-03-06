'use strict';

angular.module('lokiAnansi')
	.factory('Blogs', function ($resource){
		return $resource('api/blogs/:blogId', {
			blogId: '@_id'
		}, {
			create: {
				method: 'POST'
			},
			update: {
				method: 'PUT'
			}
		});
	});