angular.module( "myApp", [] ).controller( "myCtrl", ($scope) => {
	// $scope.A = 0;
	// $scope.B = 0;
	// $scope.C = 0;
	$scope.findMax = () => {
		let a = $scope.A, b = $scope.B, c = $scope.C;
		var max = a;
		if(b > max)
			max = b;
		if(c > max)
			max = c;
		$scope.max = 'MAX ' + max;
	},

	// Bài 2
	$scope.sort = () => {
		let a = $scope.A, b = $scope.B, c = $scope.C, temp;

		if(a > b) { 
			temp = a;
			a = b;
			b = temp;
		}
		if(a > c) {
			temp = a;
			a = c;
			c = temp;
		}
		if(b > c) {
			temp = b;
			b = c;
			c = temp;
		}
		$scope.sorts = a + ' ' + b + ' ' + c;
	},

	// Bài 3
	$scope.giaiPTB1 = () => {
		let a = $scope.A, b = $scope.B, c = $scope.C;
		if(a === 0) {
			if(b === 0)
				$scope.result = "Phương trình vô số nghiệm";
			else
				$scope.result = "Phương trình vô nghiệm";
		} else {
			$scope.result = b / a;
		}
	},

	// Bài 4
	$scope.giaiPTB2 = () => {
		let a = $scope.A, b = $scope.B, c = $scope.C;
		if(a !== 0) {
			let delta = Math.pow(b, 2) - 4 * a * c;
			if(delta === 0) {
				$scope.result  = "Phương trình có nghiệm kép " + ( -b / ( 2 * a) );
			} else {
				if(delta < 0) {
					$scope.result  = "Phương trình vô nghiệm";
				} else {
					var x1 = ( -b + Math.sqrt(delta) ) / ( 2 * a );
					var x2 = ( -b - Math.sqrt(delta) ) / ( 2 * a );
					$scope.result = "Phuong trinh có 2 nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2;
				}
			}
		} else {
			// Phuong trinh bac 1
			if(b === 0) {
				if(cC === 0)
					$scope.result = "Phương trình vô số nghiệm";
				else
					$scope.result = "Phương trình vô nghiệm";
			}
			else {
				$scope.result = -c / b;
			}
		}
	},

	// Bài 5
	$scope.equationType = "linear";
	$scope.isVisible = true;
	$scope.toggle = () => {
        $scope.isVisible = $scope.equationType === "quadratic";
    },

    // Bài 6
    $scope.cuoctaxi = () => {
    	let a = $scope.A, b = $scope.B, c = $scope.C, km = $scope.km;

    	if( km === 1 ) {
    		$scope.result = "Số tiền bạn phải trả cho " + km + " km là " + km * 13000;
    	}else {
    		if( km >=2 && km < 30 ) {
    			$scope.result = "Số tiền bạn phải trả cho " + km + " km là " + km * 12000;
    		} else {
    			$scope.result = "Số tiền bạn phải trả cho " + km + " km là " + km * 11000;
    		}
    	}
    },

    // Bài 7
    $scope.kttamgiac = () => {
    	let a = $scope.A, b = $scope.B, c = $scope.C;
    	// Tam giác đều
    	let tamgiacdeu = () => {
    		if( ( a === b ) && ( b === c ) ) return true;
    	}
    	// Tam giác cân
    	let tamgiaccan = () => {
    		if( ( a === b ) || ( a === c ) || ( b === c )) return true;
    	}
    	// Tam giác vuông
    	let tamgiacvuong = () => {
    		if ( ( Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2) ) || ( Math.pow(b, 2) === Math.pow(a, 2) + Math.pow(c, 2) ) || ( Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2) ) ) return true;
    	}
    	// Kiểm tra điều kiện lập thành tam giác
    	if( ( a + b > c ) && ( a + c > b ) && ( b + c > a ) || ( a > 0 ) && ( b > 0 ) && ( c > 0 ) ) {
			// Tam giác đều
			if( tamgiacdeu() )
				$scope.result = "Tam giác đều";
			// Tam giác cân
			else if( tamgiaccan() )
				$scope.result = "Tam giác cân";
			// Tam giác vuông
			else if ( tamgiacvuong() )
				$scope.result = "Tam giác vuông";
			// Tam giác vuông cân
			else if ( tamgiaccan() && tamgiacdeu() )
                $scope.result = "Tam giác vuông cân";
            // Tam giác thường
            else
            	$scope.result = "Tam giác thường";

		} else {
			$scope.result = "Đây không phải là tam giác"
		}
    },

    // Bài 8
   	$scope.lietkesonguyento = () => {
        let n = $scope.N;

        // Kiểm tra số nguyên tố
        let ktSNT = (x) => {
            if (x < 2) return false;
            for (let i = 2; i <= Math.sqrt(x); i++) {
                if (x % i === 0) return false;
            }
            return true;
        }

        // Liệt kê các số nguyên tố
        let lkSNT = (n) => {
            const dsSNT = [];
            for (let i = 2; dsSNT.length < n; i++) {
                if (ktSNT(i)) dsSNT.push(i);
            }
            $scope.result = "Danh sách các số nguyên tố " + dsSNT.join(', ');
        }
        
        lkSNT(n);
    },

    // Bài 9
    $scope.findUCLNBCNN = () => {
    	let a = $scope.A, b = $scope.B;
    	// Ước chung lớn nhất
    	let UCLN = (a, b) => {
    		while ( a != b ) {
		        if ( a > b )
		            a = a - b;
		        else
		            b = b - a;
		    }
		    return a;
    	}
    	// Bội chung nhỏ nhất
    	let BCNN = () => {
    		return a * b / UCLN(a, b);
    	}
    	$scope.result = "Ước chung lớn nhất " + UCLN(a, b) + "\n" + "Bội chung nhỏ nhất " + BCNN(a, b);

    },

    // Bài 10
    $scope.demUocSo = () => {
    	let n = $scope.N, dem = 0;
    	let Dem_UocSo = (n) => {
    		for(let i = 1; i <= n; i++) {
    			if( n % i === 0) dem++;
    		}
    		return dem;
    	}
    	$scope.result = Dem_UocSo(n);
    }
} );