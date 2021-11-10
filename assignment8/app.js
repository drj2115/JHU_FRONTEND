(function() {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('menu_items_url', 'https://davids-restaurant.herokuapp.com/menu_items.json');

    NarrowItDownController.$inject = ['MenuSearchService'];
    MenuSearchService.$inject = ['menu_items_url', '$http'];

    function NarrowItDownController(MenuSearchService) {
        this.search = () => {
            MenuSearchService.getMatchedMenuItems()
                .then(response => console.log(response))
                .catch(error => console.log(error));
        };
    }

    function MenuSearchService(menu_items_url, $http) {
        this.getMatchedMenuItems = () => {
            return $http({ method: "GET", url: menu_items_url })
                .then(result => {
                    console.log(result.data.menu_items);
                    return result.data.menu_items;
                })
                .catch(error => console.log(error));
        };
    }
})();