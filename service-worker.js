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
    '/src/music/music-bg.mp3',
    '/src/three-models/player.json',
    '/dist/app.bundle.css',
    '/dist/app.bundle.js'
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
    console.warn('fetch!!');

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