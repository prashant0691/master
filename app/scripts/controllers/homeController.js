'use strict';
/**
 * @ngdoc function
 * @name accountApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the accountApp
 */
angular.module('accountApp')
    .controller('HomeCtrl', ['$scope', function ($scope) {
        var vm = this;

        vm.incomeStatementData = [{
            Particular: "Sales1",
            January: "TenK",
            February: "TenK",
            March: 'TenK'
        }, {
            Particular: "Sales2",
            January: "FiveK",
            February: "FiveK",
            March: 'ThreeK'
        }, {
            Particular: "Revenue",
            January: "FifteenK",
            February: "FifteenK",
            March: 'ThirteenK'
        }, {
            Particular: "Cost_Of_Sales",
            January: "TwoK",
            February: "OneK",
            March: 'FiveK'
        }, {
            Particular: "Gross_Profit",
            January: "ThirteenK",
            February: "FourteenK",
            March: 'EightK'
        }, {
            Particular: "Gross_Salaries",
            January: "OneK",
            February: "OneK",
            March: 'ElevenHundred'
        }, {
            Particular: "Rent",
            January: "FiveHundred",
            February: "FiveHundred",
            March: 'FiveHundred'
        }, {
            Particular: "Travelling_Expenses",
            January: "TwoHundred",
            February: "SixHundred",
            March: 'FourHundred'
        }, {
            Particular: "Bank_Charges",
            January: "Twenty",
            February: "Twenty",
            March: 'Twenty'
        }, {
            Particular: "GAE",
            January: "OneSevenTwoZeroK",
            February: "TwoOneTwoZeroK",
            March: 'TwoZeroTwoZeroK'
        }, {
            Particular: "OFD",
            January: "TwoHundred",
            February: "TwoHundred",
            March: 'TwoHundred'
        }, {
            Particular: "Depreciation",
            January: "TwoHundred",
            February: "TwoHundred",
            March: 'TwoHundred'
        }, {
            Particular: "Interest_Income",
            January: "Zero",
            February: "Zero",
            March: 'Zero'
        }, {
            Particular: "EBT",
            January: "ElevenEightyK",
            February: "ElevenSixEightyK",
            March: 'FiveSevenEightK'
        }, {
            Particular: "Income_Taxes",
            January: "Zero",
            February: "Zero",
            March: 'Zero'
        }, {
            Particular: "Net_Income",
            January: "ElevenEightyK",
            February: "ElevenSixEightyK",
            March: 'FiveSevenEightK'
        }, {
            Particular: "Number_Of_Shares",
            January: "FiftyK",
            February: "FiftyK",
            March: 'FiftyK'
        }, {
            Particular: "Earnings_Per_Share",
            January: "FractionTwentyTwo",
            February: "FractionThreeTwo",
            March: 'FractionTwelve'
        }]
    }]);
