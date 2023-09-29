const app = angular.module('myApp', []);
app.factory('factory', () => {
    const factory = {};
    // Hàm sinh số ngẫu nhiên
    factory.RanDom = (R, C) => {
        const randomArray = [];
        for (let i = 0; i < R; i++) {
            randomArray[i] = [];
            for(let j = 0; j < C; j++) {
                randomArray[i][j] = Math.floor(Math.random() * 20) - 10;
            }
        }
        return randomArray;
    };
    return factory;
});
app.controller('lab5',[ '$scope', 'factory', ($scope, factory) => {
    $scope.array = [];
    // $scope.C = 0;
    // $scope.R = 0;
    $scope.numbers = [
        [5, 12, 17, 9, 3],
        [13, 4, 8, 14, 1],
        [9, 6, 3, 17, 21]
    ];
    // Bài 2
    $scope.GenerateRandomArray = (R,C) => {
        if(R, C) return $scope.array = factory.RanDom(R,C);
    }
    // Bài 3
    $scope.SumRows = (R, C) => {
        // Tạo mảng ngẫu nhiên
        $scope.array = $scope.GenerateRandomArray(R, C);

        $scope.sum = null;
        // Lặp qua từng hàng và tính tổng
        $scope.array.forEach(row => {
            let rowSum = 0;
            row.forEach(element => {
                rowSum += element;
            });
            $scope.sum = $scope.sum + rowSum +" ";
            return $scope.sum;

        });
    };
    // Bài 4
    /*$scope.SumCols = (R, C) => {
        let str = "";
        for (let i = 0; i < C; i++) { // Lặp qua các cột (C)
            let sum = 0;
            for (let j = 0; j < R; j++) { // Lặp qua các hàng (R)
                sum += $scope.array[j][i];
            }
            str += sum + " "; // Thêm tổng của cột vào chuỗi
        }
        return str;
    };*/

    /**
     * Dùng vòng lặp for of
     */
    /*$scope.SumCols = (R, C) => {
        let str = "";
        $scope.sum = null;
        for (let i = 0; i < C; i++) {
            let sum = 0;
            for (const row of $scope.array) {
                sum += row[i];
            }
            $scope.sum = ($scope.sum || 0) + sum + " ";
        }
        return $scope.sum;
    };*/

    /**
     * Dùng vòng lặp for in
     */
    /*$scope.SumCols = (R, C) => {
        let str = "";
        $scope.sum = null;
        for (let i = 0; i < C; i++) {
            let sum = 0;

            for (const row in $scope.array) {
                sum += $scope.array[row][i];
            }

            $scope.sum = ($scope.sum || 0) + sum + " ";
        }
        return $scope.sum;
    };*/

    /**
     * Dùng vòng lặp foreach
     */
    $scope.SumCols = (R, C) => {
        $scope.sum = null;
        for (let i = 0; i < C; i++) {
            let sum = 0;

            $scope.array.forEach(row => {
                sum += row[i];
            });
            $scope.sum = ($scope.sum || 0) + sum + " ";
        }
        return $scope.sum;
    };

    // Bài 5
    $scope.SumRowsCols = () => {
        $scope.array = $scope.GenerateRandomArray($scope.R, $scope.C);
        $scope.sum = null;

        if ($scope.sumRows) {
            return $scope.sum = $scope.SumRows($scope.R, $scope.C);
        }

        if ($scope.sumCols) {
            return $scope.sum = $scope.SumCols($scope.R, $scope.C);
        }
    };


}]);