(function() {
'use strict';

angular.module('LunchCheck', [])
       .controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.dishListString = '';
    $scope.countDishes = function() {
        $scope.emptyDishMessage = '';
        var numDishes = getNumDishes($scope);
        if (numDishes < 1) {
            $scope.dishListTextBoxStyle = { 'border': '1px solid red' };
            $scope.lunchCheckMessageStyle = { 'color': 'red' };
            $scope.lunchCheckMessage = 'Please enter data first';
        } else {
            $scope.dishListTextBoxStyle = { 'border': '1px solid green' };
            $scope.lunchCheckMessageStyle = { 'color': 'green' };
            if (numDishes > 3) {
                $scope.lunchCheckMessage = 'Too much!';
            } else {
                $scope.lunchCheckMessage = 'Enjoy!';
            }
        }
    }
}

function getNumDishes($scope) {
    var dishList = $scope.dishListString.split(',')
    var count = 0;
    for (var i = 0; i < dishList.length; i++) {
        if (dishList[i].trim().length > 0) {
            count++;
        }
    }
    if (count != dishList.length) {
        $scope.emptyDishMessage = 'Empty dishes do not affect the count.';
    }
    return count;
}

})();