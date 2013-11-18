define(
  [
    'jquery',
    'underscore',
    'backbone'
  ], function($, _, Backbone) {
    // logger.info("Initiate SessionModel");

    var DefaultModel = Backbone.Model.extend({
        fetchedEvent: 'fetched',
        createOptions: function(options) {

          var defaultOption = {forceFetch:true};
          return _.extend(options, defaultOption);
        }
      },
      //Class Methods
      {
        create: function(modelName) {
          var model = new this();
          SA.Models[modelName] = model;
          return model;
        },
      });
    return DefaultModel;
  });