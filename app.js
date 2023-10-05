const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');

document.addEventListener('DOMContentLoaded', () => {
    eventos();
});

const eventos = () => {
    menu.addEventListener('click', AbrirMenu);
}

const AbrirMenu = () => {
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () => {
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if (document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-Cerrar');
    console.log(navegacion.children);

    console.log(btnCerrar);
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
}

const cerrarMenu = (boton, overlay) => {
    boton.addEventListener('click', () => {
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function () {
        overlay.remove();
        navegacion.classList.add('ocultar');
    }
}

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const puntos = document.querySelectorAll('.punto');

function cambiarImagen(n) {
    mostrarImagen(currentIndex += n);
}

function mostrarImagen(n) {
    if (n >= slides.length) {
        currentIndex = 0;
    }
    if (n < 0) {
        currentIndex = slides.length - 1;
    }

    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    
    slides[currentIndex].style.display = 'block';

    
    for (let i = 0; i < puntos.length; i++) {
        puntos[i].style.backgroundColor = 'var(--oscuro)';
    }

    
    puntos[currentIndex].style.backgroundColor = 'var(--verde)';
}


const autoChangeInterval = setInterval(() => {
    cambiarImagen(1);
}, 5000);


mostrarImagen(currentIndex);


puntos.forEach((punto, index) => {
    punto.addEventListener('click', () => {
        cambiarImagen(index);
    });
});

