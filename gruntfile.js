module.exports = function configureGrunt(gruntConfig){

  gruntConfig.initConfig({
    clean: ['build/'],

    copy: {
      htmlcopy: {

        files: [ {
          src: 'src/*.html',
          dest: 'build/',
          expand: true
         }
        ]
      }
    },
    sass: {
      all: {
        files: {
          'build/style.csss':'src/sass/main.scss'
        }
      }
    }

  });
  require('load-grunt-tasks')(gruntConfig);

  //create a task called "alias" to run multiple OTHER tasks
  //can create more aliases!
  gruntConfig.registerTask('build',['clean','copy','sass']);
};
