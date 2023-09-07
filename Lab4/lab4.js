angular.module('myApp', [])
    /**
     *
     */
    .factory('ArrayService', () => {
        var service = {};
        service.ngauNhien = (n) => {
            var randomArray = [];
            for (let i = 0; i < n; i++) {
                randomArray.push(Math.floor(Math.random() * 10) - 1);
            }
            return randomArray;
        };
        return service;
    })
    // .run( function () );
    .controller('lab4', ['$scope', 'ArrayService', ($scope, ArrayService) => {

        /**
         * generateRandomArray => Hàm này trả về 1 mảng ngãu nhiên
         * @param n
         * @returns {[]|*}
         */
        $scope.generateRandomArray = (n) => {
            if (n) {
                return $scope.arr = ArrayService.ngauNhien(n);
            }
        };
        // Theo dõi thay đổi của $scope.N
        // $scope.$watch('N', () => {
        //     $scope.generateRandomArray();
        // });
        // $scope.generateRandomArray();

        // $scope.sortArray = () => {
		//     $scope.generateRandomArray(n); // Tạo lại mảng ngẫu nhiên
        //     return console.log($arr);
		//     // Sắp xếp mảng tăng dần
	    //     $scope.arr.sort(function(a, b) {
	    //         return a - b;
	    //     });
	    //     $scope.sortArrayResult = $scope.arr;
	    //     var randomArray = ArrayService.ngauNhien(n);
	    //     randomArray.sort(function(a, b) {
	    //         return a - b;
	    //     });
	    //     $scope.sortArrayResult = randomArray.join(', ');
    	// };

        /**
         *
         * @returns {*[]}
         */
        $scope.printOddElement = () => {
            let n = $scope.N;
            let arr = [];
            let x = $scope.generateRandomArray(n);
            $scope.arr = x;

            x.forEach(item => {
                if (item % 2!== 0) {
                    arr.push(item);
                }
            });
            if (arr.length > 0) {
                return $scope.le = arr;
            } else {
                return "Không có số lẻ nào?"
            }
        }
    }]);
