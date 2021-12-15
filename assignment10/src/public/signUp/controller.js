(() => {

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject =['UserPreferenceService', 'MenuService']
    function SignUpController(UserPreferenceService, MenuService) {
        const signUp = this;
        signUp.valid = false;
        signUp.error = false;

        signUp.validateMenu = () => {
            MenuService.getMenuItem(signUp.user.menuShortCode)
                .then((response) => {
                    UserPreferenceService.setFavoriteDish(response);
                    signUp.error = false;})
                .catch(error => {
                    UserPreferenceService.setFavoriteDish('');
                    signUp.error = true;
                });
        }

        signUp.submit = () => {
            signUp.valid = true;
            UserPreferenceService.setUser(signUp.user);
        };
    }
})();