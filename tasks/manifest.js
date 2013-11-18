module.exports = function(grunt){
    grunt.config(
    ['manifest'], {
      generate: {
        options: {
          basePath: 'app/',
          cache: ['styles/*.css', 'scripts/**/*.js'],
          network: ['http://*', 'https://*'],
          fallback: ['/ /offline.html'],
          exclude: ['js/jquery.min.js'],
          preferOnline: true,
          verbose: true,
          timestamp: true
        },
        src: [
          'some_files/*.html',
          'js/*.min.js',
          'css/*.css'
        ],
        dest: 'manifest.appcache'
      }
    });

     grunt.loadNpmTasks('grunt-manifest');
}

