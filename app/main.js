import { tareas } from '../assets/data/tareas.js';

window.onload = () => {
    let lista = document.querySelector("#lista");

    tareas.forEach((tarea) => {
        let elem = `
            <li class="lista_elemento" id="${tarea.id}">
                <p>${tarea.titulo}</p>
                <button class="btn_cerrar">X</button>
            </li>
        `;
        console.log(elem)
        lista.innerHTML+=elem;
    })
        let botonesCerrar = document.querySelectorAll(".btn_cerrar");
        botonesCerrar.forEach((boton) => {
            boton.addEventListener("click", function() {    
                let elementoPadre = this.parentElement;
                elementoPadre.parentNode.removeChild(elementoPadre);
            });
        });
}

