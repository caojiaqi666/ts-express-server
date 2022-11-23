import { Express } from "express";
const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname));
	}
});

const upload = multer({ dest: "public/img", storage });

const uploadMiddle = (app: Express) => {
	app.post("/upload/single", upload.single("img"), (req: any, res) => {
		if (req.file) {
			res.send("文件上传成功");
		} else {
			res.send("上传失败");
		}
	});

	app.post("/upload/more", upload.array("files"), (req: any, res) => {
		console.log(req.files);
	});
};

export default uploadMiddle;
