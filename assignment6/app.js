(function() {
'use strict';

angular.module('lunchCheckerApp', [])
       .controller('lunchCheckerController', lunchCheckerController);

function lunchCheckerController($scope) {
    $scope.dishList = '';
    $scope.countDishes = function() {
        var numDishes = $scope.dishList.split(',').length;
        $scope.lunchCheckerMessage = numDishes > 3 ? 'Too much!' : ($scope.dishList.trim().length < 1 ? '' : 'Enjoy!');
    }
}

})();