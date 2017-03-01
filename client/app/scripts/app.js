var todo = angular.module('todo', ['ngRoute']);

todo.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        controller: 'mainController',
        templateUrl: 'views/main.html'
    })
    .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);
}]);