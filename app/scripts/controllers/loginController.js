'use strict';

angular
    .module('accountApp')
    .controller('LoginCtrl', ['$state', function ($state) {
        var vm = this;

        vm.login = function () {
            console.log("login called")
            $state.go('dashboard.home');
        }
    }]);