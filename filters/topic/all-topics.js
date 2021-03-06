// Generated by CoffeeScript 1.9.3
(function() {
  module.exports = function(req, res, next) {
    var condition, count, page;
    condition = null;
    if (req.query.tag_id) {
      condition = {
        tag_id: req.query.tag_id
      };
      res.locals.tag_id = req.query.tag_id;
    }
    page = req.query.page || 1;
    count = req.query.count || 30;
    return (__F('topic')).count(condition, function(error, _count) {
      if (error) {
        return next(error);
      } else {
        res.locals.total = _count;
        res.locals.totalPage = Math.ceil(_count / count);
        res.locals.page = req.query.page || 1;
        return (__F('topic')).getAll(page, count, condition, "sort desc,score desc", function(error, topics) {
          if (error) {
            return next(error);
          } else {
            res.locals.topics = topics;
            return next();
          }
        });
      }
    });
  };

}).call(this);
