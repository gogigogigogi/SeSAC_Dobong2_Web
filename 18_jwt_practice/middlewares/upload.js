const multer = require("multer");
const path = require("path");

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, "uploads/");
    },
    filename: (req, file, done) => {
      const extension = path.extname(file.originalname);
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: {
    fieldSize: 5 * 1024 * 1024,
  },
});

module.exports = uploadDetail;
