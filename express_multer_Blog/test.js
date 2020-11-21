const express = require(`express`);
// const morgan = require('morgan')
const app = express();
const port = process.env.PORT || 2222;

// middlewares
app.use([
    express.json(),
    express.urlencoded({ extended: false }),
    // morgan('dev')
]);

app.get(`/`, (req, res) => {
	res.send(`Home page`);
});

app.post(`/`, (req, res) => {
    console.log(req.body)
	res.send(`Home page post method`);
});

app.listen(port, () => {
	console.log(`Server running on port `+port);
})
