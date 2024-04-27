const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/chatime');

const Schema = mongoose.Schema;

const MemoCharSchema = new Schema({
	name: String,
	k: String,
	v: String
}); // 规范数据格式

const MemoChar = conn.model('memo', MemoCharSchema); // 创建数据模型

module.exports = MemoChar;
