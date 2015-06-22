(function() {
	'use strict';

	module.exports = function (grunt) {
		grunt.task.loadNpmTasks('grunt-sass');
		grunt.task.loadNpmTasks('grunt-autoprefixer');
		grunt.task.loadNpmTasks('grunt-contrib-watch');

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
				}
			}
		});

		grunt.registerTask('build', ['sass', 'autoprefixer']);
		grunt.registerTask('default', ['build', 'watch']);
	};
})();
