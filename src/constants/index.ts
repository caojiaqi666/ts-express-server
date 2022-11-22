// 枚举状态码 根据自己需要定义
enum Code {
	success = 200,
	error = 500,
	denied = 300,
	notLogin = 301,
	redirect = 302
}

enum CodeMessage {
	success = "请求成功",
	error = "系统异常",
	denied = "无权限",
	notLogin = "未登录",
	redirect = "重定向"
}

// 状态类型 只能是Code中所枚举的状态
type codeType = keyof typeof Code;

export { Code, codeType, CodeMessage };
