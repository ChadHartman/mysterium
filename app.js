"use strict"

angular.module('app', []).controller('MainController', ['$scope', function ($scope) {

    var intSorter = function(a, b) {
        return a - b;
    };

    var getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var randomlySelect = function (collection) {

        collection.selected = [];

        var selectedIndexes = new Set();
        
        while(selectedIndexes.size < $scope.numCards) {
            selectedIndexes.add(getRandomInt(0, collection.available.length));
        } 

        selectedIndexes = Array.from(selectedIndexes);
        // Simpler to sort the indices than the selected cards
        selectedIndexes = selectedIndexes.sort(intSorter);

        for (var i = 0; i < selectedIndexes.length; i++) {
            var index = selectedIndexes[i];
            collection.selected.push(collection.available[index]);
        }
    };

    $scope.numCards = 6;
    $scope.hasPromo = true;
    $scope.hasHiddenSigns = true;

    // TODO: move to Model
    $scope.categories = [{
        name: "characters",
        available: [],
        core: [
            "1", "2", "3", "4", "5", "6",
            "7", "8", "9", "10", "11", "12",
            "13", "14", "15", "16", "17", "18"
        ],
        promo: ["P1"],
        hiddenSigns: ["HS1", "HS2", "HS3", "HS4", "HS5", "HS6"],
        selected: []
    }, {
            name: "locations",
            available: [],
            core: [
                "19", "20", "21", "22", "23", "24",
                "25", "26", "27", "28", "29", "30",
                "31", "32", "33", "34", "35", "36"
            ],
            promo: ["P2"],
            hiddenSigns: ["HS7", "HS8", "HS9", "HS10", "HS11", "HS12"],
            selected: []
        }, {
            name: "objects",
            available: [],
            core: [
                "37", "38", "39", "40", "41", "42",
                "43", "44", "45", "46", "47", "48",
                "49", "50", "51", "52", "53", "54"
            ],
            promo: ["P3"],
            hiddenSigns: ["HS13", "HS14", "HS15", "HS16", "HS17", "HS18"],
            selected: []
        }
    ];

    $scope.addCard = function (increment) {
        $scope.numCards += increment;

        for (var i = 0; i < $scope.categories.length; i++) {
            var category = $scope.categories[i];

            category.available = category.core.slice(0);

            if($scope.hasPromo) {
                category.available = category.available.concat(category.promo);
            }

            if($scope.hasHiddenSigns) {
                category.available = category.available.concat(category.hiddenSigns);
            }

            randomlySelect(category);
        }
    };

    $scope.addCard(0);
}]);