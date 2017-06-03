/**
 * Created by Denis on 21.04.2017.
 */

const CACHE_NAME = 'stepfight_serviceworker_v_1';
const MAX_AGE = 86400000;

const CACHE_URLS = [
    '/',
    '/login',
    '/signup',
    '/profile',
    '/leaderboard',
    '/about',
    '/game',
    '/manifest.json',
    '/src/music/Serious_Sam-_The_Second_Encounter-War.mp3',
    '/src/three-models/animation_all.json',
    '/src/three-models/animation_all.bin',
    '/dist/app.bundle.css',
    '/dist/app.bundle.js',
    '/dist/app.bundle.min.js',
    '/src/fonts/mainFont.ttf',
    '/src/img/soundon.png',
    '/src/img/soundoff.png',
    '/dist/blend/b4w.min.js',
    '/dist/blend/b4w.min.js.map',
    '/dist/blend/b4w.simple.min.js',
    '/dist/blend/b4w.simple.min.js.map',
    '/dist/blend/b4w.whitespace.min.js',
    '/dist/blend/b4w.whitespace.min.js.map',
    '/dist/blend/uranium.js',
    '/dist/blend/uranium.js.mem',
    '/dist/blend/uranium_wasm.js',
    '/dist/blend/uranium_wasm.wasm',
    '/src/three-models/animation_all.json?v=_b4w_ver_17_04_',
];

self.addEventListener('install', (event) => {
    // задержим обработку события
    // если произойдёт ошибка, serviceWorker не установится
    event.waitUntil(
        // находим в глобальном хранилище Cache-объект с нашим именем
        // если такого не существует, то он будет создан
        caches.open(CACHE_NAME).then((cache) => {
            // загружаем в наш cache необходимые файлы
            console.warn('install!!');
            return cache.addAll(CACHE_URLS);
        }).then(self.skipWaiting())
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        // ищем запрашиваемый ресурс в хранилище кэша
        caches.match(event.request).then(function(cachedResponse) {
            let lastModified, fetchRequest;
            // выдаём кэш, если он есть
            if (cachedResponse) {
                lastModified = new Date(cachedResponse.headers.get('last-modified'));
                if (lastModified && (Date.now() - lastModified.getTime()) > MAX_AGE) {

                    fetchRequest = event.request.clone();
                    // создаём новый запрос
                    return fetch(fetchRequest).then(function(response) {
                        // при неудаче всегда можно выдать ресурс из кэша
                        if (!response || response.status !== 200) {
                            return cachedResponse;
                        }
                        // обновляем кэш
                        caches.open(CACHE_NAME).then(function(cache) {
                            cache.put(event.request, response.clone());
                        });
                        // возвращаем свежий ресурс
                        return response;
                    }).catch(function() {
                        return cachedResponse;
                    });
                }
                return cachedResponse;
            }

            // иначе запрашиваем из сети как обычно
            return fetch(event.request);
        })
    );
});