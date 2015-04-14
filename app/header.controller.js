(function() {
'use strict';

	angular
		.module('myApp')
		.controller("headerController",['$scope', '$location', '$log' , isActive]);

	function isActive($scope, $location, $log){
		$scope.isActive = function(viewLocation){
			return viewLocation === $location.path();
		};
	};

})();