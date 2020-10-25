const express = require(`express`);
const postRoute = require(`./routes/postRoute`);
const mongoose = require(`mongoose`);
require(`dotenv/config`)
const app = express();
const port = process.env.PORT || 1234;

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`connected to BD`);
});
app.use(express.json());

app.use(`/posts`, postRoute);
app.get(`/`, (req, res) => {
    res.send(`please visit correct API path`);
});



app.listen(port, () => console.log(`Server running on port ${port}`));
