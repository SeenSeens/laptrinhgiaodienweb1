var app = angular.module('myApp', []);

/**
 * Factory chua object sinh vien
 */
app.factory('factory', () => {
    var factory = {};
    factory.ListStudent = [
        {
            name : "Nguyen Van An",
            birthday : "02/06/2000",
            mark : 8.5
        },
        {
            name : "Nguyen Van Thanh",
            birthday: "02/06/2000",
            mark: 9.5
        }
    ];
    return factory;
});

app.controller('formCtrl', [ '$scope', 'factory', ($scope, factory) => {
    $scope.$parent.student = {};

    $scope.save = function () {
        factory.ListStudent.push(angular.copy($scope.student));
    }

    $scope.cancel = function () {
        $scope.student = {};
    }

}]);

app.controller('viewCtrl', [ '$scope', 'factory', ($scope, factory) => {
    $scope.ListStudent = factory.ListStudent;
}]);
