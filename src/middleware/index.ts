import express, { Express } from "express";
import responseHeader from "./responseHeader"; // 请求头

const initMiddleware = (app: Express) => {
	app.use(express.json());
	app.use(responseHeader);
};

export default initMiddleware;
