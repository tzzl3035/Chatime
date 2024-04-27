import UserChar from "../models/userchar.js"

export async function get(req, res){
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	let data = await UserChar.findOne({name:req.query.name});
	if(data === null || data.pass !== req.query.pass) {
		res.end(JSON.stringify({yes: false}));
	}
	else{
		await UserChar
		.findOneAndUpdate({name:req.query.name}, {online: true});
		res.end(JSON.stringify({yes: true}));
	}
}
