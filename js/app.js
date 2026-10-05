let deferredPrompt = null;


// Detectar si la PWA puede instalarse
window.addEventListener("beforeinstallprompt", event => {

    console.log("La PWA puede instalarse");

    event.preventDefault();

    deferredPrompt = event;

    const boton = document.getElementById("btnInstalar");

    if (boton) {
        boton.style.display = "block";
    }

});


// Instalar PWA
function instalarApp() {

    if (!deferredPrompt) {

        alert("La aplicación todavía no está disponible para instalar.");

        return;
    }

    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(resultado => {

        if (resultado.outcome === "accepted") {

            console.log("PWA instalada");

        } else {

            console.log("Instalación cancelada");

        }

        deferredPrompt = null;

    });

}


// Registrar Service Worker
if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./serviceworker.js")
            .then(registro => {

                console.log(
                    "Service Worker registrado:",
                    registro
                );

            })
            .catch(error => {

                console.error(
                    "Error al registrar Service Worker:",
                    error
                );

            });

    });

}