// src/routes/index.ts

import { Express, Request, Response, Router } from "express";
import commonRes from "../utils/commonRes";

// 路由配置接口
interface RouterConf {
	path: string;
	router: Router;
	meta?: unknown;
}

// 路由配置
// const routerConf: Array<RouterConf> = [];

function routes(app: Express) {
	// 根目录
	app.get("/", (req: Request, res: Response) => {
		commonRes(res, { word: "Hello Shinp!!!" }); // 成功
	});
}

export default routes;
