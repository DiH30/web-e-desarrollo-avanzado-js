// Proyecto Promesas y Async/Await

/*promesas y async/await, son fundamentales para cualquier programador JavaScript moderno. El dominio de estas herramientas facilitará la creación de aplicaciones web más complejas y
eficientes, al mismo tiempo que mejorará la legibilidad y la mantenibilidad del código.*/
//Objetivo
/*Construir un sistema de reservas utilizando **promesas** y **`async/await`**, 
con manejo de errores adecuado. */
//Problema: Sistema de Reservas para un Restaurante
/**
 *  1. Verificar si hay mesas disponibles para el día y la hora solicitados.
    2. Si las mesas están disponibles, confirmar la reserva.
    3. Si todo está bien, enviar un correo de confirmación.
    4. Manejar adecuadamente los errores (si no hay mesas disponibles o si hay un fallo en el envío del correo).*/
//Instrucciones
/*1. Verificar Disponibilidad de Mesas: Completa la función `verificarDisponibilidad(mesasSolicitadas)` 
para comprobar si el número de mesas solicitadas es menor o igual a las mesas disponibles en el restaurante. Si es así, resuelve la promesa; si no, recházala con un mensaje de error.
2. Simular Envío de Confirmación por Correo: Completa la función `enviarConfirmacionReserva(nombreCliente)` para simular el envío de un correo electrónico de confirmación. Utiliza `Math.random()` 
para decidir si el correo se envía exitosamente o si ocurre un error.
3. Control de Flujo en la Función Principal: En la función `hacerReserva(nombreCliente, mesasSolicitadas)`, usa `await` para esperar a que se resuelva la promesa de disponibilidad de mesas. Si está disponible, 
procede a llamar a la función de envío de confirmación. Si ocurre un error en cualquiera de las promesas, maneja el error usando un bloque `catch()`.
4. Probar la solución: Llama a `hacerReserva()` con diferentes valores (ej. un número de mesas menor o igual a las disponibles y otro mayor) para verificar que el sistema maneja correctamente las reservas y los errores.
5. Puedes adecuar el código proporcionado como mejor lo consideres o puedes no utilizar esta pequeña ayuda.*/

// Simulando una base de datos de mesas
let mesasDisponibles = 5;  // Número de mesas disponibles para reservar, Uso de let para poder modificar su valor

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve("Mesas disponibles.");
      } else {
        reject("No hay suficientes mesas disponibles.");
      }
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {  
        resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
      } else {
        reject("Error al enviar el correo de confirmación.");
      }

    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log(`\nReserva solicitada por ${nombreCliente} para ${mesasSolicitadas} mesa(s).`);
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  // Llama a la función de verificación
    console.log(disponibilidad);

    console.log("Enviando confirmación de reserva...");
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);
    // Actualizar número de mesas disponibles si todo salió bien
    mesasDisponibles -= mesasSolicitadas;
    console.log(`Reserva confirmada. Mesas restantes: ${mesasDisponibles}`);
  } catch (error) {
    console.log("Error:", error);  // Maneja los errores en la promesa
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 3);  // Intenta hacer una reserva para 3 personas
setTimeout(() => hacerReserva("Diana Amillano", 2), 4000);  
setTimeout(() => hacerReserva("Uziel Rámirez", 1), 9000); // Caso con error por falta de mesas

//Salida
/* Reserva solicitada por Juan Pérez para 3 mesa(s).
Verificando disponibilidad de mesas...
Mesas disponibles.
Enviando confirmación de reserva...
Correo de confirmación enviado a Juan Pérez.
Reserva confirmada. Mesas restantes: 2

Reserva solicitada por Diana Amillano para 2 mesa(s).
Verificando disponibilidad de mesas...
Mesas disponibles.
Enviando confirmación de reserva...
Correo de confirmación enviado a Diana Amillano.
Reserva confirmada. Mesas restantes: 0

Reserva solicitada por Uziel Rámirez para 1 mesa(s).
Verificando disponibilidad de mesas...
Error: No hay suficientes mesas disponibles.*/






