import { tareas } from '../assets/data/tareas.js';

window.onload = () => {
    const body = document.querySelector("body");
    const lista = document.createElement("ul");
    lista.id = "lista";
    body.appendChild(lista);

    const nuevaTareaInput = document.createElement("input");
    nuevaTareaInput.type = "text";
    nuevaTareaInput.id = "nuevaTareaInput";
    nuevaTareaInput.placeholder = "Escribe una nueva tarea...";
    body.appendChild(nuevaTareaInput);

    const agregarTareaBtn = document.createElement("button");
    agregarTareaBtn.textContent = "Agregar Tarea";
    agregarTareaBtn.id = "agregarTareaBtn";
    body.appendChild(agregarTareaBtn);

    const listaTareas = document.getElementById("lista");

    function agregarTarea() {
        const nuevaTareaTexto = nuevaTareaInput.value.trim();

        if (nuevaTareaTexto !== "") {
            const nuevaTarea = {
                id: Date.now(), 
                titulo: nuevaTareaTexto
            };

           
            const elem = document.createElement("li");
            elem.className = "lista_elemento";
            elem.id = nuevaTarea.id;
            elem.innerHTML = `
                <p>${nuevaTarea.titulo}</p>
                <button class="btn_cerrar">X</button>
            `;
            listaTareas.appendChild(elem);

 
            nuevaTareaInput.value = "";
        } else {
            alert("Por favor, introduce una tarea válida.");
        }
    }

    agregarTareaBtn.addEventListener("click", agregarTarea);


    tareas.forEach((tarea) => {
        const elem = document.createElement("li");
        elem.className = "lista_elemento";
        elem.id = tarea.id;
        elem.innerHTML = `
            <p>${tarea.titulo}</p>
            <button class="btn_cerrar">X</button>
        `;
        listaTareas.appendChild(elem);
    });
}

