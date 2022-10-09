import { Express, Request, Response, Router } from "express";
import commonRes from "../utils/commonRes";
const { login } = require("../Model/user");

// 路由配置接口
interface RouterConf {
	path: string;
	router: Router;
	meta?: unknown;
}

// 路由配置
// const routerConf: Array<RouterConf> = [];

const routes = (app: Express) => {
	app.get("/", (req: Request, res: Response) => {
		commonRes(res, { word: "Hello Server!!!" });
	});

	app.post("/login", (req: Request, res: Response) => {
		commonRes(res, { word: "Hello Shinp77777!!!" });
	});
};

export default routes;
