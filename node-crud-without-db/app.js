const express = require("express");
const contactObj = require("./class/contact");
const contactRouter = require("./router/contactRouter");
const app = express();
const PORT = 1234;
app.use(express.json());
app.use("/contacts",contactRouter);
app.get("*",(req, res) => {	
	res.send('<h1>Please visit correct route</h1>');
})
app.listen(PORT,()=>{
	console.log(`Server running on port ${PORT}`);
})

