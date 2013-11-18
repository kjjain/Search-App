define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars'
], function($, _, Backbone, Handlebars) {
  var DefaultView = Backbone.View.extend({
    renderHeaderTemplate: function(headerdata) {
      var _this = this;
      var headerTemplate = Handlebars.getTemplate('headerTemplate', function(template) {
        var html = template(headerdata);
        Handlebars.showContent('.header', html);
      });
    },    
    render: function() {
      var view = this;
      Handlebars.getTemplate(this.template, function(template) {
        var html = view.$el.html(template(view.model));
        Handlebars.showContent('.container', view.el);
        view.renderAdditionalTemplates(view);
      });
      return this;
    }
  }, {
    create: function(data) {
      var view = new this(data)
      SA.Views.push(view);
      return view;
    }

  });

  return DefaultView;
});