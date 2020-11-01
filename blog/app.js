const express = require(`express`);
const mongoose = require(`mongoose`);
const path = require(`path`);
const morgan = require(`morgan`);
const routes = require(`./routes`);
const livereload = require(`livereload`);
const connectLivereload = require(`connect-livereload`);
require(`dotenv/config`);
const app = express();
const port = process.env.PORT || 1234;

// Live reload

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

// set view engine
app.set(`views`, `views`);
app.set(`view engine`, `ejs`);

// middlewares
app.use([
    morgan(`dev`),
    express.json(),
    express.static(`public`),
    express.urlencoded({ extended: false }),
    connectLivereload(),
    routes
]);



liveReloadServer.server.once(`connection`, () => {
    setTimeout(() => {
        liveReloadServer.refresh(`/`);
    }, 100);
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`Connected to BD`);
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
});
