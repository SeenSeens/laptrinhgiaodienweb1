angular.module( "myApp", [] ).controller( "myCtrl", ($scope) => {
	// $scope.A = 0;
	// $scope.B = 0;
	// $scope.C = 0;
	$scope.findMax = () => {
		var max = $scope.A;
		if($scope.B > max)
			max = $scope.B;
		if($scope.C > max)
			max = $scope.C;
		$scope.max = max;
	}
	// Bài 2
	$scope.sort = () => {
		var temp;
		if($scope.A > $scope.B) { 
			temp = $scope.A;
			$scope.A = $scope.B;
			$scope.B = temp;
		}
		if($scope.A > $scope.C) {
			temp = $scope.A;
			$scope.A = $scope.C;
			$scope.C = temp;
		}
		if($scope.B > $scope.C) {
			temp = $scope.B;
			$scope.B = $scope.C;
			$scope.C = temp;
		}
	}
	// Bài 3
	$scope.giaiPTB1 = () => {
		if($scope.A == 0) {
			if($scope.B == 0)
				$scope.x = "Phương trình vô số nghiệm";
			else
				$scope.x = "Phương trình vô nghiệm";
		} else {
			$scope.x = -$scope.B/$scope.A;
		}
	}	
} );