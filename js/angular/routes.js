battleShipApp.config(function($routeProvider){
  $routeProvider

    .when("/", {
      templateUrl : "partials/home.html",
      controller  : "homeController"
    })

    .when("/player_one", {
      templateUrl : "partials/player_one.html",
      controller  : "playerController"
    })

    .when("/player_one_setup", {
      templateUrl : "partials/player_one_setup.html",
      controller  : "playerController"
    })

    .otherwise({ redirectTo: "/" })
});