angular.module('myApp', [])
    .factory('ArrayService', () => {
        var service = {};
        service.ngauNhien = (n) => {
            var randomArray = [];
            for (let i = 0; i < n; i++) {
                randomArray.push(Math.floor(Math.random() * 10) + 1);
            }
            return randomArray;
        };
        return service;
    })

    .controller('randomArr', ['$scope', 'ArrayService', ($scope, ArrayService) => {
    	let n = $scope.N;
        $scope.generateRandomArray = (n) => {
            if (n) {
                $scope.arr = ArrayService.ngauNhien(n);
            } else {
                $scope.arr = [];
            }
        };
        $scope.sortArray = () => {
		    /*$scope.generateRandomArray(n); // Tạo lại mảng ngẫu nhiên
		    // Sắp xếp mảng tăng dần
	        $scope.arr.sort(function(a, b) {
	            return a - b;
	        });
	        $scope.sortArrayResult = $scope.arr;*/
	        var randomArray = ArrayService.ngauNhien(n);
	        randomArray.sort(function(a, b) {
	            return a - b;
	        });
	        $scope.sortArrayResult = randomArray.join(', ');
    	};
    }]);

    // .controller('randomArrASC', ['$scope', 'ArrayService', function ($scope, ArrayService) {
    //     // Sử dụng hàm ngauNhien từ ArrayService
    //     var result = ArrayService.ngauNhien(5);
    //     console.log(result);
    // }]);
