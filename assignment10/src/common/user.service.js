(function () {
    "use strict";

    angular.module('common')
        .service('UserPreferenceService', UserPreferenceService);

    function UserPreferenceService() {
        const service = this;
        service.ready = false;
        service.setUser = (user) => {
            service.user = user;
            service.ready = true;
        }
        service.setFavoriteDish = (menuItem) => {
            service.favoriteDish = menuItem;
        }
        service.getUser = () => {
            return service.user;
        }
    }
})();