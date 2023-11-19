const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const upload = multer();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static(__dirname));

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
	const obj = {
		name: req.file.originalname,
		type: req.file.mimetype,
		size: req.file.size,
	};

	res.json(obj);
});

app.listen(3000, () => {
	console.log('Your app is listening on port 3000');
});
