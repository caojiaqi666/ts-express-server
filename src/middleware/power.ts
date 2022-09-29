import { Request, Response, NextFunction } from "express";

const responseHeader = (req: Request, res: Response, next: NextFunction) => {
	const { origin, Origin, referer, Referer } = req.headers;

	// 若没有手动设置，则为通配符
	const allowOrigin = origin || Origin || referer || Referer || "*";

	next();
};

export default responseHeader;
