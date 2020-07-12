(function () {
'use strict';

//int d = 0;

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakev";
  $scope.dishes = "";
  $scope.stateOfBeing = "Hungry";

  $scope.checkTooMuch = function () {
    $scope.stateOfBeing = "fed";
	console.log($scope.dishes);
//	if ($scope.dishes===undefined) {
	if ($scope.dishes==="") {
		$scope.stateOfBeing = "no dishes";		
	/*} 	else if ($scope.dishes==="") {
			$scope.stateOfBeing = "no empty dishes"; */
	}	else {
		const lunch = $scope.dishes.split(',');
		//console.log(lunch.length);
		//console.log(lunch[0]);
		/*lunch.forEach(function(element) {
			console.log(element);
		})*/
		let d = 0;
		for (let i = 0; i < lunch.length; i++) {
			//console.log(lunch[i]);
			if (lunch[i]==="") {
				console.log(lunch[0]);
			}	else {
				d++;
			}
			console.log(d);
		}

		switch (d) {
//		switch (lunch.length) {
			case 1:
			case 2:
			case 3:
				$scope.stateOfBeing = "ate just enough";
				break;
			default:
				$scope.stateOfBeing = "greedy bastard";
		}
	}
	
  };

}

})();