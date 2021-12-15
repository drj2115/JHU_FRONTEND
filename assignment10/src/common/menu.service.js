(function () {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$http', 'appBasePath'];

    function MenuService($http, appBasePath) {
        const service = this;

        service.getCategories = () => {
            return $http.get(appBasePath + '/categories.json')
                .then(response => response.data);
        };

        service.getMenuItems = (category) => {
            const config = {};
            if (category) {
                config.params = {'category': category};
            }

            return $http.get(appBasePath + '/menu_items.json', config)
                .then(response => response.data);
        };

        service.getMenuItem = (short_name) => {
            return $http.get(appBasePath + '/menu_items/' + short_name + '.json')
                .then(response => response.data);
        }
    }
})();