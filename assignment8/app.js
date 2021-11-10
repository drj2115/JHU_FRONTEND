(function() {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('menu_items_url', 'https://davids-restaurant.herokuapp.com/menu_items.json')
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    MenuSearchService.$inject = ['menu_items_url', '$http'];

    function NarrowItDownController(MenuSearchService) {
        this.found = [];
        this.search = (searchTerm) => {
            MenuSearchService.getMatchedMenuItems(searchTerm)
                .then(response => {this.found = response; console.log(response);})
                .catch(error => console.log(error));
        };
        this.remove = (index) => {
            this.found.splice(index, 1);
        }
    }

    function MenuSearchService(menu_items_url, $http) {
        this.getMatchedMenuItems = (searchTerm) => {
            return $http({ method: "GET", url: menu_items_url })
                .then(result => {
                    let foundItems = [];
                    for (let item of result.data.menu_items) {
                        if (item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                            foundItems.push(item);
                        }
                    }
                    return foundItems;
                })
                .catch(error => console.log(error));
        };
    }

    function FoundItemsDirective() {
        return {
            templateUrl: 'itemTemplate.html',
            scope: { items: '<', onRemove: '&' },
            controller: NarrowItDownController,
            controllerAs: 'menu_items',
            bindToController: true
        };
    }
})();