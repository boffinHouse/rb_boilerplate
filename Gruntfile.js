(function() {
	'use strict';

	module.exports = function (grunt) {
		grunt.task.loadNpmTasks('grunt-sass');
		grunt.task.loadNpmTasks('grunt-autoprefixer');
		grunt.task.loadNpmTasks('grunt-contrib-watch');
		grunt.task.loadNpmTasks('assemble');

		grunt.initConfig({
			sass: {
				options: {
					//sourceMap: true
				},
				dist: {
					files: {
						'dist/styles.css': 'styles.scss'
					}
				}
			},
			autoprefixer: {
				options: {
					browsers: ['last 2 versions']
				},
				dev: {
					options: {
						map: true
					},
					src: 'dist/*.css'
				}
			},
			watch: {
				scss: {
					files: ['sources/sass/**/*.scss'],
					tasks: ['build']
				},
				assemble: {
					files: ['sources/assemble/**/*.hbs', 'assemble/**/*.hbs', 'sources/data/**/*.json'],
					tasks: ['assemble']
				}
			},
			assemble: {
				options: {
					data: 'sources/data/**/*.{json,yml}',
					helpers: ['handlebars-helper-partial/*.js'],
					layoutdir: 'assemble/layouts/',
					partials: ['sources/assemble/**/*.hbs']
				},
				dev: {
					options: {
						production: false
					},
					files: [
						{
							cwd: 'assemble/pages/',
							dest: '',
							expand: true,
							flatten: true,
							src: ['**/*.hbs']
						}
					]
				}
			}
		});

		grunt.registerTask('css', ['sass', 'autoprefixer']);
		grunt.registerTask('build', ['css', 'assemble']);
		grunt.registerTask('default', ['build', 'watch']);
	};
})();
