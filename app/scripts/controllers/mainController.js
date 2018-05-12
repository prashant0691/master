'use strict';
/**
 * @ngdoc function
 * @name accountApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the accountApp
 */
angular.module('accountApp')
  .controller('MainCtrl', ['$scope', '$rootScope', '$translate', function ($scope, $rootScope, $translate) {
    var vm = this;
    vm.names = [{ 'name': 'english' }, { 'name': 'arabic' }];
    vm.names.forEach(lang => {
      if (lang.name === localStorage.translationLanguage) {
        vm.translationLanguage = lang;
      } else {
        vm.translationLanguage = vm.names[0];
      }
    });


    vm.changeLanguage = function () {
      $rootScope.translationLanguage = vm.translationLanguage.name;
      localStorage.translationLanguage = $rootScope.translationLanguage;
      $translate.use(vm.translationLanguage.name);
    }
  }]);
