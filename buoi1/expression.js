angular.module( "myApp", [] )
    .controller( "myCtrl", ( $scope ) => { 
        $scope.count = 0;
        $scope.myFunction = () => {
            $scope.count++;
        };
        $scope.showMe = false;
        $scope.myFunc = () => {
            $scope.showMe = !$scope.showMe;
        };
        $scope.sayHello = () => {
            $scope.greeting = 'Xin chào ' + $scope.username + '!';
        };
    });
