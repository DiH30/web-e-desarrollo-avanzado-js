// Proyecto Fetch y Axios
/*El metódo fetch es una herramienta esencial para cualquier desarrollador JavaScript que desee trabajar
 con datos externos. Ofrece una forma moderna, limpia y eficiente de realizar solicitudes HTTP. 
 Aunque es importante manejar los errores correctamente y comprender sus limitaciones, 
 fetch es una opción poderosa y flexible para cualquier proyecto web. 
 Axios es una herramienta poderosa y flexible para manejar solicitudes HTTP en JavaScript. 
 Su facilidad de uso y características avanzadas lo hacen ideal para una variedad de aplicaciones, 
 desde consumo de APIs hasta sistemas complejos.*/

// Consumo de APIs con Fetch y Axios
/*En este proyecto, se creará una aplicación web sencilla que permita obtener información de 
personajes de una API de mi elección (como la de Star Wars o Rick & Morty). 
La aplicación deberá mostrar los datos obtenidos en la interfaz de usuario y 
ofrecerá dos botones para realizar las mismas solicitudes, uno utilizando `fetch` 
y otro utilizando `axios`.*/

//Instrucciones para resolver el problema:
/*
1. Crea un proyecto nuevo con un archivo HTML y un archivo JavaScript.
2. Enlaza el archivo JavaScript al HTML y configura un entorno básico con un contenedor para los datos y dos botones.
4. Selecciona una API pública (por ejemplo, la API de Rick & Morty: https://rickandmortyapi.com/). Familiarízate con las rutas que usarás, como `/character` para obtener una lista de personajes (consulta la documentación en: https://rickandmortyapi.com/documentation/#get-all-characters).
5. Escribe una función que utilice `fetch` para obtener los datos de la API y los muestre en el `div` con id `data-container`.
6. Escribe una función que utilice Axios para obtener los datos y manejarlos de manera similar a `fetch`.
7. Crea una función para mostrar los personajes en el contenedor `data-container`.
8. Por ejemplo, podrías mostrar el nombre y la imagen de cada personaje.
9. Toma los archivos con código como base para tu solución, sigue las recomendaciones (pistas) y complementa el código faltante.*/


// Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');
// Botón Fetch
if (fetchBtn) {
fetchBtn.addEventListener('click', () => {
  console.log('Botón Fetch presionado');
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
      if (!response.ok) throw new Error('Error en la solicitud');
      return response.json();
    })
    .then(data => {
       console.log('Personajes obtenidos con Fetch:');
       const characters = data.results;
       characters.forEach(character => {
      let emoji;

        if (character.status === 'Dead') {
          emoji = '💀';
        } else if (character.species !== 'Human') {
          emoji = '👽';
        } else {
          emoji = '👤';
        }

        console.log(`${emoji} ${character.name} - ${character.status} - ${character.species}`);
        
      });

      // Completar: renderizar datos en el contenedor
     renderCharacters(characters);
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.innerHTML = '<p class="text-danger">Hubo un error al obtener los datos.</p>';
    });
});
}

// Implementa las Solicitudes con Axios
// 1. Instala Axios o inclúyelo mediante una CDN:
//   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// 2. Escribe una función que utilice Axios para obtener los datos y manejarlos de manera similar a `fetch`.

const axiosBtn = document.getElementById('axios-btn');

// Botón Axios
if (axiosBtn) {
axiosBtn.addEventListener('click', () => {
   console.log('Botón Axios presionado');
  axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      const characters = response.data.results;
      console.log('Personajes obtenidos con Axios:');
       characters.forEach(character => {
        let emoji;

        if (character.status === 'Dead') {
          emoji = '💀';
        } else if (character.species !== 'Human') {
          emoji = '👽';
        } else {
          emoji = '👤';
        }

        console.log(`${emoji} ${character.name} - ${character.status} - ${character.species}`);
      });
      // Completar: renderizar datos en el contenedor
      // Pista: Observa que Axios ya convierte la respuesta JSON, por lo que no necesitas usar `.json()`.
      renderCharacters(characters); 
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.innerHTML = '<p class="text-danger">Hubo un error al obtener los datos.</p>';
    });
});
}

// Función para renderizar los personajes usando Bootstrap
function renderCharacters(characters) {
  dataContainer.innerHTML = ''; 

  characters.forEach(character => {
    const col = document.createElement('div');
    col.classList.add('col');

    col.innerHTML = `
      <div class="card" style="width: 18rem; margin: auto;">
        <img src="${character.image}" class="card-img-top" alt="${character.name}">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <p class="card-text">Status: ${character.status} <br> Species: ${character.species}</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    `;

    dataContainer.appendChild(col);
  });
}
//Salida en la consola del navegador
/*
Live reload enabled.
Botón Fetch presionado 
Personajes obtenidos con Fetch: 
👤 Rick Sanchez - Alive - Human 
👤 Morty Smith - Alive - Human 
👤 Summer Smith - Alive - Human 
👤 Beth Smith - Alive - Human 
👤 Jerry Smith - Alive - Human 
👽 Abadango Cluster Princess - Alive - Alien 
👤 Abradolf Lincler - unknown - Human 
💀 Adjudicator Rick - Dead - Human 
💀 Agency Director - Dead - Human 
💀 Alan Rails - Dead - Human 
💀 Albert Einstein - Dead - Human 
💀 Alexander - Dead - Human 
👽 Alien Googah - unknown - Alien 
👽 Alien Morty - unknown - Alien 
👽 Alien Rick - unknown - Alien 
💀 Amish Cyborg - Dead - Alien 
👤 Annie - Alive - Human 
👤 Antenna Morty - Alive - Human 
👤 Antenna Rick - unknown - Human 
👤 Ants in my Eyes Johnson - unknown - Human 
 */
/*
Botón Axios presionado 
Personajes obtenidos con Axios: 
👤 Rick Sanchez - Alive - Human 
👤 Morty Smith - Alive - Human 
👤 Summer Smith - Alive - Human 
👤 Beth Smith - Alive - Human 
👤 Jerry Smith - Alive - Human 
👽 Abadango Cluster Princess - Alive - Alien 
👤 Abradolf Lincler - unknown - Human 
💀 Adjudicator Rick - Dead - Human 
💀 Agency Director - Dead - Human 
💀 Alan Rails - Dead - Human 
💀 Albert Einstein - Dead - Human 
💀 Alexander - Dead - Human 
👽 Alien Googah - unknown - Alien 
👽 Alien Morty - unknown - Alien 
👽 Alien Rick - unknown - Alien 
💀 Amish Cyborg - Dead - Alien 
👤 Annie - Alive - Human 
👤 Antenna Morty - Alive - Human 
👤 Antenna Rick - unknown - Human 
👤 Ants in my Eyes Johnson - unknown - Human */