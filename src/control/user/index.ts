const userModel = require("../../Model/user");

const login = async (ctx: any) => {
	const { username, passwd } = ctx.request.body;
	console.log("username, passwd: ", username, passwd);
	return (ctx.body = {
		state: 0,
		msg: "登录成功"
	});
	let user = await UserModel.findOne({ username });
	if (!user) {
		// 如果用户名还没被使用
		// 重定向到聊天页面
		return (ctx.body = {
			state: 1,
			msg: "用户名不存在"
		});
	} else {
		if (passwd !== user.passwd) {
			return (ctx.body = {
				state: 2,
				msg: "密码错误"
			});
		}
		console.log(`${user.username}登录成功`);
		return (ctx.body = {
			state: 0,
			msg: "登录成功",
			user
		});
	}
};

module.exports = {
	login
};
