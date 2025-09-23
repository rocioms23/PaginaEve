

document.addEventListener('DOMContentLoaded', (event) => {

    // Ahora puedes acceder a los elementos del DOM, como el botón
    const boton = document.getElementById('boton_reiniciar');
    if (boton) {
        // También puedes poner aquí el listener del botón
        boton.addEventListener('click', () => {
            actualizarNumeros();
        });
    }
});

function actualizarNumeros() {
    const numeroAleatorio1 = document.getElementById('numeroAleatorio1');
    const numeroAleatorio2 = document.getElementById('numeroAleatorio2');

    const numero1 = Math.floor(Math.random() * 5);

    numero2 = Math.floor(Math.random() * 5);

    while (numero1 == numero2) {
        numero2 = Math.floor(Math.random() * 5);
    }
    ganador=0
    if (numero1 > numero2) {
        ganador = 1
    }
    else {
        ganador = 2
    }
    numeroAleatorio1.textContent = numero1;
    numeroAleatorio2.textContent = numero2;

    imagenJugador1 = document.getElementById('jugador1')
    imagenJugador2 = document.getElementById('jugador2')

    if (ganador == 1) {
        imagenJugador1.src = "./static/assets/Victoria_2.gif";
        imagenJugador2.src = "./static/assets/derrota.gif";
    }

    if(ganador == 2) {
        imagenJugador1.src = "./static/assets/derrota_2.gif";
        imagenJugador2.src = "./static/assets/Victoria.gif";
    }
}
