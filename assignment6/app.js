(function() {
'use strict';

angular.module('LunchCheck', [])
       .controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.dishList = '';
    $scope.countDishes = function() {
        var numDishes = $scope.dishList.split(',').length;
        $scope.lunchCheckMessage = numDishes > 3 ? 'Too much!' : ($scope.dishList.length < 1 ? 'Please enter data first' : 'Enjoy!');
    }
}

})();