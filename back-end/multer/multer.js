const multer = require("multer");

const Storage = multer.diskStorage({
    destination: (req,file,cb)=>{
      cb(null,'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },  
  });
  const upload = multer({storage: Storage}).single('testImage');

  module.exports = upload
