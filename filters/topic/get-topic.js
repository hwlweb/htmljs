// Generated by CoffeeScript 1.9.3
(function() {
  var func_topic;

  func_topic = __F('topic');

  module.exports = function(req, res, next) {
    return func_topic.getById(req.params.id, function(error, topic) {
      if (error) {
        return next(error);
      } else {
        res.locals.topic = topic;
        return next();
      }
    });
  };

}).call(this);
