/**
 * Created by Denis on 21.04.2017.
 */

const CACHE_NAME = 'stepfight_serviceworker_v_1';

const CACHE_URLS = [
    '/',
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

            // выдаём кэш, если он есть
            if (cachedResponse) {
                return cachedResponse;
            }

            // иначе запрашиваем из сети как обычно
            return fetch(event.request);
        })
    );
});