const { Schema } = require("../db");

const UserSchema = new Schema(
	{
		userName: {
			type: String,
			required: true
		},
		pass: {
			type: String,
			required: true
		},
		avatar: {
			type: String,
			required: true,
			default: `http://localhost:9527/avatar/default.png`
		},
		email: {
			type: String,
			required: false
		},
		power: {
			type: Number,
			required: false,
			default: 0
		},
		createDate: {
			type: Number,
			required: true,
			default: 0
		},
		gender: {
			type: String,
			required: true,
			default: "man"
		},
		extend1: {
			type: Number,
			required: false
		},
		extend2: {
			type: Number,
			required: false
		},
		extend3: {
			type: Number,
			required: false
		},
		extend4: {
			type: Number,
			required: false
		},
		extend5: {
			type: Number,
			required: false
		}
	},
	{
		versionKey: false
	}
);

module.exports = UserSchema;
