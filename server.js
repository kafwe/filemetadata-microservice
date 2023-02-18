const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const fs = require('fs');

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const { originalname: name, mimetype: type, size } = req.file;

  metadata = {
    name,
    type,
    size
  }

  fs.unlink(req.file.path, (err) => {
    if (err) {
      console.error(`Unable to delete "${name}"`, err);
    }
  });

  res.json(metadata);
});


const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Your app is listening on port ${port}`);
});
