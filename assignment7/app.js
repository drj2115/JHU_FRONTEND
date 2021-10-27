(function() {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var shoppingList = this;
        shoppingList.items = ShoppingListCheckOffService.items;
        shoppingList.addToCart = function(idx) {
            ShoppingListCheckOffService.addToCart(idx);
        }
    }

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var cart = this;
        cart.items = ShoppingListCheckOffService.cart;
    }

    function ShoppingListCheckOffService() {
        this.items = [
            {
                name: "spam",
                quantity: 4
            },
            {
                name: "ramen",
                quantity: 10
            },
            {
                name: "halibut",
                quantity: 300
            },
            {
                name: "Bush's Baked Beans",
                quantity: 10
            },
            {
                name: "eggs",
                quantity: 12
            },
            {
                name: "milk",
                quantity: 1
            },
            {
                name: "biscuit",
                quantity: 5
            },
            {
                name: "gefilte fish",
                quantity: 1
            },
            {
                name: "deer jerky",
                quantity: 15
            },
            {
                name: "pickled opossum",
                quantity: 3
            }
        ];
        this.cart = [];
        this.addToCart = function(idx) {
            this.cart.push(this.items.splice(idx, 1)[0]);
        }
    }
})();