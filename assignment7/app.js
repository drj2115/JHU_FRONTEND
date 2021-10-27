(function() {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .filter('customCurrency', customCurrencyFilter);
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var shoppingList = this;
        shoppingList.items = ShoppingListCheckOffService.items;
        shoppingList.addToCart = function(idx) {
            if (Number.isInteger(idx)) {
                ShoppingListCheckOffService.addToCart(idx);
            }
        }
        shoppingList.isEmpty = function() {
            return shoppingList.items.length < 1
        }
    }

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var cart = this;
        cart.items = ShoppingListCheckOffService.cart;
        cart.isEmpty = function() {
            return cart.items.length < 1;
        }
    }

    function ShoppingListCheckOffService() {
        this.items = [
            {
                name: "spam",
                quantity: 4,
                total: 4,
                pricePerItem: 3.59
            },
            {
                name: "ramen",
                quantity: 10,
                total: 10,
                pricePerItem: 0.50
            },
            {
                name: "halibut",
                quantity: 300,
                total: 300,
                pricePerItem: 20.00
            },
            {
                name: "Bush's Baked Beans",
                quantity: 10,
                total: 10,
                pricePerItem: 1.50
            },
            {
                name: "eggs",
                quantity: 12,
                total: 12,
                pricePerItem: 0.15
            },
            {
                name: "milk",
                quantity: 1,
                total: 1,
                pricePerItem: 2.89
            },
            {
                name: "biscuit",
                quantity: 5,
                total: 5,
                pricePerItem: 1.50
            },
            {
                name: "gefilte fish",
                quantity: 1,
                total: 1,
                pricePerItem: 8.70
            },
            {
                name: "deer jerky",
                quantity: 15,
                total: 15,
                pricePerItem: 15.00
            },
            {
                name: "pickled opossum",
                quantity: 3,
                total: 3,
                pricePerItem: 4.20
            }
        ];
        this.cart = [];
        this.addToCart = function(idx) {
            var item = this.items[idx];
            var quantity = item.quantity;
            if (Number.isInteger(quantity) && quantity > 0 && quantity <= item.total) {
                this.cart.push(this.items.splice(idx, 1)[0]);
            }
        }
    }

    function customCurrencyFilter() {
        return function (val) {
            return '$$$' + val.toFixed(2);
        }
    }
})();