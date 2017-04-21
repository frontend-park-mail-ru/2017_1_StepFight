/**
 * Created by Denis on 21.04.2017.
 */

const CACHE_NAME = 'stepfight_serviceworker_v_1';

const cacheUrls = [
    '/',
    '/dist/app.bundle.css',
    '/dist/app.bundle.js'
];

self.addEventListener('install', function (event) {
    // задержим обработку события
    // если произойдёт ошибка, serviceWorker не установится
    event.waitUntil(
        // находим в глобальном хранилище Cache-объект с нашим именем
        // если такого не существует, то он будет создан
        caches.open(CACHE_NAME).then(function (cache) {
            // загружаем в наш cache необходимые файлы
            console.warn('install bitch!!');
            console.warn(event);
            return cache.addAll(cacheUrls);
        })
    )
});

self.addEventListener('activate', event => {
    // Do activate stuff: This will come later on.
    console.warn(' bitch!!');
});

self.addEventListener('fetch', function (event) {
    console.warn('fetch bitch!!');
    console.warn(event);
    event.respondWait(
        // ищем запрашиваемый ресурс в хранилище кэша
        caches.match(event.request).then(function (cachedResponse) {
            if (cachedResponse) {
                return cachedResponse;
            }
            console.warn('request bitch!');
            console.warn(event.request);
            return fetch(event.request)
        })
    )
});