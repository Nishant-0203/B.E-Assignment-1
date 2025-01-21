const express = require('express');
const fs = require('fs');
const path = require('path');
const requestLogger = require('./middlewares/requestLogger');

const app = express();


app.use(requestLogger);


app.get('/', (req, res) => {
    res.send('Hello i am jatin sharma and this is the Express.js logging application!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
