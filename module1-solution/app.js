(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.stateOfBeing = "";

  $scope.checkTooMuch = function () {
	console.log($scope.dishes);
	if ($scope.dishes==="") {
		$scope.stateOfBeing = "Please enter data first";		
	}	else {
		const lunch = $scope.dishes.split(',');
		switch (lunch.length) {
			case 1:
			case 2:
			case 3:
				$scope.stateOfBeing = "Enjoy!";
				break;
			default:
				$scope.stateOfBeing = "Too much!";
		}
	}
	
  };

}

})();