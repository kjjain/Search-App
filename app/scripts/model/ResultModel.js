define(
  [
    'jquery',
    'underscore',
    'backbone',
    'model/DefaultModel'
  ], function($, _, Backbone, DefaultModel){
  // logger.info("Initiate SettingsModel");
  var ResultModel = DefaultModel.extend({
   
  },
  //Class Methods
  {
    create : function(data){
      // logger.debug('Creating Settings Model Instance');
      var model = new this(data);
      SA.Model.Instance.ResultModel = model;
      SA.Models.push(model);
      return model;
    }
  });
  SA.Model.Class.ResultModel = ResultModel;
  return ResultModel;
});


