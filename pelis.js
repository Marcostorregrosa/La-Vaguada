
fetch('pelis.json')
    .then(response => response.json())
    .then(data => {
        const contenedor = document.querySelector('.peliculas');
        data.peliculas.forEach(pelis => {
            const div = document.createElement('div');
            div.classList.add('pelicula');
            div.innerHTML = `
        <img src="${pelis.imagen}" alt="${pelis.titulo}">
        <h3>${pelis.titulo} (${pelis.año})</h3>
        <p><strong>Género:</strong> ${pelis.genero.join(', ')}</p>
        <p><strong>Duración:</strong> ${pelis.duracion}</p>
        <p><strong>Director:</strong> ${pelis.director}</p>
        <a href="${pelis.enlace}"">
        <button>Compra entradas</button>
        </a>
        `;
            contenedor.appendChild(div);
        });
    })
    .catch(error => console.error('Error al cargar la cartelera:', error));
