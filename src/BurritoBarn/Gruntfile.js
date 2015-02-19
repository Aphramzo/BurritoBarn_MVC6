/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.initConfig({
        uglify: {
            dev: {
                files: {
                    'wwwroot/app.js': ['scripts/app.js', 'scripts/**/*.js']
                }
            }
        },

        less:{
            dev:{
                files:{
                    'wwwroot/css/site.css' : 'less/site.less'
                }
            }
        },

        watch: {
            scripts: {
                files: ['scripts/**/*.js'],
                tasks: ['uglify']
            },
            styles: {
                files: ['less/**/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.registerTask('default', ['uglify', 'less', 'watch']);
};