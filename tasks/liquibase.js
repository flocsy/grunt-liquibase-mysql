/*
* grunt-liquibase-mysql
* https://github.com/flocsy/grunt-liquibase-mysql
*
* Copyright (c) 2016 Gavriel Fleischer
* Licensed under the MIT license.
*/

'use strict';

const path = require('path');
const merge = require('merge');

module.exports = function(grunt) {
  grunt.initConfig(merge.recursive({
    liquibase: {
      options: {
        url: `jdbc:mysql://${grunt.config.data.liquibase.hostname}:3306/${grunt.config.data.liquibase.database}`,
        classpath: path.join(__dirname, '..', 'lib', 'mysql-connector-java-5.1.40-bin.jar'),
        driver: 'com.mysql.jdbc.Driver'
      }
    }
  }, grunt.config.data));
  grunt.loadNpmTasks('grunt-liquibase');
};
