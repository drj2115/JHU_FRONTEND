(function() {
    'use strict';
    angular.module('data', [])
           .service('MenuDataService', MenuDataService)
           .constant('restaurantUrl', 'https://davids-restaurant.herokuapp.com/')
           .constant('categoriesUrl', restaurantUrl + 'categories.json')
           .constant('itemsInCategoryUrl', restaurantUrl + 'menu_items.json');

    function MenuDataService() {
        this.getAllCategories = () => {
            return $http({ method: "GET", url: categoriesUrl })
                .then(response => {
                    console.log('categories => ', response);
                });
        };
        this.getItemsForCategory = (categoryShortName) => {
            return $http({ method: "GET", url: itemsInCategoryUrl + '?category=' + categoryShortName })
                .then(response => {
                    console.log('items in ' + categoryShortName + ' => ', response);
                });
        };

    }
})();