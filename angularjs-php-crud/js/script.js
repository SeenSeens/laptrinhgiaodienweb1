const app = angular.module('crudApp', ['datatables']);
app.controller('crudController', function($scope, $http, DTOptionsBuilder){

    $scope.success = false;

    $scope.error = false;

    $scope.fetchData = () => {
        $http.get('common/fetch_data.php').then(res => {
            $scope.namesData = res.data;
            console.log($scope.namesData);
        })
        .catch(err => {
            console.log('Lỗi: ', err);
        });

    }
    $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('order', [[0, 'asc']]);

    $scope.openModal = function(){
        var modal_popup = angular.element('#crudmodal');
        modal_popup.modal('show');
    };

    $scope.closeModal = function(){
        var modal_popup = angular.element('#crudmodal');
        modal_popup.modal('hide');
    };

    $scope.addData = function(){
        $scope.modalTitle = 'Add Data';
        $scope.submit_button = 'Insert';
        $scope.openModal();
    };

    $scope.submitForm = function () {
        $http({
            method: "POST",
            url: "common/insert.php",
            data: {
                'first_name': $scope.first_name,
                'last_name': $scope.last_name,
                'action': $scope.submit_button,
                'id': $scope.hidden_id
            }
        }).then( res => {
            if (res.error) {
                $scope.success = false;
                $scope.error = true;
                $scope.errorMessage = res.error;
            } else {
                $scope.success = true;
                $scope.error = false;
                $scope.successMessage = res.message;
                $scope.form_data = {};
                $scope.closeModal();
                $scope.fetchData();
            }
        })
        .catch(err => {
            console.log('Lỗi: ', err);
        });
    };

    $scope.fetchSingleData = function(id){
        $http({
            method:"POST",
            url:"common/edit.php",
            data:{'id':id, 'action':'fetch_single_data'}
        }).then(res => {
            $scope.first_name = res.first_name;
            $scope.last_name = res.last_name;
            $scope.hidden_id = id;
            $scope.modalTitle = 'Edit Data';
            $scope.submit_button = 'Edit';
            $scope.openModal();
        })
        .catch(err => {
            console.log('Lỗi: ', err);
        });
    };

    $scope.deleteData = function(id){
        if(confirm("Are you sure you want to remove it?")) {
            $http({
                method:"POST",
                url:"common/delete.php",
                data:{'id':id, 'action':'Delete'}
            }).then(res => {
                $scope.success = true;
                $scope.error = false;
                $scope.successMessage = res.message;
                $scope.fetchData();
            }).catch(err => {
                console.log('Lỗi: ', err);
            });
        }
    };

});