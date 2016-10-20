(function(){

	var app = angular.module('casamento', ['ngRoute']);

	app.config(function($routeProvider, $locationProvider) {

		$routeProvider  
		
		.when('/pages/index.html', {
            templateUrl : '/pages/home.html',
            controller  : 'homeCTRL'
        })

        .when('/home', {
            templateUrl : '/pages/home.html',
            controller  : 'homeCTRL'
        })

        .when('/historia', {
            templateUrl : '/pages/historia.html',
            controller  : 'historyCTRL'
        })

        .when('/familia', {
            templateUrl : '/pages/familia.html',
            controller  : 'familyCTRL'
        })

        .when('/padrinhos', {
            templateUrl : '/pages/padrinhos.html',
            controller  : 'padrinhosCTRL'
        })

        .when('/fornecedores', {
            templateUrl : '/pages/fornecedores.html',
            controller  : 'fornecedoresCTRL'
        })

        .when('/odia', {
            templateUrl : '/pages/odia.html',
            controller  : 'odiaCTRL'
        })

        .when('/varal', {
            templateUrl : '/pages/varal.html',
            controller  : 'varalCTRL'
        })

        .when('/contribua', {
            templateUrl : '/pages/contribua.html',
            controller  : 'contribuaCTRL'
        })

        .when('/contato', {
        	templateUrl : '/pages/contato.html',
        	controller : 'contatoCTRL'	
        })

     	.when('/login', {
        	templateUrl : '/pages/login.html',
        	controller : 'loginCTRL'	
        })

        .when('/logout', {
        	templateUrl : '/pages/logout.html',
        	controller : 'logoutCTRL'	
        })

     	.when('/minhaconta', {
        	templateUrl : '/pages/minhaconta.html',
        	controller : 'minhacontaCTRL'	
        })

        .otherwise ({ redirectTo: '/pages/error.html' });   
        // .otherwise ({ redirectTo: '/' }); 

        $locationProvider.html5Mode(true);

	});	

}());