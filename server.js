'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use('/', express.static('page'));
app.use('/manifest.json', express.static('manifest.json'));
app.use('/login', express.static('page/index.html'));
app.use('/signup', express.static('page/index.html'));
app.use('/leaderboard', express.static('page/index.html'));
app.use('/about', express.static('page/index.html'));
app.use('/profile', express.static('page/index.html'));
app.use('/service-worker.js', express.static('service-worker.js'));

app.use('/game', express.static('page/index.html'));

app.use('/dist', express.static('dist'));
app.use('/src', express.static('src'));
app.use('/vendor', express.static('vendor'));

// Запускаем сервер
app.listen(PORT, function () {
    console.log(`Server listen ${PORT} port`);
});