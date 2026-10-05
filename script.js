// Función global de reproducción
function reproducirMusica() {
    const music = document.getElementById('bgMusic');
    if (music && music.paused) {
        music.volume = 0.8;
        const playPromise = music.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log("Música reproduciéndose correctamente.");
                })
                .catch(error => {
                    console.log("Esperando interacción del usuario:", error);
                });
        }
    }
}

// Activar audio al dar el primer clic o toque en cualquier parte
document.addEventListener('DOMContentLoaded', () => {
    const activarConInteraccion = () => {
        reproducirMusica();
        document.removeEventListener('click', activarConInteraccion);
        document.removeEventListener('touchstart', activarConInteraccion);
    };

    document.addEventListener('click', activarConInteraccion, { once: true });
    document.addEventListener('touchstart', activarConInteraccion, { once: true });
});