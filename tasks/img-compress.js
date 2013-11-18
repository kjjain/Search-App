 module.exports = function(grunt){
 grunt.config(
	['img'], {
      task1: {
        src: 'app/assets/images',
        dest: 'app/assets/images_min'
      }
    });
grunt.loadNpmTasks('grunt-img');
};
