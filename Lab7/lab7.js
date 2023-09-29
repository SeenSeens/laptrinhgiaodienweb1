var app = angular.module('myApp', []);

app.factory('factory', () => {
    var factory = {};
    factory.ListStudent = [
        {
            name : "Nguyễn Văn An",
            birthday : "02/06/2000",
            mark : 8.5
        },
        {
            name : "Nguyễn Văn Thành",
            birthday: "02/06/2000",
            mark: 9.5
        }
    ];
    return factory;
});

app.controller('formCtrl', [ '$scope', '$rootScope', 'factory', ($scope, $rootScope, factory) => {
    //$scope.$parent.student = {};
    $rootScope.student = {}; // Bài 2

    // Insert sinh viên
    $scope.save = function () {
        factory.ListStudent.push(angular.copy($scope.student));
        $scope.clear();
    }
    // Edit sinh viên
    $scope.edit = function (index) {
        $scope.index = index;
        $scope.student = angular.copy(factory.ListStudent[index]);
    }
    // Update
    $scope.update = function () {
        factory.ListStudent[$scope.index] = angular.copy($scope.student);
        $scope.clear();
    }
    // Delete
    $scope.delete = function () {
        factory.ListStudent.splice($scope.index,1);
        $scope.clear();
    }
    $scope.cancel = function () {
        $scope.student = {};
    }
    // Clear form fields
    $scope.clear = function () {
        $scope.student = {};
        $scope.index = null;
    };
    // Initialize index variable
    $scope.index = null;
}]);

app.controller('viewCtrl', [ '$scope', '$rootScope', 'factory', ($scope, $rootScope, factory) => {
    $scope.ListStudent = factory.ListStudent;
}]);
