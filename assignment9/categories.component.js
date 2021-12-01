(() => {
    'use strict';
    angular.module('MenuApp')
           .component('categories', {
               templateUrl: 'templates/categories.html',
               bindings: { items: '<' }
           })
           .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['items'];
    function CategoriesController(items) {
       this.items = items;
    };

})();