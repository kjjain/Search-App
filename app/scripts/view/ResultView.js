define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'view/DefaultView'
  ], function($, _, Backbone, Handlebars,DefaultView){ 
  var ResultView = DefaultView.extend({
    template: "ResultTemplate",
    logout: function(ev) {
      this.trigger('view:logout');
    },
    changeVehicle: function(ev) {
      this.trigger('view:changeVehicle');
    },
    renderAdditionalTemplates: function() {
      this.renderHeaderTemplate({
          branding: 'chevy'
        });
    }
  });
  SA.View.Class.ResultView = ResultView;
  return ResultView;

});