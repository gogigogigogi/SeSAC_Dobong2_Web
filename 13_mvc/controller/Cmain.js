const Comment = require("../model/Comment");

// GET /
exports.main = (req, res) => {
  console.log("/ 접속");
  res.render("index.ejs");
};

exports.comments = (req, res) => {
  console.log("/comments 접속");
  console.log(Comment.commentInfos());
  res.render("comments.ejs", { comments: Comment.commentInfos() });
};

exports.comment = (req, res) => {
  const comments = Comment.commentInfos();
  console.log(req.params);
  console.log(req.query);
  const commentId = req.params.id;

  if (commentId < 1 || commentId > comments.length) {
    res.render("404.ejs");
  }
  if (isNaN(commentId)) {
    res.render("404.ejs");
  }
  res.render("comment.ejs", { commentInfo: comments[commentId - 1] });
};
