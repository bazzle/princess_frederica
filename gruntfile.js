module.exports = function(grunt) {
  
    grunt.initConfig({
      postcss: {
        options: {
          map: true, // inline sourcemaps
  
          processors: [
            require('pixrem')(), // add fallbacks for rem units 
            require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes 
            require('cssnano')() // minify the result 
          ]
        },
        dist: {
          files: {
            'css/main.css': 'css/main.scss'
          }
        }
      },
      sass: {
        dist: {
          files: {
                'css/main.css': 'sass/main.scss'
              }
        }
      },
      watch: {
        src: {
            files: ['sass/*.scss'],
            tasks: ['sass']
        }
      },
      purifycss: {
        options: {},
        target: {
          src: ['test/*.html'],
          css: ['test/css/main.css'],
          dest: 'test/css/purestyles.css'
        }
      }
    });
  
  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-purifycss');
  };