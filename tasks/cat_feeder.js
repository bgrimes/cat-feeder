module.exports = function(grunt) {
    var appConfig = grunt.config.get('appConfig'),
        publicDir = appConfig.public.directory + 'js',
        base      = appConfig.app.directory,
        appJs     = base + 'app.js';

    grunt.config.set('catFeeder', {
        base: base,
        publicDir: publicDir,
        files: [
            base + '{,*}*.js'
        ],
        templates: [
            base + 'templates/{,*}*.hbs'
        ]
    });

    // browserify, watch ALL js files except
    grunt.config.set('browserify.catFeeder', {
        src: [
            '<%= catFeeder.files %>'
        ],
        dest: '<%= catFeeder.publicDir %>/cat_feeder.min.js'
    });

    // ember templates
    grunt.config.set('emberTemplates.catFeeder', {
        options: {
                templateName: function (sourceFile) {
                    // The source file will automatically remove 'handlebars' from the end of the filename
                    var re = /(\w|\/)*templates\/(.*)/;
                    var fileparse = sourceFile.match(re);
                    return fileparse[2];
                }
        },
        files: {
            '<%= catFeeder.publicDir %>/cat_feeder_templates.min.js': ['<%= catFeeder.templates %>']
        }
    });

    // uglify
    grunt.config.set('uglify.catFeeder', {
        options: {
            beautify: true,
            mangle: false
        },
        files: {
            '<%= catFeeder.publicDir %>/cat_feeder.min.js': [
                '<%= catFeeder.publicDir %>/cat_feeder.min.js',
                '<%= catFeeder.publicDir %>/cat_feeder_templates.min.js'
            ]
        }
    });

    // JS HINT
    grunt.config.set('jshint.catFeeder', [
        '<%= catFeeder.files %>',
        '!<%= catFeeder.templates %>',
        'tasks/cat_feeder.js'
    ]);

    // clean
    grunt.config.set('clean.catFeeder',
        '<%= catFeeder.publicDir %>/cat_feeder_templates.min.js'
    );

    // watch
    grunt.config.set('watch.catFeeder', {
        files: base + '/{,*}*',
        tasks: ['catFeeder']
    });

    grunt.registerTask('catFeeder', ['jshint:catFeeder', 'emberTemplates:catFeeder', 'browserify:catFeeder', 'uglify:catFeeder', 'clean:catFeeder']);
};
