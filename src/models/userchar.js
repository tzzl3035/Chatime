const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/chatime');

const Schema = mongoose.Schema;

const UserCharSchema = new Schema({
	name: String,
	pass: String,
	online: Boolean
}); // 规范数据格式

const UserChar = conn.model('user', UserCharSchema); // 创建数据模型

module.exports = UserChar;
