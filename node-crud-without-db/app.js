const express = require("express")
const contactObj = require('./class/contact')

const app = express();
const PORT = 1234

app.get('/contacts',(req, res) => {
	res.json(contactObj.get())
})
app.get('*',(req, res) => {
	res.json(contactObj.get())
	// res.send('<h1>Please visit correct route</h1>');
})

app.listen(PORT,()=>{
	console.log(`Server running on port ${PORT}`);
})

