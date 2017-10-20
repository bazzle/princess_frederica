module.exports = function(grunt) {
    
   grunt.initConfig({
     sass: {
       dist: {
         files: {
           'main.css': 'main.scss'
         }
       }
     }
   });
    
     // Load grunt plugins.
   grunt.loadNpmTasks('grunt-contrib-sass');
      
   };