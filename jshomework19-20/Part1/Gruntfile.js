module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
			dist: {
				src: ['js/jquery.jcarousel.js', 'js/carousel.js','js/script.js'],
				dest: 'js/build/production.js',
			},
			build: {
				src: ['css/variables.scss','css/reset.scss','css/style.scss'],
				dest: 'css/build/main.scss',
			}
		},
		uglify: {
			build: {
				src: 'js/build/production.js',
				dest: 'js/build/production.min.js'
			}
		},
		watch: {
			options: { livereload: true, },
			scripts: {
				files: ['js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				}
			},
			css: {
				files: ['css/*.scss'],
				tasks: ['concat','sass'],
				options: {
					spawn: false,
				}
			}
		},
		sass: {
			dist: {
				  files: [{
					expand: true,
					cwd: 'css/build/',
					src: ['main.scss'],
					dest: 'css/build/',
					ext: '.css'
				  }]
				}
			}
		});

    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['concat','uglify','sass']);

};