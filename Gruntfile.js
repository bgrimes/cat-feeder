module.exports = function (grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    var appConfig = {
        public: {
          directory:'public/'
        },
        app: {
          directory: 'app/'
        },
        // @todo figure out how to load from .bowerrc
        bower: {
          targetDir: 'vendor/assets'
        }
    };

    grunt.initConfig({
        appConfig: appConfig
    });

    grunt.loadTasks('tasks');
};
