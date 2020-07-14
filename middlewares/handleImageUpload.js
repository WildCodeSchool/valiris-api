const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const desitnation = path.resolve(__dirname, '../uploads/')
    console.log('storing uploaded file into : ', desitnation)
    cb(null, desitnation);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  const err = 'Error: File upload only supports the following filetypes - ' + filetypes;
  console.error(err);
  cb(err);
};

const upload = multer({ storage, fileFilter }).single('currentPicture');

module.exports = upload;
