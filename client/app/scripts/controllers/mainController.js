angular.module('todo')
    .controller('mainController', ['$scope', 'dataFactory',
        function($scope, dataFactory){

    $scope.formData = {};

    // Get all todos and show them
    loadData()

    // Add a new todo
    $scope.createTodo = function() {
        dataFactory.createTodo($scope.formData)
        .then(
            function success(response) {
                loadData();
            }, function error(response) {
                console.log('Error: ' + response.data);
            });
        $scope.formData = {}; // clear the form so our user is ready to enter another
    };

    // Delete a todo
    $scope.deleteTodo = function(id) {
        dataFactory.deleteTodo(id)
        .then(
            function success(response) {
                loadData();
            }, function error(response) {
                console.log('Error: ' + response.data);
            });
    };

    // Load data from server
    function loadData(){
        dataFactory.getTodos()
        .then(
            function success(response) {
                $scope.todos = response.data;
            }, function error(response) {
                //Swallow that shit.
            });
    };
}]);