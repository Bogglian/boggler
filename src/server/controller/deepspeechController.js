const ds = require('node-deepspeech');
const FS = require('fs');

module.exports = function() {
  return {
    file(req, res, next) {
      if (!req.files) {
        console.log('no file');
        next();
      }
      console.log(
        `write board with file filename: ${req.files.audiofile.name}`,
      );
      const getFile = req.files.audiofile;
      getFile.mv(`${__dirname}/../upload/${getFile.name}`, saveErr => {
        if (saveErr) {
          next(saveErr);
        }
        ds.dsFile(`${__dirname}/../upload/${getFile.name}`)
          .then(data => {
            FS.unlink(`${__dirname}/../upload/${getFile.name}`, deleteErr => {
              if (deleteErr) {
                next(deleteErr);
              }
            });
            res.status(201).json({ ds: data });
          })
          .catch(err => {
            next(err);
          });
      });
    },
  };
};
