module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
			dist: {
				src: ['js/*.js'],
				dest: 'js/build/production.js',
			}
            
        },
		uglify: {
			build: {
				src: 'js/build/production.js',
				dest: 'js/build/production.min.js'
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['img/*.{png,jpg,gif}'],
					dest: 'img/build/'
				}]
			}
		},
		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			}
		},
		concat_css: {
			options: {
			  // Task-specific options go here. 
			},
			all: {
			  src: ["css/*.css"],
			  dest: "css/build/styles.css"
			},
		  },
		 cssmin: {
			  target: {
				files: [{
				  expand: true,
				  src: ['css/build/styles.css'],
				  ext: '.min.css'
				}]
			  }
			}

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'imagemin','concat_css','cssmin', 'watch']);

};