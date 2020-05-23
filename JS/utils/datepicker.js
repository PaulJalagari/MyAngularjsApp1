var app = angular.module('datePickerApp', []);

app.controller('myCalendarCtrl',['$scope', function($scope){
	
    
    $scope.model1 = {
      startDate: null,
      endDate: null
    }
    
    $scope.model2 = {
      startDate: null,
      endDate: null
    }
    
    
    $scope.model3 = {
      startDate: null,
      endDate: null
    }
    
    
    $scope.model4 = {
      startDate: '2018-01-07T17:30:49-0300',
      endDate: '01-17-2018'
    }
    
    
    $scope.model5 = {
      startDate: null,
      endDate: null,
      disabled: false
    }
}]);