angular.module( "myApp", [] ).controller( "myCtrl", ($scope) => {
	$scope.A = 0;
	$scope.B = 0;
	$scope.C = 0;
	$scope.findMax = () => {
		var max = $scope.A;
		if($scope.B > max)
			max = $scope.B;
		if($scope.C > max)
			max = $scope.C;
		return max = 'MAX ' + max;
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
		return $scope.A + ' ' + $scope.B + ' ' + $scope.C
	}
	// Bài 3
	$scope.giaiPTB1 = () => {
		if($scope.A === 0) {
			if($scope.B === 0)
				return "Phương trình vô số nghiệm";
			else
				return "Phương trình vô nghiệm";
		} else {
			return -$scope.B / $scope.A;
		}
	}
	// Bài 4
	$scope.giaiPTB2 = () => {
		if($scope.A !== 0) {
			let delta = Math.pow($scope.B, 2) - 4 * $scope.A *$scope.C;
			if(delta === 0) {
				return "Phuong trinh co nghiem kep" + ( -$scope.B / ( 2 * $scope.A) );
			} else {
				if(delta < 0) {
					return "Phuong trinh vo nghiem";
				} else {
					return ( -$scope.B + Math.sqrt(delta) ) / ( 2 * $scope.A );
					return ( -$scope.B - Math.sqrt(delta) ) / ( 2 * $scope.A );
				}
			}
		} else {
			// Phuong trinh bac 1
			if($scope.B === 0) {
				if($scope.C === 0)
					return "Phương trình vô số nghiệm";
				else
					return "Phương trình vô nghiệm";
			}
			else {
				return -$scope.C / $scope.B;
			}
		}
	}
} );