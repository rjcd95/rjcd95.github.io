var portfolioPersonal = angular.module('portfolioPersonal', ['ngRoute']);

portfolioPersonal.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl : 'views/home.html',
			controller  : 'mainController'
		})
		.when('/about', {
			templateUrl : 'views/about.html',
			controller  : 'aboutController'
		})
		.when('/contact', {
			templateUrl : 'views/contact.html',
			controller  : 'contactController'
		})
		.otherwise({
			redirecTo: '/'
		});	
}]);

portfolioPersonal.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});

portfolioPersonal.controller('aboutController', function($scope) {
    $scope.message = 'Esta es la página "Acerca de"';
});

portfolioPersonal.controller('contactController', function($scope) {
    $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});