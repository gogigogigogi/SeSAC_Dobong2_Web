/**
 * GET '/'
 * main 페이지를 보여주는 함수
 */
exports.main = (req, res) => {
  res.render("index.ejs");
};
