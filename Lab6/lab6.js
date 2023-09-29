const app = angular.module('myApp', []);
app.controller('lab6', ($scope) => {
    $scope.Students = [];
    $scope.stu = {};
    $scope.student = {
        fullname : "Nguyễn Thị Tèo",
        birthday : "02/06/2000",
        gender : "Nam",
        mark : 8.5,
        photo : "./images/unknown.jpg"
    },

    $scope.xepLoai = _ => {
        var xl = parseFloat($scope.stu.mark);
        if (xl < 5) $scope.stu.rank = 'Không Đạt';
        else $scope.stu.rank = 'Đạt';
        $scope.Students.push(angular.copy($scope.stu));
    }

    $scope.A = 0;
    $scope.B = 0;
    $scope.operator = "+";
    $scope.result = 0;
    $scope.operators = ["+", "-", "*", "/"];
    $scope.calculate = () => {
        const a = parseFloat($scope.A);
        const b = parseFloat($scope.B);

        switch ($scope.operator) {
            case "+":
                $scope.result = a + b;
                break;
            case "-":
                $scope.result = a - b;
                break;
            case "*":
                $scope.result = a * b;
                break;
            case "/":
                $scope.result = b !== 0 ? a / b : "Undefined";
                break;
            default:
                $scope.result = "Undefined";
        }
    }

    $scope.display = "";
    $scope.appendToDisplay = (value) => {
        $scope.display += value;
    }
    $scope.calculateResult = _ => {
        try {
            $scope.display = eval($scope.display);
        } catch (error) {
            $scope.display = 'Error';
        }
    }
});