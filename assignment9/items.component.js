(() => {
    'use strict';
    angular.module('MenuApp')
           .component('items', {
               templateUrl: 'templates/items.html',
               bindings: { items: '<' }
           })
           .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];
    function ItemsController(items) {
        this.items = items;
    }
})();