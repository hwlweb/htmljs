// Generated by CoffeeScript 1.9.3
(function() {
  var func_answer;

  func_answer = __F('answer');

  module.exports = function(req, res, next) {
    return func_answer.getByQuestionId(req.params.id, 1, 100, null, function(error, answers) {
      if (error) {
        return next(error);
      } else {
        res.locals.answers = answers;
        return next();
      }
    });
  };

}).call(this);
