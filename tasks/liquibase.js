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
  var driver_options = {
    liquibase: {
      options: {
        classpath: path.join(__dirname, '..', 'lib', 'mysql-connector-java-5.1.40-bin.jar'),
        driver: 'com.mysql.jdbc.Driver'
      }
    }
  };
  if (grunt.config.data.liquibase.driver_options) {
    driver_options.liquibase.options.url =
      `jdbc:mysql://${grunt.config.data.liquibase.driver_options.hostname}:3306/${grunt.config.data.liquibase.driver_options.database}`;
  }
  grunt.initConfig(merge.recursive(driver_options, grunt.config.data));
  grunt.loadNpmTasks('grunt-liquibase');
};
