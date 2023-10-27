<!doctype html>
<html lang="vi">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>AngularJS PHP CRUD (Create, Read, Update, Delete) using Bootstrap Modal</title>
		<link rel="stylesheet" href="./css/bootstrap.min.css">
		<link rel="stylesheet" href="./css/datatables.bootstrap.css">
	</head>
	<body ng-app="crudApp" ng-controller="crudController">
		<div class="container" ng-init="fetchData()">
			<br />
				<h3 align="center">AngularJS PHP CRUD (Create, Read, Update, Delete) using Bootstrap Modal</h3>
			<br />
			<div class="alert alert-success alert-dismissible" ng-show="success" >
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
				{{successMessage}}
			</div>
			<div align="right">
				<button type="button" name="add_button" ng-click="addData()" class="btn btn-success">Add</button>
			</div>
			<br />
			<div class="table-responsive" style="overflow-x: unset;">
				<table datatable="ng" dt-options="vm.dtOptions" class="table table-bordered table-striped">
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						<tr ng-repeat="name in namesData track by $index">
							<td>{{name.first_name}}</td>
							<td>{{name.last_name}}</td>
							<td><button type="button" ng-click="fetchSingleData(name.id)" class="btn btn-warning btn-xs">Edit</button></td>
							<td><button type="button" ng-click="deleteData(name.id)" class="btn btn-danger btn-xs">Delete</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<script src="./js/jquery.min.js"></script>
<!--		<script src="./js/angular.min.js"></script>-->
        <script src="../angularjs_1.8.2.min.js"></script>
		<script src="./js/jquery.dataTables.min.js"></script>
		<script src="./js/angular-datatables.min.js"></script>
		<script src="./js/bootstrap.min.js"></script>
		<script src="./js/script.js"></script>
	</body>
</html>

<div class="modal fade" tabindex="-1" role="dialog" id="crudmodal">
	<div class="modal-dialog" role="document">
    	<div class="modal-content">
    		<form method="post" ng-submit="submitForm()">
	      		<div class="modal-header">
	        		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        		<h4 class="modal-title">{{modalTitle}}</h4>
	      		</div>
	      		<div class="modal-body">
	      			<div class="alert alert-danger alert-dismissible" ng-show="error" >
						<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
						{{errorMessage}}
					</div>
					<div class="form-group">
						<label>Enter First Name</label>
						<input type="text" name="first_name" ng-model="first_name" class="form-control" />
					</div>
					<div class="form-group">
						<label>Enter Last Name</label>
						<input type="text" name="last_name" ng-model="last_name" class="form-control" />
					</div>
	      		</div>
	      		<div class="modal-footer">
	      			<input type="hidden" name="hidden_id" value="{{hidden_id}}" />
	      			<input type="submit" name="submit" id="submit" class="btn btn-info" value="{{submit_button}}" />
	        		<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        	</div>
	        </form>
    	</div>
  	</div>
</div>