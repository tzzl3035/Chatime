import UserChar from "../../models/userchar.js"
import MsgChar from "../../models/msgchar.js"
import MemoChar from "../../models/memochar.js"

export async function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;
	const { type } = req.query;
	let data = await UserChar.findOne({name: slug});
	if(data === null || !data.online){
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({
			message: `Not found`
		}));
	};
	if(type === "pre")
	{
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		let msgn = await MsgChar.find({name: slug});
		let memo = await MemoChar.find({name: slug});
		let resultPre = {
			name: slug,
			oMsg: msgn,
			myMemo: memo
		};
		res.end(JSON.stringify(resultPre));
	}
	else if(type === "addMsg")
	{
		let { data, t } = req.query;
		var i;
		let turnIDArr = [];
		for(i in t.split('和'))
		{
			let charmsg1 = new MsgChar({
				data: data,
				t: t.split('和')[i],
				f: slug,
				name: t.split('和')[i]
			});
			await charmsg1.save();
			turnIDArr = [...turnIDArr, charmsg1._id];
		}
		let charmsg2 = new MsgChar({
			data: data,
			t: t,
			f: slug,
			name: slug,
			turnID: turnIDArr
		});
		await charmsg2.save();
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end();
	}
	else if(type === "addMemo")
	{
		let { k, v } = req.query;
		let charmemo = new MemoChar({
			name: slug,
			k: k,
			v: v
		});
		await charmemo.save();
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end();
	}
	else if(type === "quit")
	{
		await UserChar
		.findOneAndUpdate({name: slug}, {online: false});
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end();
	}
	else if(type === "delUser")
	{
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		if(data.pass === req.query.pass){
			await UserChar.findOneAndDelete({name: slug});
			let data = await MemoChar.findOneAndDelete({name: slug});
			while(data != null)
			{
				data = await MemoChar.findOneAndDelete({name: slug});
			}
			data = await MsgChar.findOneAndDelete({name: slug});
			while(data != null){
				data = await MsgChar.findOneAndDelete({name: slug});
			}
			res.end(JSON.stringify({yes: true}));
		}else{
			res.end(JSON.stringify({yes: false}));
		}
	}
	else if(type === "setPass")
	{
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		const { oldPass, newPass } = req.query;
		if(data.pass === oldPass){
			await UserChar.findOneAndUpdate({name: slug}, {pass: newPass});
			res.end(JSON.stringify({yes: true}));
		}else{
			res.end(JSON.stringify({yes: false}));
		}
	}
	else if(type === "delMemo") {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		await MemoChar.findOneAndDelete({_id: req.query.id});
		res.end();
	}
	else if(type === "delMsg") {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		await MsgChar.findOneAndDelete({_id: req.query.id});
		res.end();
	}
	else if(type === "turnMsg") {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		const data = await MsgChar.findOne({_id: req.query.id});
		if(data.turnID.length == 0 || data.f != slug) {
			res.end(JSON.stringify({yes: false}));
		}else{
			let charmemo = new MemoChar({
				name: slug,
				k: `发送给${data.t}后撤回的消息`,
				v: data.data
			});
			await charmemo.save();
			for(i in data.turnID) {
				await MsgChar.findOneAndDelete({_id: data.turnID[i]});
			}
			await MsgChar.findOneAndDelete({_id: req.query.id}); 
			res.end(JSON.stringify({yes: true}));
		}
	}
}