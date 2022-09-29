import express from "express";
import routes from "./routes";
import logger from "./utils/logger";
import config from "./config/default";
import initMiddleware from "./middleware";

const app = express();

// 挂载中间件
initMiddleware(app);

const { port } = config;

// 启动
app.listen(port, async () => {
	console.log(`App 当前运行在 ${port} 端口`);
	logger.info(`App 当前运行在 ${port} 端口`);
	routes(app);
});
