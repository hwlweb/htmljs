// Generated by CoffeeScript 1.9.3
(function() {
  var binPath, childProcess, phantomjs;

  childProcess = require('child_process');

  phantomjs = require('phantomjs');

  binPath = phantomjs.path;

  module.exports = {
    create_article: function(article_id, callback) {
      var childArgs;
      childArgs = ['./lib/phantom.js', article_id];
      return childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        return callback && callback();
      });
    },
    create_card: function(card_id, callback) {
      var childArgs;
      childArgs = ['./lib/phantom/card.js', card_id];
      return childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        return callback && callback();
      });
    },
    create_topic: function(topic_id, callback) {
      var childArgs;
      childArgs = ['./lib/phantom/topic.js', topic_id];
      return childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        return callback && callback();
      });
    },
    create_column: function(column_id, callback) {
      var childArgs;
      childArgs = ['./lib/phantom/column.js', column_id];
      return childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        return callback && callback();
      });
    }
  };

}).call(this);
