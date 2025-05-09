

// Fetch

/*
Se utiliza para obtener recursos de servidores, como archivos JSON, HTML, o imágenes. 
Este método es ampliamente utilizado en el desarrollo web para interactuar con APIs y 
manejar datos externos. */
/*
 fetch es una función integrada en JavaScript que permite realizar solicitudes HTTP de forma asíncrona. 
 Es una alternativa moderna a XMLHttpRequest.
 Devuelve una promesa, lo que significa que podemos manejar las respuestas de manera elegante con .then() y catch() o
 usando async/await.*/

//Ejemplo sencillo:

/* fetch('https://api.example.com/data')

  .then(response => response.json())

  .then(data => console.log(data))

  .catch(error => console.error('Error:', error)); */

  /* fetch("https://jsonplaceholder.typicode.com/users")
     .then(respuesta => respuesta.json())
     .then(data => console.log(data))
     .catch(error => console.error(error)) */

/* fetch("https://jsonplaceholder.typicode.com/users")
     .then(respuesta => console.log("Status", respuesta.status))
     // .then(data => console.log(data)) 
     .catch(error => console.error(error)) */

     /* fetch("https://jsonplaceholder.typicode.com/users")
     .then(respuesta => {

        if(!respuesta.ok){
            throw new Error(`Error HTTP Status: ${respuesta.status}`)
        }
        return respuesta.json()
     })
     .then(data => console.log(data)) 
     .catch(error => console.error("El error es:", error)) */

     
    // APIs 📝
    //https://rickandmortyapi.com/
    //https://dog.ceo/dog-api/

     /* fetch("https://rickandmortyapi.com/api/character")
     .then((respuesta) => {
        if (!respuesta.ok){
            throw new Error(`Error HTTP Status: ${respuesta.status}`);
        }
        return respuesta.json()
     })
     .then((data) => console.log(data.results)) 
     .catch((error) => console.error("El error es:", error)); */

    /* fetch("https://www.swapi.tech/api/people/10") 
        .then((res) => res.json())
        .then((data) => console.log(data.result.properties.name))
        .catch((err) => console.error(err)); */

    // ✍🏻 fetch con async await 

    /* async function mostrarDatos() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!respuesta.ok) {
            throw new Error(`Error HTTP Status: ${respuesta.status}`);
        }

        const data = await respuesta.json()
        console.log(data)

    } catch (error) {
        console.error(`Hay un error ${error}`)
    }
}
mostrarDatos() */

    //✅ SOLICITUD POST

    /* fetch("https://jsonplaceholder.typicode.com/users",{
        method: "POST",
        headers: {
             "Content-Type": "apllication/json"
        },
        body: JSON.stringify({
            nombre: "admin",
            correo:"a@correo.com"
        })
    })
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos)) */

    //--------------------------------------
    // AXIOS
    //--------------------------------------

    // https://axios-http.com/es/
    
    /* axios.get("https://jsonplaceholder.typicode.com/users")
    .then( respuesta => {
        console.log(respuesta.data)
    })
    .catch( err => {
        console.error(`Error: ${err}`)
    }) */

    //✅ Axios GET con async await

    /* async function mostrarUsuarios () {
        try {
            const respuesta = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(respuesta.data)
        } catch (error) {
            console.error(`Error: ${error}`)
        }
    }
mostrarUsuarios () */

// ✅ PETICIÓN AXIOS CON POST

/* axios.post("https://jsonplaceholder.typicode.com/users",{
    nombre: "admin",
    correo: "admin@correo.com"
})
.then( respuesta => {
    console.log(respuesta.data)
} )
.catch (error => {
        console.error(`Error: ${error}`)
    })  */