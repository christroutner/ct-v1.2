(function() {
  
  var app = angular.module('mainPage', []);

  
  
  app.controller('PrimaryController', function() {
    
    
    //expansion_icon_toggle();
    
    /*
    var pnlTitle = $('.panel-title')[0];
    pnlTitle.on('show.bs.collapse', function() {
      var imgFileName = 'blah';
      debugger;
      imgFileName = 'blah2';
    });
    */
    
    /*
    $(document).ready(function(){
      debugger;
      $("#titleOverview").on("hide.bs.collapse", function(){
        //$("i").html('<span class="glyphicon glyphicon-collapse-down"></span> Open');\
        debugger;
        alert('a');
      });
      $("#titleOverview").on("show.bs.collapse", function(){
        //$("i").html('<span class="glyphicon glyphicon-collapse-up"></span> Close');
        debugger;
        alert('b');
      });
    });
    */
    
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


  /*
  app.directive('panelIcons', function() {
    return {
      restrict: 'A',
      templateUrl: 
    }
  });
  */
  
})();

