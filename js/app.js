(function() {
  
  var app = angular.module('mainPage', []);

  app.controller('PrimaryController', function() {
    
  });
  
  app.directive('contentCircuits', function() {
    return  {
      restrict: 'E',
      templateUrl: 'content-EE.html'
    };
  });
  
  app.directive('contentAbout', function() {
    return  {
      restrict: 'E',
      templateUrl: 'content-about.html'
    };
  });
  
  app.directive('contentJavascript', function() {
    return  {
      restrict: 'E',
      templateUrl: 'content-javascript.html'
    };
  });
  
  app.directive('contentEmbedded', function() {
    return  {
      restrict: 'E',
      templateUrl: 'content-embedded.html'
    };
  });
  
})();