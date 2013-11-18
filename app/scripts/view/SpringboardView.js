define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'model/SpringboardModel'
], function($, _, Backbone, Handlebars, SpringboardModel) {
  var SpringboardView = Backbone.View.extend({
    model:'SpringboardModel',
    events: {
      'click #search-app': 'validate'
    },
    template: "SpringboardTemplate",
    render: function() {
      var view = this;

      Handlebars.getTemplate(view.template, function(template) {
        var htmlResult = template(view);
        view.$el.html(htmlResult);
        Handlebars.showContent('.container', view.el);
        //view.renderAdditionalTemplates(view);
      });
      $('#term').select();
      $('#location').focus();
      return this;
    },
    validate: function() {
      var term = $('#term').val();
      var model = this;
      var location = $('#location').val();
      //SA.Model.Instance.SpringboardModel.setLS(term,location)
      localStorage.setItem("term" , term);
      localStorage.setItem("location", location);   
       SA.Router.Instance.appRouter.navigate('result', {
        trigger: 'true'
      });
      }
  }, {
    create: function(data) {  
      var view = new this(data)
      SA.Views.push(view);
      return view;
    }
  });
  SA.View.Class.SpringboardView = SpringboardView;
  return SpringboardView;
});