 module.exports = function(grunt){
 grunt.config(
  ['exec'], {
    minify: {
      command: 'node ./node_modules/requirejs/bin/r.js -o ./app/scripts/build.js optimize=none',
      stdout: true,
      stderr: true
    },
    jsconsole: {
      cmd: function(port) {
        return 'node jsconsole/server.js ' + port;
      },
      stdout: true,
      stderr: true 
    },
    logger: {
      cmd: function(host, port, logfile) {
        return 'node logger/log-server.js ' + host + ' ' + port + ' ' + logfile;
      },
      stdout: true,
      stderr: true
    },
    killallserversOSX:{
      command:'killall node',
      stdout: true,
      stderr: true
    },
    killallserversWindows:{
      command:'taskkill /F /IM node.exe'
    },
    removeZip: {
      command: 'rm RemoteLink.zip | echo',
      stdout: true,
      stderr: true
    },
    removeBin: {
      command: 'rm -rf bin | echo',
      stdout: true,
      stderr: true
    },
    removeBar: {
      command: 'rm -rf RemoteLink | echo',
      stdout: true,
      stderr: true
    },
    LocaleMakeTempDir: {
      command: 'mkdir tempLocale | echo',
      stdout: true,
      stderr: true
    },
    LocaleGetLatestLocale: {
      command: 'curl get http://192.168.22.42:8081/artifactory/simple/libs-snapshot-local/com/gm/onstar/mygm/translations/html5/0.0.1-SNAPSHOT/html5-0.0.1-20130911.180309-6-translations-html5.zip > tempLocale/html5Locale.zip | echo',
      stdout: true,
      stderr: true
    },
    LocaleUnzipLocale: {
      command: 'unzip tempLocale/html5Locale.zip -d tempLocale | echo',
      stdout: true,
      stderr: true
    },
    LocaleRemoveCurrent: {
      command: 'rm -fr app/locales/* | echo',
      stdout: true,
      stderr: false
    },
    LocaleCopyUnzipFileToLocalFolder: {
      command: 'cp -r tempLocale/html5-0.0.1-SNAPSHOT/HTML5/* app/locales',
      stdout: true,
      stderr: true
    },
    LocaleRenameFile: {
      command: 'mv app/locales/en app/locales/en-US&mv app/locales/en_CA app/locales/en-CA&mv app/locales/es app/locales/es-MX&mv app/locales/fr app/locales/fr-CA | echo',
      stdout: true,
      stderr: false
    },
    LocaleRemoveTemp: {
      command: 'rm -fr tempLocale | echo',
      stdout: true,
      stderr: false
    },
    signBB7: {
      command: './signBB7.sh | echo',
      stdout: true,
      stderr: true
    },
    deployBB7: {
      command: './deployBB7.sh | echo',
      stdout: true,
      stderr: true
    },
    signBB10: {
      command: './signBB10.sh',
      stdout: true,
      stderr: true
    },
    deployBB10: {
      command: './deployBB10.sh | echo',
      stdout: true,
      stderr: true
    },
    configBB7: {
      command: 'cp config_bb7.xml config.xml | echo',
      stdout: true,
      stderr: true
    },
    configBB10: {
      command: 'cp config_bb10.xml config.xml | echo',
      stdout: true,
      stderr: true
    },
    indexBB7: {
      command: 'cp app/index_bb7.html app/index.html | echo',
      stdout: true,
      stderr: true
    },
    indexBB7WP: {
      command: 'copy app\\index_bb7.html app\\index.html',
      stdout: true,
      stderr: true
    },
    indexBB10: {
      command: 'cp app/index_bb10.html app/index.html | echo',
      stdout: true,
      stderr: true
    },
    debugBB10: {
      command: 'ls remotelink.*',
      stdout: true,
      stderr:true
    },
    cucumber: {
      command: 'cucumber --tags ~@html5-remote --tags ~@android --tags ~@ios --tags ~@manual',
      stdout: true,
      stderr: true
    },
    cucumberremote:{
      command: 'cucumber --tags ~@android --tags ~@ios --tags ~@manual',
      stdout: true,
      stderr: true
    },
    msbuild:{
      command:'msbuild.exe app/platform/wp/RemoteLink20/RemoteLink20/RemoteLink20.csproj /nologo /t:Clean;Build /p:configuration="Release"',
      stdout:true,
      stderr:true 
    }
  });
 	grunt.registerTask('killserver', ['exec:killallserversOSX']);
	grunt.registerTask('fetchLocaleFiles',['exec:LocaleRemoveTemp', 'exec:LocaleRemoveCurrent', 'exec:LocaleMakeTempDir', 'exec:LocaleGetLatestLocale', 'exec:LocaleUnzipLocale', 'exec:LocaleCopyUnzipFileToLocalFolder', 'exec:LocaleRenameFile', 'exec:LocaleRemoveTemp']);
	grunt.registerTask('buildBB7', ['stylus', 'exec:removeZip', 'exec:removeBin', 'exec:removeBar', 'exec:configBB7', 'exec:indexBB7', 'compress', 'exec:signBB7']);
	grunt.registerTask('deployBB7', ['exec:deployBB7']);
  grunt.registerTask('buildDeployBB7', ['buildBB7','exec:deployBB7']);
	grunt.registerTask('buildBB10', ['stylus', 'exec:removeZip', 'exec:removeBin', 'exec:removeBar', 'exec:configBB10', 'exec:indexBB10', 'compress', 'exec:signBB10']);
	grunt.registerTask('deployBB10', ['exec:deployBB10']);
	grunt.registerTask('buildDeployBB10', ['buildBB10','exec:deployBB10']);
	grunt.registerTask('minify', 'exec:minify');
	grunt.registerTask('setIndex', ['exec:indexBB7']);
	grunt.registerTask('buildxap',['stylus', 'exec:indexBB7WP','stylus-wp','exec:msbuild']);
	grunt.registerTask('cucumber', ['exec:cucumber']);
	
  grunt.loadNpmTasks("grunt-exec")
}  