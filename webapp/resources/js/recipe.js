'use strict';

var RecipeApp = {};

var App = angular.module('RecipeApp', ['ui.grid','ngRoute']);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', function($routeProvider){
    $routeProvider
    	.when('/',{
    	template: '<h1>Main</h1><p><b>Welcome</b></p>',
    	})
    	.when('/indian',{
    		templateUrl: 'indian/layout',
    		controller: IndianController
    	})
    	.when('/indian/dosa',{
    		templateUrl: 'dosa.htm'
    	})
    	.when('/idli',{
    		templateUrl: 'idli.htm'
    	})
    	.when('/mexican',{
    		templateUrl: 'mexican/layout',
    		controller: MexicanController
    	})
    	.when('/italian',{
    		templateUrl: 'italian/layout',
    		controller: ItalianController
    	})
    	.when('/tex-mex',{
    		templateUrl: 'mexican/tex-mex'
    	})
    	.otherwise({redirectTo: '/'});
}]);
