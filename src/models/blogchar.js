const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/chatime');

const Schema = mongoose.Schema;

const BlogCharSchema = new Schema({
	data: String,
	name: String
}); // 规范数据格式

const BlogChar = conn.model('blog', BlogCharSchema); // 创建数据模型

module.exports = BlogChar;
