const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const studentsRoutes = require('../routes/students');

app.use(studentsRoutes);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});

