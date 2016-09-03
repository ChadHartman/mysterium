"use strict"



angular.module('app', []).controller('MainController', ['$scope', function($scope) {

    var getRandomInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var randomlySelect = function(collection) {
        // Clone array
        var available = collection.available.slice(0);
        collection.selected = [];
        for(var i = 0; i < $scope.numCards; i++) {
            var randomIndex = getRandomInt(0, available.length - 1);
            collection.selected.push(available.splice(randomIndex, 1)[0]);
        }
    };

    $scope.numCards = 6;
    $scope.characters = {
        available: [
                "1", "2", "3", "4", "5", "6", 
                "7", "8", "9", "10", "11", "12", 
                "13", "14", "15", "16", "17", "18", 
                "P1", "HS1", "HS2", "HS3", "HS4", "HS5", "HS6"
            ],
        selected: []
    };
    $scope.locations = {
        available: [
                "19", "20", "21", "22", "23", "24", 
                "25", "26", "27", "28", "29", "30",
                "31", "32", "33", "34", "35", "36", 
                "P2", "HS7", "HS8", "HS9", "HS10", "HS11", "HS12"
            ],
        selected: []
    };
    $scope.objects = {
        available: [
                "37", "38", "39", "40", "41", "42", 
                "43", "44", "45", "46", "47", "48",
                "49", "50", "51", "52", "53", "54",
                "P3", "HS13", "HS14", "HS15", "HS16", "HS17", "HS18"
            ],
        selected: []
    };

    $scope.onNumCardsChanged = function() {
        randomlySelect($scope.characters);
        randomlySelect($scope.locations);
        randomlySelect($scope.objects);
    };

    $scope.onNumCardsChanged();
}]);