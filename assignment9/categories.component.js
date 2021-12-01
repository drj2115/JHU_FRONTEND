(function() {
    'use strict';
    angular.module('MenuApp')
           .component('categories', {
               templateUrl: 'categoryTemplate.html',
               bindings: { items: '<' }
           });
})();