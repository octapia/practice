const express = require(`express`);
const mongoose = require(`mongoose`);
const path = require(`path`);
const morgan = require(`morgan`);
const livereload = require(`livereload`);
const connectLivereload = require(`connect-livereload`);
const session = require(`express-session`);
const mongoDbSessionStore = require('connect-mongodb-session')(session);
require(`dotenv/config`);
const app = express();
const routes = require(`./routes`);
const port = process.env.PORT || 1234;

/* MengoDB Session store*/
var store = new mongoDbSessionStore({
    uri: process.env.DB_CONNECTION,
    collection: 'sessions',
    expires: 1000 * 60 * 60 * 7,
});

/* live reload server creation */

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

/* set view engine */
app.set(`views`, `views`);
app.set(`view engine`, `ejs`);

/* middlewares */
app.use([
    morgan(`dev`),
    express.json(),
    express.static(`public`),
    express.urlencoded({ extended: false }),
    connectLivereload(),
    session({ secret: `octapia secret token`, store, resave: false, saveUninitialized: false }),
    routes
]);


/* live reload */

liveReloadServer.server.once(`connection`, () => {
    setTimeout(() => {
        liveReloadServer.refresh(`/`);
    }, 100);
});

/* database connection */
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`Connected to BD`);
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
});
