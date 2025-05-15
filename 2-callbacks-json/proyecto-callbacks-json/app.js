//Proyecto Callbacks and JSON

/*
 JSON es un formato ampliamente utilizado en JavaScript para almacenar y transferir datos. 
 Su sintaxis sencilla y su integración directa con JavaScript lo hacen indispensable para el desarrollo web 
 moderno. Los callbacks son una herramienta poderosa para manejar la asincronía en JavaScript. 
 Aunque pueden llevar a problemas de legibilidad en casos complejos, 
 entenderlos es esencial para trabajar con APIs, eventos y otras operaciones asincrónicas.*/

//Gestión de una Biblioteca de Libros

//Instrucciones
/*
1. Crear un objeto JSON: Empezarás con un objeto JSON que contenga una colección de libros. 
Cada libro tendrá las propiedades `titulo`, `autor`, `genero` y `disponible`.
2. Simular una función para leer datos: Usarás un callback para simular la lectura de un archivo JSON. 
Esta función tomará el objeto JSON y lo devolverá con un pequeño retraso 
(simulando una operación de lectura asincrónica).
3. Crear funciones para interactuar con el inventario: 
Necesitarás funciones que permitan agregar libros, actualizar su disponibilidad y consultar el inventario.
4.(Opcional) Simular escritura en JSON: Similar a la lectura, simula la escritura de datos en un archivo JSON usando un callback. 
Esto se hará cuando se agregue un nuevo libro o se actualice la disponibilidad de un libro */


// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        callback(biblioteca);
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}
/* 4.(Opcional) Simular escritura en JSON: Similar a la lectura, simula la escritura de datos en un archivo JSON usando un callback. 
Esto se hará cuando se agregue un nuevo libro o se actualice la disponibilidad de un libro */
// Función para simular la escritura de datos en un archivo JSON
function escribirDatos(nuevosDatos, callback) {
    setTimeout(() => {
        // Simulación de un proceso en el que se recorren los libros uno por uno
        for (let i = 0; i < nuevosDatos.libros.length; i++) {
            console.log(`Procesando libro: ${nuevosDatos.libros[i].titulo}`);
        }
        // actualización del objeto biblioteca
        biblioteca = nuevosDatos;
        console.log("Datos actualizados en el archivo JSON.");
        callback();  
    }, 1000);
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible, callback) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
    setTimeout(() => {
        biblioteca.libros.push(nuevoLibro);
        console.log(`Libro "${titulo}" agregado exitosamente.`);
        // Simulación de la escritura en el archivo JSON con la función escribirDatos
        escribirDatos(biblioteca, callback);  // Después de agregar, se "escribe" el JSON

    }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado, callback) {
    // Simula un retraso antes de actualizar la disponibilidad
    setTimeout(() => {
        const libro = biblioteca.libros.find(libro => libro.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            console.log(`Disponibilidad de "${titulo}" actualizada a ${nuevoEstado ? 'Disponible' : 'Prestado'}.`);
        } else {
            console.log(`Libro con título "${titulo}" no encontrado.`);
        } 
        
        escribirDatos(biblioteca, callback);  
    }, 2000);
}

// Ejemplo de cómo ejecutar la aplicación

mostrarLibros();  // Muestra el inventario inicial
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true, () => {
    actualizarDisponibilidad("1984", false, () => {
    });
});

//Salida

/* Inventario de libros:
1. Cien años de soledad - Gabriel García Márquez (Disponible)
2. 1984 - George Orwell (Disponible)
Libro "El principito" agregado exitosamente.
Procesando libro: Cien años de soledad
Procesando libro: 1984
Procesando libro: El principito
Datos actualizados en el archivo JSON.
Disponibilidad de "1984" actualizada a Prestado.
Procesando libro: Cien años de soledad
Procesando libro: 1984
Procesando libro: El principito
Datos actualizados en el archivo JSON.
 */

