(function() {
    'use strict';
    angular.module('MenuApp')
           .component('items', {
               templateUrl: 'itemTemplate.html',
               bindings: { items: '<' }
           });
})();