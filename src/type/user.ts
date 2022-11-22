/*
 * @Author: anjiang
 * @Date: 2022-11-21
 * @LastEditors: anjiang
 * @LastEditTime: 2022-11-21
 * @Description:
 */
export interface IUser {
	/** 用户名 */
	userName: string;
	/** id */
	id: number;
	/** 密码 */
	pass: string;
	/** 头像 */
	avatar: string;
	/** 邮箱 */
	email: string;
	/** 身份 */
	role: ERole[keyof ERole];
	/** 创建日期 */
	createDate?: number;
	/** 性别 */
	gender: "man" | "woman";
	/** 待扩展1 */
	extend1?: any;
	/** 待扩展2 */
	extend2?: any;
	/** 待扩展3 */
	extend3?: any;
	/** 待扩展4 */
	extend4?: any;
	/** 待扩展5 */
	extend5?: any;
}

/** 系统管理员99最高，1最低 */
export enum ERole {
	BOSS = 99,
	ONE = 1,
	TWO = 2,
	THREE = 3,
	FOUR = 4
}
