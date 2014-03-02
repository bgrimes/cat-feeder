var fs       = require('fs'),
    fse      = require('fs-extra'),
    path     = require('path');

module.exports = function(grunt){
  var appConfig = grunt.config.get('appConfig'),
      publicDir = appConfig.public.directory,
      bowerDir  = appConfig.bower.targetDir,
      jsTargetDir  = publicDir + 'js/vendor/',
      cssTargetDir = publicDir + 'css/vendor/',
      jsFilesToMove,
      cssFilesToMove;

  jsFilesToMove = [
    bowerDir + '/bootstrap/dist/js/bootstrap.js',
    bowerDir + '/bootstrap/dist/js/bootstrap.min.js',
    bowerDir + '/ember/ember.js',
    bowerDir + '/ember/ember.min.js',
    bowerDir + '/ember-data/ember-data.js',
    bowerDir + '/ember-data/ember-data.min.js',
    bowerDir + '/handlebars/handlebars.runtime.min.js',
    bowerDir + '/handlebars/handlebars.runtime.js',
    bowerDir + '/jquery/jquery.min.js',
    bowerDir + '/jquery/jquery.js',
    bowerDir + '/jquery/jquery.min.map',
    bowerDir + '/underscore/underscore.js',
    bowerDir + '/underscore/underscore-min.js',
    bowerDir + '/underscore/underscore-min.map'
  ];

  cssFilesToMove = [
    bowerDir + '/font-awesome/css/font-awesome.css',
      bowerDir + '/font-awesome/css/font-awesome.min.css',
    bowerDir + '/bootstrap/dist/css/bootstrap.css',
    bowerDir + '/bootstrap/dist/css/bootstrap.min.css'
  ];

  dirsToMove = [
    {
      src: bowerDir + '/font-awesome/fonts',
      dest: publicDir + 'css/fonts'
    }
  ];


  // THE TASK IS AT HAND
  grunt.task.registerTask('bower:dist', function(){
    grunt.log.subhead('Moving bower files to "' + publicDir + '"');

    // Create the target dir if it doesn't exist
    [jsTargetDir, cssTargetDir].forEach(function(dir){
      if (!fs.existsSync(dir)) {
        grunt.log.writeln('  [+] creating directory "' + dir + '"');
        fs.mkdirsSync(dir);
      }
    });

    // Move JS
    jsFilesToMove.forEach(function(filepath) {
      var filename = path.basename(filepath),
          dest = jsTargetDir + filename;
      grunt.log.ok('copying ' + filename + ' to ' + dest);
      fse.copySync(filepath, dest);
    });

    // Move CSS
    cssFilesToMove.forEach(function(filepath) {
      var filename = path.basename(filepath),
          dest = cssTargetDir + filename;
      grunt.log.ok('copying ' + filename + ' to ' + dest);
      fse.copySync(filepath, dest);
    });

    // Dirs to move
    dirsToMove.forEach(function(dir){
      grunt.log.ok('copying ' + dir.src + ' to ' + dir.dest);
      fse.copySync(dir.src, dir.dest);
    });
  });
};
