$(function(){
	$("#trigger").click();
	$('#myModal').on('hidden.bs.modal', function (e) {
	  $("#trigger").click();
	})
});

var app =angular.module("nglab",[]);
app.factory('userLogin',function(){
	return {
		userName:"Preetam",
		password:"12345678"
	}
});

app.controller("loginController",function($scope,userLogin){
	$scope.user=userLogin;
	console.log(userLogin);
});

