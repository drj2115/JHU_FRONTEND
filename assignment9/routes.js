(() => {
    'use strict';
    angular.module('MenuApp')
           .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];
    function RouteConfig($stateProvider) {
        $stateProvider
            .state('homepage', {
                url: '/',
                templateUrl: 'templates/homepage.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'templates/menuCategories.html',
                controller: 'CategoriesController as category',
                resolve: {
                    items: [
                        'MenuDataService',
                        (MenuDataService) => MenuDataService.getAllCategories()
                    ]
                }
            })
            .state('categoryItems', {
                url: '/items/{shortName}',
                templateUrl: 'templates/categoryItems.html',
                controller: 'ItemsController as itemList',
                resolve: {
                    items: [
                        '$stateParams', 'MenuDataService',
                        ($stateParams, MenuDataService) => MenuDataService.getItemsForCategory($stateParams.shortName)
                    ]
                }
            });
    }
})();