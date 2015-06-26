// Generated by CoffeeScript 1.9.3
(function() {
  var mail, mustache;

  mail = require('./../lib/mail.js');

  mustache = require('mu2');

  module.exports = {
    sendQAInvite: function(qa, emails) {
      var buffer;
      buffer = "";
      return mustache.compileAndRender('./views/mail/qa-invite.html', qa).on('data', function(c) {
        return buffer += c.toString();
      }).on('end', function() {
        return mail({
          subject: qa.user_nick + " 在前端乱炖问答频道 邀请您回答问题",
          to: emails,
          html: buffer
        });
      });
    },
    sendCardComment: function(source_user_nick, card) {
      var buffer;
      if (!card.email) {
        return;
      }
      buffer = "";
      card.source_user_nick = source_user_nick;
      return mustache.compileAndRender('./views/mail/card-comment.html', card).on('data', function(c) {
        return buffer += c.toString();
      }).on('end', function() {
        return mail({
          subject: source_user_nick + " 在 前端乱炖花名册 评论了你的名片",
          to: card.email,
          html: buffer
        });
      });
    },
    sendArticleComment: function(source_user, article_user, article) {
      var buffer;
      if (!article_user.email) {
        return;
      }
      buffer = "";
      article.source_user = source_user;
      return mustache.compileAndRender('./views/mail/article-comment.html', article).on('data', function(c) {
        return buffer += c.toString();
      }).on('end', function() {
        return mail({
          subject: source_user.nick + " 在 前端乱炖 评论了你的原创文章",
          to: article_user.email,
          html: buffer
        });
      });
    },
    sendMessage: function(email, data) {
      var buffer;
      if (!email) {
        return;
      }
      buffer = "";
      return mustache.compileAndRender('./views/mail/common.html', data).on('data', function(c) {
        return buffer += c.toString();
      }).on('end', function() {
        return mail({
          subject: data.title,
          to: email,
          html: buffer
        });
      });
    },
    sendAnswer: function(answer, question, card) {
      var buffer;
      if (!card.email) {
        return;
      }
      buffer = "";
      answer.title = question.title;
      return mustache.compileAndRender('./views/mail/qa-answer.html', answer).on('data', function(c) {
        return buffer += c.toString();
      }).on('end', function() {
        return mail({
          subject: answer.user_nick + " 在 前端乱炖 回答了你的提问",
          to: card.email,
          html: buffer
        });
      });
    },
    sendArticleRss: function(article, emails) {
      var buffer;
      buffer = "";
      console.log(emails);
      return mustache.compileAndRender('./views/mail/article-rss.html', {
        id: article.id,
        title: article.title,
        html: article.html.substr(0, 500) + "......"
      }).on('data', function(c) {
        return buffer += c.toString();
      }).on('end', function() {
        return mail({
          subject: "前端乱炖专栏新文章：" + article.title,
          bcc: emails,
          to: "xinyu198736@gmail.com",
          html: buffer
        });
      });
    },
    sendColumnNotify: function(column, card, rsses) {
      var buffer;
      buffer = "";
      return mustache.compileAndRender('./views/mail/column-notify.html', column).on('data', function(c) {
        return buffer += c.toString();
      }).on('end', function() {
        return mail({
          subject: "您的专栏被订阅了，赶紧来更新文章吧！",
          to: card.email,
          html: buffer
        });
      });
    }
  };

}).call(this);
