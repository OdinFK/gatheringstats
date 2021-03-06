'use strict';

module.exports = {
  all: {
    options: {
      sourceMap: false
    },
    files: {
      'build/js/app.js': ['build/js/app.js'],
      'build/data/players.js': ['build/data/players.js'],
      'build/data/recent.js': ['build/data/recent.js'],
      'build/data/tournaments.js': ['build/data/tournaments.js']
    }
  }
};
