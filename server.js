'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


app.use('/', express.static('pages'));
app.use('/dist', express.static('dist'));
app.use('/src', express.static('src'));
app.use('/vendor', express.static('vendor'));

// Запускаем сервер
app.listen(PORT, function () {
    console.log(`Server listen ${PORT} port`);
});