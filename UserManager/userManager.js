//Daniel Nofziger 1/3/2015
var Users = angular.module('Users', []);

Users.controller("MainCtrl", ["$scope", function ($scope) {
    $scope.hello = 'User Manager';
    $scope.counter = 1;
    $scope.showForm = true;
    $scope.newUser = [];
    
    $scope.add = function(){
        if($scope.fname && $scope.email){
            $scope.newUser.push({
                fname:$scope.fname,
                lname:$scope.lname,
                email:$scope.email,
                userNum:$scope.counter
            });
            $scope.counter ++;
        }else{
            alert("Please enter a first name and a valid email address.");
        }
    };
    $scope.edit = function(arg){
        $scope.Ufname = arg.fname;
        $scope.Ulname = arg.lname;
        $scope.Uemail = arg.email;
        $scope.UuserNum = arg.userNum;
        $scope.showForm = false;

    };
    $scope.deleteUser = function(arg){
        var userNumber = arg;
        var check = confirm("Are you sure you want to delete "+
            $scope.fname+" "+$scope.lname+"'s account?");
        if(check===true){
            var oldUser = $scope.newUser;
            $scope.newUser =[];
            angular.forEach(oldUser, function(user){
                if(user.userNum != userNumber){
                    $scope.newUser.push(user);
                }
            });
        }
    };
    
    $scope.updateUser = function(){
        if($scope.Uemail && $scope.Ufname){
            $scope.updatedData = {
                fname:$scope.Ufname,
                lname:$scope.Ulname,
                email:$scope.Uemail,
                userNum:$scope.UuserNum
            };
            var oldUser = $scope.newUser;
            angular.forEach(oldUser, function(user){
                if(user.userNum === $scope.updatedData.userNum){
                    $scope.newUser[$scope.updatedData.userNum-1] = $scope.updatedData;
                }
            });
            $scope.showForm = true;
        }else{
            alert("Please enter a first name and a valid email address.");
        }
    };
}]);
