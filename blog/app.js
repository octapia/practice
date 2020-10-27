const express = require(`express`);
const morgan = require(`morgan`);
const routes = require(`./routes`);
const app = express();
const port = process.env.PORT || 1234;

// set view engine
app.set('views', 'views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine({ beautify: true }));

// middlewares
app.use([
    morgan(`dev`),
    routes, express.json(),
    express.static(`public`),
    express.urlencoded({ extended: true })
]);


app.get(`/`, (req, res) => {
    res.render(`layout/master`, { title: `Home` });
});


app.listen(port, () => {
    console.log(`Server running on port ` + port);
})
