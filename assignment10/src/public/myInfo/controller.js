(() => {

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['UserPreferenceService', 'appBasePath']

    function MyInfoController(UserPreferenceService, appBasePath) {
        this.isReady = () => { return UserPreferenceService.ready; }
        this.getPath = () => { return appBasePath; }
        if (this.isReady()) {
            this.favoriteDish = UserPreferenceService.favoriteDish;
            this.user = UserPreferenceService.getUser();
        }
    }
})();