(function() {
  
  var app = angular.module('mainPage', []);

  
  
  app.controller('PrimaryController', function() {    
    
    function initFnc() {
    
      debugger;
      var blah = $(this);
    };
    
    
    //Initialize the glyphicon + and - signs on collapsable panels.
    // id = a string with the id of a DOM element. e.x. '#colapseAbout'
    this.initCollapseIcon = function(id) {
      
      //This init function attaches the following code to the '.collapse' class events.
      $(id).on("hide.bs.collapse", function(){
        
        //Walk the DOM and find the nearest glyphicon icon.
        var glyf = $(this).parent().find(".glyphicon")[0];
        
        //Switch the minus to a plus
        $(glyf).removeClass('glyphicon-minus');
        $(glyf).addClass('glyphicon-plus');
        
      });
      $(id).on("show.bs.collapse", function(){
        
        //Walk the DOM and find the nearest glyphicon icon.
        var glyf = $(this).parent().find(".glyphicon")[0];
        
        //Switch the plus to a minus.
        $(glyf).removeClass('glyphicon-plus');
        $(glyf).addClass('glyphicon-minus');
      });
      
      
  
    };
      

  });
  
  app.controller('panelController', function() {
    
    //var blah1 = collapse-id;
    
    debugger;
    
    var blah = $(this);
    
    var blah1 = idTag;
    
    
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

  app.directive('illustrateSpotTracker', function() {
    //debugger;
    return {
      restrict: 'E',
      templateUrl: '../files/SPOT-BackEnd-Illustration.html'
    };
  });
  
  app.directive('illustrateGeoData', function() {
    //debugger;
    return {
      restrict: 'E',
      templateUrl: '../files/GeoData-BackEnd-Illustration.html'
    };
  });

  
})();

