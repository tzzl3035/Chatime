const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/chatime');

const Schema = mongoose.Schema;

const MsgCharSchema = new Schema({
	data: String,
	t: String,
	f: String,
	name: String,
	turnID: Array
}); // 规范数据格式

const MsgChar = conn.model('msg', MsgCharSchema); // 创建数据模型

module.exports = MsgChar;
