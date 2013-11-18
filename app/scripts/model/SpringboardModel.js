define(
  [
    'jquery',
    'underscore',
    'backbone',
    'model/DefaultModel'
  ], function($, _, Backbone, DefaultModel) {

    var SpringboardModel = DefaultModel.extend({
      term: function() {
        return this.get('term');
      },
      location: function() {
        return this.get('location');
      },
      setLS:function(term,location){
        localStorage.setItem("term" , term);
        localStorage.setItem("location", location);
      },
      //Class Methods
      create: function() {
        var model = new this();
        SA.Model.Instance.SpringboardModel = model;
        SA.Models['SpringboardModel'] = model;
        return model;
      }
    });
    SA.Model.Class.SpringboardModel = SpringboardModel;
    return SpringboardModel;
  });