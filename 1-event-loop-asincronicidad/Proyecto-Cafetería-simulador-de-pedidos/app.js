// Reto Campus

// Proyecto Event Loopp y Asincronicidad

/*El Event Loop y la asincronicidad son pilares fundamentales de JavaScript. 
 Comprender cómo funcionan te permitirá construir aplicaciones eficientes y reactivas,
 mejorando la experiencia del usuario. Aunque al principio puede ser un concepto complejo, 
 con práctica y paciencia, dominarás estas herramientas esenciales.
 */
// Objetivo
/*Crear una simulación interactiva que permita simular algunas actividades en una cafetería:

1. Reciba nuevos pedidos de clientes.
2. Procese cada pedido de manera asincrónica con un tiempo de preparación simulado.
3. Actualice el estado de cada pedido ('En Proceso' -> 'Completado') en la interfaz de usuario.
 */

// Problema: Simulador de Pedidos en una Cafetería

/*En una cafetería moderna, es común que los clientes realicen pedidos que requieren preparación mientras se reciben nuevos pedidos. 
Una interfaz debe mostrar los pedidos en progreso, permitir que los baristas trabajen en ellos de manera 
asincrónica y actualizar el estado de los pedidos en tiempo real. 
El desafío consiste en simular este sistema mediante JavaScript, 
utilizando el Event Loop y diferentes mecanismos de asincronía como `setTimeout`, Promises y `async/await`.
 */

// INSTRUCCIONES
/**
 * 1.1. Crea un archivo HTML con un botón para agregar pedidos y un contenedor para mostrar los pedidos en la interfaz.
1.2. Crea un archivo JavaScript donde desarrollarás la lógica principal.
2. Estructura del código - Define funciones que manejen:
2.1. Recepción de un nuevo pedido.
2.2. Actualización visual del estado de los pedidos.
2.3. Simulación de la preparación de pedidos.
3. Comportamiento del sistema cuando el usuario haga clic en 'Agregar Pedido':
3.1. Se generará un pedido con un identificador único.
3.2. Se mostrará en la interfaz con el estado 'En Proceso'.
3.3. Después de un tiempo aleatorio (simulando la preparación), el estado cambiará a 'Completado'.
4. Mecanismos asincrónicos:
4.1. Usa `setTimeout` para simular el tiempo de preparación de los pedidos.
4.2. Implementa **Promises** para manejar la finalización de los pedidos.
4.3. Utiliza `async/await` para actualizar el estado en tiempo real.
 */

const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order); // Agregar el pedido a la lista
    processOrder(order); // Iniciar la preparación del pedido
});
// Función para agregar un pedido a la interfaz
function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.classList.add('en-proceso');
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}
// Función para actualizar el estado del pedido en la interfaz
function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
        listItem.classList.remove('en-proceso'); // Remover clase de "En Proceso"
        if (status === 'Completado') {
            listItem.classList.add('completado'); // Añadir clase de "Completado"
        }

    }
}
// Función para simular la preparación del pedido
async function processOrder(order) {
    // Simular la preparación del pedido usando setTimeout y Promise
    // Simulamos el tiempo de preparación con un valor aleatorio entre 30 segundos y 1 minuto (30000ms a 60000ms)
    const preparationTime = Math.floor(Math.random() * 30000) + 30000; // 30000ms = 30 segundos, 60000ms = 1 minuto
    // Uso de una promesa para manejar la simulación asincrónica
    await new Promise((resolve) => setTimeout(resolve, preparationTime));
    // Cuando el tiempo de preparación se haya completado, se actualiza el estado a "Completado"
    updateOrderStatus(order, 'Completado');
}
 
   

   
    



