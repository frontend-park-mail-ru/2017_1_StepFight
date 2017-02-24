'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


app.use('/', express.static('pages'));
app.use('/src', express.static('src'));

// Запускаем сервер
app.listen(PORT, function () {
    console.log(`Server listen ${PORT} port`);
});