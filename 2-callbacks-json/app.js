//callbacks se ejecutan despues de la función principal
// ✅ Tema: Callbacks

//Ejemplo básico de callback
/* function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}!`);
    callback();
}

function despedirse() {
    console.log('Adios!');
}

saludar('María', despedirse);*/

// Salida:

/*Hola, María!

Adios!*/

//Función que opera dos números (sin Callback)

/* function calcular (num1, num2, tipoCalculo){

    if(tipoCalculo === "suma"){
        return num1 + num2
    }else if(tipoCalculo === "multiplicacion"){
        return num1 * num2 
    }
}
console.log( calcular(3,2,"multiplicacion"))*/

//Función que opera dos números (con callback)

/* function sumar (a,b){
    return a+b

}

function multip (a,b){
    return a*b

}
function calcular (num1, num2, callback){
    return callback(num1,num2)
}
console.log(calcular(2,3,multip))*/

/* function sumar (a,b){
    return a+b

}

function multip (a,b){
    return a*b

}
function mensaje (a,b){
    console.log(`Tus numeros son: ${a} y ${b}`)

}
function calcular (num1, num2, callback){
    return callback(num1,num2)
}
console.log(calcular(2,3, (a,b) => {
    return "result:" + (a*b)
} ) )*/

// Salida
/*
result:6
 */

//Función que opera dos números (con callback)

/* function sumar (a,b){
    return a+b

}

function multip (a,b){
    return a*b

}
function mensaje (a,b){
    console.log(`Tus numeros son: ${a} y ${b}`)

}
function calcular (num1, num2, callback){
    if(typeof callback === "function"){
        return callback(num1,num2)
    }
    
}
console.log(calcular(2,3, (a,b) => {
    return "result:" + (a*b)
} ) )*/

//Ejemplo de Callback Hell

    /* setTimeout(() => {

        console.log('Primera tarea completada');
    
        setTimeout(() => {
    
            console.log('Segunda tarea completada');
    
            setTimeout(() => {
    
                console.log('Tercera tarea completada');
    
            }, 1000);
    
        }, 1000);
    
    }, 1000);*/

//Salida
/*
Primera tarea completada
Segunda tarea completada
Tercera tarea completada
 */

//Solución con promise

/* function tarea(ms, mensaje){
    return new Promise( (resolve, reject) => { //indica que la promesa se completo
        setTimeout( () => {
            console.log(mensaje)
            resolve()
        }, ms)

    } )
}
tarea(1000, "Primera tarea completada")
.then( () => tarea(1000, "Segunda tarea completada")) // La función se ejecuta despues de la primera lectura
.then( () => tarea(1000, "Tercera tarea completada"))*/

// Salida
/*Primera tarea completada
Segunda tarea completada
Tercera tarea completada
 */

//✅ Tema: Json y manejo de datos

// Convertir un objeto JSON A JAVASCRIPT

/*const jsonData = '{"nombre": "Carlos", "edad": 25, "esEstudiante": true}';

const objeto = JSON.parse(jsonData);

console.log(objeto.nombre); // "Carlos"

console.log(objeto.edad);   // 25

console.log(typeof jsonData)*/

//Convertir un objeto de JavaScript a JSON

/* const estudiante = {

    nombre: "Ana", 
    edad: 22,
    esEstudiante: true, 
    materias: ["Historia", "Inglés", "Literatura"]
  };
  
  const jsonString = JSON.stringify(estudiante);
  
  console.log( typeof jsonString); */

// Ejemplo de Jesús

  /*const formData = {
    nombre: freshForm.nombre.value,
    apellido_paterno: freshForm.apellido_paterno.value,
    apellido_materno: freshForm.apellido_materno?.value || '',
    edad: freshForm.edad.value,
    correo: freshForm.correo.value,
    contraseña: fresForm.contraseña.value,
    rol: freshForm.rol.value

  };
   const response = await fetch('/Project-Manager/api/usuarios.php',{
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify(formData)
   }); */

//JSON parsea la información

// Guardar datos en localStorage

const usuario = {

    nombre: "Lucía",
    edad: 30,
    color: "blanco"
  
  };

  //Registra los datos en localstorage
  localStorage.setItem('usuario', JSON.stringify(usuario));
  
  // Recuperar datos de localStorage aprender como se guarda y se recupera la información, información de usuario, para el tema de contrasela localStorage no es seguro
  
  const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
  
  console.log(usuarioGuardado.nombre); // "Lucía"