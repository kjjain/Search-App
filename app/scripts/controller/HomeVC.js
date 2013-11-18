define([
  'jquery',
  'handlebars',
  'model/SpringboardModel',
  'view/SpringboardView'
], function(
  $,
  Handlebars,
  SPRINGBOARD_MODEL,
  VIEW
) {
  // logger.info("Initiate Springboard Controller");
  var HomeVC = (function() {
    var model = SPRINGBOARD_MODEL.create();
    var view = VIEW.create({});

    function create(data) {
      var view = new this(data)
      SA.Views.push(view);
      return view;
    }
    function render() {
      // logger.warn("Rendering Springboard Controller");
      view.render().delegateEvents();
    }
      function init() {
       var view = VIEW.create({
          model:  SPRINGBOARD_MODEL 
        });
        view.render();
    }
    return {
      render: render,
      init: init
    };
  })();
  SA.Controller.Class.HomeVC = HomeVC;
});






