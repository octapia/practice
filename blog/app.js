const express = require(`express`);
const app = express();
const port = process.env.PORT || 1234;

// middlewares
app.use(express.json());

app.get(`/`, (req, res) => {
    res.send(`Home page`);
});

app.listen(port, () => {
    console.log(`Server running on port ` + port);
})
