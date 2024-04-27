import UserChar from "../models/userchar.js"

export async function get(req, res){
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	let data = await UserChar.findOne({name:req.query.name});
	if(data === null) {
		let char = new UserChar({
			name: req.query.name,
			pass: req.query.pass,
			online: false
		});
		await char.save();
		res.end(JSON.stringify({yes: true}));
	}
	else{
		res.end(JSON.stringify({yes: false}));
	}
}
