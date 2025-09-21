const numeroAleatorio1 = document.getElementById('numeroAleatorio1')
const numeroAleatorio2 = document.getElementById('numeroAleatorio2')

const numero1 = Math.floor(Math.random() * 5);

const numero2 = Math.floor(Math.random() * 5);

numeroAleatorio1.textContent = numero1;
numeroAleatorio2.textContent = numero2;