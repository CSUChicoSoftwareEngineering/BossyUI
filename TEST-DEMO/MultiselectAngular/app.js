var app = angular.module('myApp', []);

app.controller('AppCtrl', function($scope) {
    $scope.choices = [{id:1, name: 'Option A'},
                      {id:2, name: 'Option B'},
                      {id:3, name: 'Option C'}
                     ];
    $scope.selectedChoice = [];

})


