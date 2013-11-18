require.config({
  baseUrl: 'scripts',
  paths: {
    jquery: '../thirdParty/jquery.min',
    underscore: '../thirdParty/underscore-min',
    backbone: '../thirdParty/backbone-min',
    handlebars: '../thirdParty/handlebars',
    i18next: '../thirdParty/i18next.amd.withJQuery-1.6.3.min',
    appmodule: 'modules/AppModule',
    handlebarextensions: 'extensions/HandlebarExtensions'
  },
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});

require([
  'underscore',
  'appmodule',
  'i18next',
  'controller/HomeVC',
  'controller/ResultVC',
  'handlebarextensions'
], function(
  _,
  AppModule,
  i18n,
  HomeVC,
  ResultVC,
  HandlebarExtensions

) {
  HandlebarExtensions.extend();
var AppRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    "result": "result"
  },
  home: function() {
    SA.Controller.Class.HomeVC.init();
  },
  result:function(){
    SA.Controller.Class.ResultVC.init();
  }
});

SA.Router.Class.AppRouter = AppRouter;
SA.Router.Instance.appRouter = new AppRouter();
Backbone.history.start();
});
//});