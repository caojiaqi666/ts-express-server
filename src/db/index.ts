import logger from "../utils/logger";
import { DBURL } from "../config/default";
// 连接数据库
const mongoose = require("mongoose");

// 可以连接多张表
// db是create方法返回的连接的数据库对象,可以在该对象下取Schema类和model，
// 这样就可以连接和操作多个数据库，这种连接方式跟connect只能连接和操作一个数据库
const db = mongoose.createConnection(DBURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// 数据库连接成功，触发open事件
db.on("open", () => {
	logger.info("数据库连接成功", DBURL);
});

db.on("error", (err: any) => {
	logger.error("数据库连接失败", err);
});

module.exports = {
	db, // 连接数据库
	Schema: mongoose.Schema // 创建数据库模型
};
