// Generated by CoffeeScript 1.9.3
(function() {
  var articles;

  articles = module.exports = function(req, res, next) {
    var condition, count, page;
    condition = {
      is_publish: 1,
      is_yuanchuang: 1
    };
    page = req.query.page || 1;
    count = req.query.count || 20;
    return (__F('article/article')).count(condition, function(error, _count) {
      if (error) {
        return next(error);
      } else {
        res.locals.total = _count;
        res.locals.totalPage = Math.ceil(_count / count);
        res.locals.page = req.query.page || 1;
        return (__F('article/article')).getAll(page, count, condition, "sort desc,score desc", function(error, articles) {
          if (error) {
            return next(error);
          } else {
            res.locals.articles = articles;
            return next();
          }
        });
      }
    });
  };

}).call(this);
