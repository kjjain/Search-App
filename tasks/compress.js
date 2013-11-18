module.exports = function(grunt){
 grunt.config(
  ['compress'], {
    main: {
      options: {
        archive: 'RemoteLink.zip'
      },
      files: [{
          src: ['config.xml'],
          dest: './'
        }, // includes files in path
        {
          src: ['test/mocks/xmlpaths.js'],
          dest: './'
        }, {
          src: ['app/**'],
          dest: './',
          ignoreList: require('../ignoreList.json'),
          isContain: function(filepath, patterns) {
            for (var i in patterns) {
              if (filepath.indexOf(patterns[i]) > 0) {
                return true;
              }
            }
            return false;
          },
          isContainDir: function(filepath, patterns) {
            for (var i in patterns) {
              if (filepath.indexOf("\\" + patterns[i] + "\\") > 0 ||
                filepath.indexOf("/" + patterns[i] + "/") > 0) {
                return true;
              }
            }
            return false;
          },
          filter: function(filepath) {
            if (grunt.file.isDir(filepath)) {
              return !this.isContain(filepath, this.ignoreList.dir.pattern);
            } else {
              return ((!this.isContain(filepath, this.ignoreList.file.pattern) && !this.isContainDir(filepath, this.ignoreList.dir.pattern)) ||
                this.isContain(filepath, this.ignoreList.exception));
            }
          }
        }

      ]
    }
  });
	grunt.loadNpmTasks('grunt-contrib-compress');
 }  