module.exports = function(grunt) {

var wpstylusFiles = { "app/platform/wp/RemoteLink20/RemoteLink20/www/styles/compiled-css/result.css":["app/styles/common.styl","app/styles/iexplorer.styl","app/styles/common-sprite.styl"] };
var bbstylusFiles = { "app/styles/compiled-css/result.css":["app/styles/common.styl","app/styles/webkit.styl","app/styles/common-sprite.styl"]};
	grunt.config(
    ['stylus'], {
      blackberry: {
	  files:bbstylusFiles
	  },
	  windows:{
	  files: wpstylusFiles
	  } 		
    });
    
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.registerTask("stylus-bb", ["stylus:blackberry"]);
    grunt.registerTask("stylus-wp", ["stylus:windows"]);
};