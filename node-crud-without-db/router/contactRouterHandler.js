const myObject = require("../class/contact");
exports.read = (req, res) =>{
	res.json(myObject.read());
}
exports.create = (req, res) => {	
	myObject.create(req.body);
	res.json(myObject.read());
}

exports.readById = (req, res) => {
	let {id} = req.params;
	id = parseInt(id);
	const result = myObject.readById(id);
	res.json(result);
}

exports.update = (req, res) => {
	let {id} = req.params;
	mainId = parseInt(id);
	req.body.mainId = mainId;
	const result = myObject.update(req.body);
	res.json(result);
}

exports.deleteAll = (req, res) => {	
	myObject.deleteAll();
	res.json(myObject.read());
}
exports.deleteById = (req, res) => {	
	let result = myObject.deleteById(parseInt(req.params.id));
	res.json(result);
}