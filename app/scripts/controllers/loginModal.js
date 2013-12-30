var modalLoginCtrl = function($scope, $modal){
	$scope.open = function(){
		$('body').css('overflow', 'hidden');
		var modalInstance = $modal.open({
			templateUrl: '../../views/partials/login.html',
			controller: 'LoginCtrl'
		});
	}
};