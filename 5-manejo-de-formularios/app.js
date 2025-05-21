const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío automático del formulario
  //const name = document.getElementById('name').value;
  //const email = document.getElementById('email').value;

  // "" ///-------> false
  // "pepe" ///------> true

   const archivo = document.getElementById('archivo');

    console.log(archivo);
    console.log(archivo.files[0]);
    console.log(archivo.files[0].name); // Nombre del archivo
   

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        intereses: document.querySelector('input[type="checkbox"]'),
        genero: document.querySelector('input[name="genero"]:checked').value,
        ciudad: document.getElementById('ciudad').value,
        fecha: document.getElementById('fecha').value,
        hora: document.getElementById('hora').value
    };
    
    console.log(data.intereses.checked); // true o false
    console.log(data.intereses.value)
    console.log(data.genero); // "masculino", "femenino" o "otro"
    console.log(data.ciudad);
    console.log(data.fecha);
    console.log(data.hora);

    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+([ '-][A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/

    //destructuring del objeto data
    const { name, email } = data

    if (!name || !regex.test(name.trim())) {
        alert('Por favor, diligencia el campo de nombre.');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    console.log(`Nombre: ${name}, Correo: ${email}`);

    /* fetch('https://api.ejemplo.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log('Datos enviados:', data))
        .catch(error => console.error('Error:', error)); */

    form.reset()
});


 
 