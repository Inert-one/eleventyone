angular
  .module("ionicApp", ["ionic"])

  .config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("app", {
    url: "/app",
    abstract: true,
    templateUrl: "app.html"
  })
    .state("app.home", {
    url: "/home",
    views: {
      appContent: {
        templateUrl: "home.html",
        controller: "HomeController"
      }
    }
  });

  $urlRouterProvider.otherwise("/app/home");
})

  .controller("AppController", function($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

  .controller("HomeController", function($scope) {})

  .controller("CartController", function($scope) {
  $scope.data = {
    items: []
  };
})
