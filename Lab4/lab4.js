angular.module('myApp', [])
    /**
     *
     */
    .factory('ArrayService', () => {
        var factory = {};
        // Hàm sinh số ngẫu nhiên
        factory.RanDom = (n) => {
            var randomArray = [];
            for (let i = 0; i < n; i++) {
                randomArray.push(Math.floor(Math.random() * 10) -1);
            }
            return randomArray;
        };
        // Hàm kiểm tra số nguyên tố
        factory.CheckPrimes = (x) => {
            if (x < 2) return false;
            for (let i = 2; i <= Math.sqrt(x); i++) {
                if (x % i === 0) return false;
            }
            return true;
        };
        // Hàm kiểm tra số chính phương
        factory.CheckPerfectSquare = (number) => {
            // Kiểm tra xem số có là số nguyên dương không
            if (number <= 0) {
                return false;
            }
            // Tính căn bậc hai của số và kiểm tra nó có phải là số nguyên không
            var squareRoot = Math.sqrt(number);
            return squareRoot === Math.floor(squareRoot);
        };
        return factory;
    })
    // .run( function () );
    .controller('lab4', ['$scope', 'ArrayService', ($scope, ArrayService) => {
        /**
         * Bài 1
         * generateRandomArray => Hàm này trả về 1 mảng ngãu nhiên
         * @param n
         * @returns {[]|*}
         */
        $scope.GenerateRandomArray = (n) => {
            if (n) {
                return $scope.arr = ArrayService.RanDom(n);
            }
        },
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
             * Bài 3
             * @returns {*[]}3
             */
            $scope.PrintOddElement = () => {
                let n = $scope.N;
                let array = [];
                $scope.arr  = $scope.GenerateRandomArray(n);

                $scope.arr.forEach(item => {
                    if (item % 2!== 0) {
                        array.push(item);
                    }
                });
                if (array.length > 0) {
                    return $scope.le = array;
                } else {
                    return $scope.le = "Không có số lẻ nào";
                }
            },

            /**
             * Bài 4
             */
            $scope.OutputLessThan20 = () => {
                let n = $scope.N;
                let array = [];
                $scope.arr  = $scope.GenerateRandomArray(n);
                $scope.arr.forEach(item => {
                    if(item < 20 && item % 2 === 0) {
                        array.push(item);
                    }
                });
                //$scope.lessThan20 = mang;
                if(array.length > 0) {
                    return $scope.result = array;
                } else {
                    return $scope.result = "Không có phần tử chẵn nào nhỏ hơn 20";
                }
            },
        /**
         * Bài 5
         */
        $scope.OutputPrimes = () => {
            let n = $scope.N;
            let array = [];
            $scope.arr = $scope.GenerateRandomArray(n);
            $scope.arr.forEach(item => {
                if(ArrayService.CheckPrimes(item)) {
                    array.push(item);
                }
            });
            if(array.length > 0) {
                $scope.result = array;
            } else {
                $scope.result = "Không có số nguyên tố nào";
            }
        }
        /**
         * Bài 6
         */
        $scope.OutputPerfectSquare = () => {
            let n = $scope.N;
            let array = [];
            $scope.arr = $scope.GenerateRandomArray(n);
            $scope.arr.forEach(item => {
                if(ArrayService.CheckPerfectSquare(item)) {
                    array.push(item);
                }
            });
            if(array.length > 0) {
                $scope.result = array;
            } else {
                $scope.result = "Không có số chính phương nào";
            }
        }
        /**
         * Bài 7
         */
        $scope.InViTriNhoNhat = () => {
            let n = $scope.N;
            $scope.arr = $scope.GenerateRandomArray(n);

            let minValue = $scope.arr[0]; // Giả sử phần tử đầu tiên là nhỏ nhất
            let minIndex = 0; // Giả sử vị trí đầu tiên là vị trí nhỏ nhất

            $scope.arr.forEach( (item, index) => {
                if(item < minValue) {
                    minValue = item;
                    minIndex = index;
                }
            });
            $scope.result = minIndex;
        }

        /**
         * Bài 8
         * @constructor
         */
        $scope.InViTriLonNhat = () => {
            let n = $scope.N;
            $scope.arr = $scope.GenerateRandomArray(n);

            let maxValue = $scope.arr[0]; // Giả sử phần tử đầu tiên là lon nhất
            let maxIndex = 0; // Giả sử vị trí đầu tiên là vị trí lon nhất

            $scope.arr.forEach( (item, index) => {
                if(item > maxValue) {
                    maxValue = item;
                    maxIndex = index;
                }
            });
            $scope.result = maxIndex;
        }

        /**
         * Bài 9
         * @constructor
         */
        $scope.InViTriPhanTuSoNguyenTo = () => {
            let n = $scope.N;
            let array = [];
            $scope.arr = $scope.GenerateRandomArray(n);

            $scope.arr.forEach( (item, index) => {
                if(ArrayService.CheckPrimes(item)) {
                    array.push(index);
                }
            });
            if(array.length > 0) {
                $scope.result = array;
            } else {
                $scope.result = "Không có số nguyen to nao";
            }
        }

        /**
         * Bài 10
         * @constructor
         */
        $scope.InViTriPhanTuSoNguyenToLonHon23 = () => {
            let n = $scope.N;
            let array = [];
            $scope.arr = $scope.GenerateRandomArray(n);

            $scope.arr.forEach( (item, index) => {
                if(ArrayService.CheckPrimes(item) && item > 23) {
                    array.push(index);
                }
            });
            if(array.length > 0) {
                $scope.result = array;
            } else {
                $scope.result = "Không có số nguyen to nao";
            }
        }

        /**
         * Bài 11
         * @constructor
         */
        $scope.InViTriPhanTuAmDauTien = () => {
            let n = $scope.N;
            $scope.arr = $scope.GenerateRandomArray(n);

            for (let index in $scope.arr) {
                if($scope.arr[index] < 0) {
                    $scope.result = index;
                    break;
                }
            }
        }

        /**
         * Bài 12
         * @constructor
         */
        $scope.TimViTriCuoiCungCuaX = () => {
            let n = $scope.N;
            $scope.arr = $scope.GenerateRandomArray(n);
            let x = $scope.X; /* giá trị x cần tìm */;

            let lastIndex = -1; // Khởi tạo biến lưu trữ vị trí cuối cùng của x

            for (let [index, item] of $scope.arr.entries()) {
                if (item === x) {
                    lastIndex = index;
                }
            }

            if (lastIndex !== -1) {
                $scope.result = lastIndex;
            } else {
                $scope.result = `Không tìm thấy ${x} trong mảng`;
            }
        }

    }]);
