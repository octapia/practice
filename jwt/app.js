const express = require(`express`);
const routes = require(`./routes`);
const morgan = require(`morgan`);
const mongoose = require(`mongoose`);
const dotenv = require(`dotenv`);
dotenv.config();
const app = express();
const port = process.env.PORT || 1111;

// middlewares
app.use([
    morgan(`dev`),
    express.json(),
    routes
]);


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`Connected to MongoDB`);
    app.listen(port, () => {
        console.log(`Server running on port ` + port);
    })
});
