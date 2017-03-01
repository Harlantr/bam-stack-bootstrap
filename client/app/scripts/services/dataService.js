angular.module('todo')
    .factory('dataFactory', ['$http', function($http) {

    var dataFactory = {};

    //Reset headers to avoid OPTIONS request (aka preflight)
    $http.defaults.headers.common = {};
    $http.defaults.headers.post = {};
    $http.defaults.headers.put = {};
    $http.defaults.headers.patch = {};

    dataFactory.createTodo = function (data) {
        return $http.post('http://localhost:8081/todos', data);
    };

    dataFactory.deleteTodo = function (id) {
        return $http.delete('http://localhost:8081/todos/' + id);
    };

    dataFactory.getTodos = function () {
        return $http.get('http://localhost:8081/todos');
    };

    return dataFactory;
}]);