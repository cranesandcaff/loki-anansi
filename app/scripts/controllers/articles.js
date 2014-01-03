'use strict';

angular.module('lokiAnansi')
	.controller('ArticleCtrl', function ($scope, Articles, $location, $routeParams, $rootScope){

		$scope.create = function(){
			var article = new Articles({
				title: this.title,
				content: this.content,
				subtitle: this.subtitle,
				category: this.category
			});
			article.$save(function(response){
				$location.path("articles/" + response._id);
			});

			this.title = "";
			this.content = "";
			this.subtitle = "";
			this.category = "";
		};

		$scope.remove = function(article) {
			article.$remove();

			for (var i in $scope.articles){
				if ($scope.articles[i] == article) {
					$scope.articles.splice(i, 1);
				}
			}
		};

		$scope.update = function(){
			var article = $scope.article;
			blog.$update(function(){
				$location.path('articles/' + article._id);
			});
		};

		$scope.find = function() {
			Articles.query(function(articles){
				$scope.articles = articles;
			});
		};

		$scope.findOne = function(){
			Articles.get({
				articleId: $routePArams.articleId
			}, function(article){
				$scope.article = article;
			});
		};
	});