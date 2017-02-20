/**
 * Created by Denis on 12.02.2017.
 */
'use strict';

const http = require('http');
const fileSystem = require('fs');

function router(url) {
    switch (url) {
        case '/':
            return {
                'body': fileSystem.readFileSync('./pages/index.html', 'utf8'),
                'content-type': 'text/html'
            };
        case '/game.html':
            return {
                'body': fileSystem.readFileSync('./pages/game.html', 'utf8'),
                'content-type': 'text/html'
            };
        default:
            let obj = null;
            try {
                obj = {
                    'body': fileSystem.readFileSync('.' + url, 'utf8'),
                    'content-type': 'text/plane'
                };
                if (url.match(/.css$/ig)) {
                    obj['content-type'] = 'text/css'
                } else if (url.match(/.js/ig)) {
                    obj['content-type'] = 'application/javascript'
                }
            } catch (err) {

            }
            return obj;
    }
}

const worker = function (request, response) {
    const url = request.url;
    console.log(request.method + ' ' + url);

    let object = router(url);

    if (object != null) {
        response.setHeader('content-type', object['content-type']);
        response.write(object['body']);
    }
    response.end();
};

const server = http.createServer(worker);
const port = process.env.PORT || 3000;

console.log('Сервер запущен! Порт ' + port);
server.listen(port);