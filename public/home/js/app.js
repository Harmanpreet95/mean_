var app = angular.module('northwindnode.home', [
    'ui.router'
])


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "/home/templates/index.html"
            controller: 'UserCtrl'
        })


    $urlRouterProvider.otherwise("/");
});
