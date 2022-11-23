/*
 * @Author: anjiang
 * @Date: 2022-09-29
 * @LastEditors: anjiang
 * @LastEditTime: 2022-11-22
 * @Description:
 */
import express from "express";
import routes from "./routes";
import logger from "./utils/logger";
import { PORT } from "./config/default";
import initMiddleware from "./middleware";
import uploadMiddle from "./control/upload";

const app = express();

app.use(express.static("public"));

// 挂载中间件
initMiddleware(app);

// 上传文件
uploadMiddle(app);

// 启动
app.listen(PORT, async () => {
	logger.info(`App 当前运行在 ${PORT} 端口`);
	routes(app);
});
