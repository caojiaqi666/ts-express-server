import express from "express";
import routes from "./routes";
import logger from "./utils/logger";
import { PORT } from "./config/default";
import initMiddleware from "./middleware";

const app = express();

// 挂载中间件
initMiddleware(app);

// 启动
app.listen(PORT, async () => {
	logger.info(`App 当前运行在 ${PORT} 端口`);
	routes(app);
});
