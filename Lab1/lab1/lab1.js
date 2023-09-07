angular.module( "myApp", [] )
    .controller( "myCtrl", ( $scope ) => {
        // Bài tập 2
        $scope.Tinh = () => {
            $scope.kq = $scope.A * $scope.B;
        },
        // Bài tập 3
        $scope.show = false;
        $scope.hienThi = () => {
            $scope.show = !$scope.show;
        },
        //Bài tập 5
        $scope.Disable = (disable) => {
            $scope.disable = !disable;
        },
        // Bài tập 7
        $scope.tinhToan = () => {
            console.log($scope.chon);
            switch( $scope.chon ) {
                case '+' :
                    $scope.kq = Number( $scope.a ) + Number( $scope.b );
                    break;
                case '-' :
                    $scope.kq = Number( $scope.a ) - Number( $scope.b );
                    break;
                case '*' :
                    $scope.kq = Number( $scope.a ) * Number( $scope.b );
                    break;
                case '/' :
                    $scope.kq = Number( $scope.a ) / Number( $scope.b );
                    break;
                case '%' :
                    $scope.kq = Number( $scope.a ) % Number( $scope.b );
                    break;
            }
        },
        // Bài tập 8
        $scope.findMax = () => {
            if($scope.a > $scope.b)
                $scope.max = $scope.a;
            else 
                $scope.max = $scope.b;
        },
        // Bài tập 9
        $scope.cvdthcn = () => {
            $scope.chuvi = ( Number( $scope.a ) + Number( $scope.b )) * 2;
            $scope.dientich = Number( $scope.a ) * Number( $scope.b );
        },
        // Bài tập 10
        PI = 3.14;
        $scope.cvdtht = () => {
            $scope.chuvi = 2 * $scope.r * PI;
            $scope.dientich = Math.pow( $scope.r, 2) * PI;
        }
    } );