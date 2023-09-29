var app = angular.module('myapp', []);
app.controller('mycontroller', function ($scope) {
    $scope.dataList = []; // Khai báo mảng user
    $scope.selectedStudent = {};
    /**
     * breadcrumb
     */
    $scope.menus = ['Home', 'User Management', 'Add user']
    /**
     * Column trong bảng User Management
     */
    $scope.columns = [
        'No',
        'Fullname',
        'Address',
        'Age',
        'Email',
        'Phone Number'
    ];
    $scope.price = 1000;
    $scope.today = new Date();
    /**
     * Add User
     */
    $scope.addUser = function () {
        var student = {
            "no" : this.dataList.length + 1,
            "fullname" : this.fullname,
            "address" : this.address,
            "age" : this.age,
            "email" : this.email,
            "phone_number" : this.phone_number
        };
        this.dataList[this.dataList.length] = student;
        this.clear();
    }
    /**
     * Edit User
     * Kiểm tra selectedStudent có dữ liệu hay không sau đó cập nhật thông tin của sinh viên được chọn trong mảng dataList
     */
    $scope.editUser = function () {
        if(this.selectedStudent && this.selectedStudent.no) {
            // Tìm vị trí của sinh viên trong mảng và cập nhật thông tin
            var index = this.dataList.findIndex(function(student) {
                return student.no === $scope.selectedStudent.no;
            });
            if (index !== -1) {
                this.dataList[index].fullname = this.fullname;
                this.dataList[index].address = this.address;
                this.dataList[index].age = this.age;
                this.dataList[index].email = this.email;
                this.dataList[index].phone_number = this.phone_number;
            }
            // Sau khi chỉnh sửa xong, đặt lại selectedStudent và xóa trường nhập liệu
            $scope.selectedStudent = {};
            $scope.clear();
        }
    }
    /**
     * Delete User
     * kiểm tra xem selectedStudent có dữ liệu hay không và sau đó xóa sinh viên được chọn khỏi mảng dataList
     */
    $scope.deleteUser = function () {
        if (this.selectedStudent && this.selectedStudent.no) {
            // Tìm vị trí của sinh viên trong mảng và xóa
            var index = this.dataList.findIndex(function(student) {
                return student.no === $scope.selectedStudent.no;
            });

            if (index !== -1) {
                this.dataList.splice(index, 1);
            }

            // Sau khi xóa xong, đặt lại selectedStudent và xóa trường nhập liệu
            this.selectedStudent = {};
            this.clear();
        }
    }
    /**
     * Hàm này được chạy khi nhấp vào 1 dòng
     */
    $scope.fillForm = function (student) {
        $scope.fullname = student.fullname;
        $scope.address = student.address;
        $scope.age = student.age;
        $scope.email = student.email;
        $scope.phone_number = student.phone_number;
        // Cập nhật selectedStudent
        $scope.selectedStudent = student;
    }
    /**
     * Clear input
     */
    $scope.clear = function () {
        this.fullname = '';
        this.address = '';
        this.age = '';
        this.email = '';
        this.phone_number = '';
    }
});