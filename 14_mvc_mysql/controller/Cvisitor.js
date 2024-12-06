const Visitor = require("../model/Visitor");

// "/" GET
exports.main = (req, res) => {
  res.render("index.ejs");
};

// "/visitors" GET
exports.getVisitors = (req, res) => {
  // [DB 연결 전]
  // res.render("visitors", { data: Visitor.getVisitors() });
  // [DB 연결 후]
  Visitor.getVisitors((result) => {
    console.log("전체목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  });
};

// "/visitor/:id" GET
exports.getVisitor = (req, res) => {
  const { id } = req.params;
  console.log(id);
  Visitor.getVisitor(id, (result) => {
    console.log("한 개의 데이터 Cvisitor.js", result);
    res.send(result);
  });
};

// "/visitor" POST
exports.postVisitor = (req, res) => {
  console.log(req.body);
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js", result);
    res.send({ id: result, comment: req.body.comment, name: req.body.name });
  });
};

// "/visitor" DELETE
exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  Visitor.deleteVisitor(req.body.id, () => {
    res.send(req.body.id + "번 id 삭제 완료");
  });
};

// "/visitor" PATCH
exports.patchVisitor = (req, res) => {
  console.log(req.body);
  Visitor.patchVisitor(req.body, () => {
    res.send("수정 완료");
  });
};
