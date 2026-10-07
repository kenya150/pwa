const CACHE_NAME = "pwa-cache-v4";

const ARCHIVOS = [
    "./",
    "./index.html",
    "./manifest.json",
    "./serviceworker.js",
    "./css/style.css",
    "./js/app.js",

    "./imagenes/icons/cafee.jpg",
    "./imagenes/icons/gato.jpg",
    "./imagenes/icons/gato1.png",
    "./imagenes/icons/gato2.png",
    "./imagenes/icons/gato3.png",
    "./imagenes/icons/gato4.png",
    "./imagenes/icons/gato5.png",
    "./imagenes/icons/gato6.png",
    "./imagenes/icons/gato7.png",
    "./imagenes/icons/gato8.png",

    "./imagenes/cafe1.jpg",
    "./imagenes/cafe2.jpg",
    "./imagenes/cafe3.jpg",
    "./imagenes/cafe4.jpg",
    "./imagenes/cafe5.jpg",
    "./imagenes/cafe6.jpg",
    "./imagenes/cafe7.jpg",
    "./imagenes/cafe8.jpg"
];


self.addEventListener("install", event => {

    console.log("Service Worker instalado");

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {

                return cache.addAll(ARCHIVOS);

            })

    );

    self.skipWaiting();

});


self.addEventListener("activate", event => {

    console.log("Service Worker activado");

    event.waitUntil(

        caches.keys().then(claves => {

            return Promise.all(

                claves
                    .filter(clave => clave !== CACHE_NAME)
                    .map(clave => caches.delete(clave))

            );

        })

    );

    self.clients.claim();

});


self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(respuesta => {

                if (respuesta) {
                    return respuesta;
                }

                return fetch(event.request);

            })

    );

});