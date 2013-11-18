define([
  'jquery',
  'handlebars',
  'view/ResultView',
  'model/ResultModel'
], function(
  $,
  Handlebars,
  VIEW,
  RESULT_MODEL
) {
  var ResultVC = (function() {
    var model = RESULT_MODEL.create();
    var view = VIEW.create({});

    function render() {
      view.render().delegateEvents();
    }

    function init() {
      var view = VIEW.create({
        model: {}
      });
      view.render();
    }
    return {
      render: render,
      init: init
    };
  })();
    SA.Controller.Class.ResultVC = ResultVC;
});