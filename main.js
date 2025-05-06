
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    /* Evita que se recargue la página, he observado que
    al poner un submit sirve tanto para dar al enter como el click  dicen que es más aconsejable submit*/
  
    // Capturamos los valores de los inputs y los guardamos en variables llamando a los id 
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    //const nameContainer= document.getElementById("userGuardado");
   // const inputBoton = document.getElementById("btn");
  
    // Creamos el objeto usuario y le asignamos los valores de los inputs
    const usuario = {
      Nombre: nombre,
      Correo: correo,
      Mensaje: mensaje
    };
  
    // Lo consoleamos para verificar que está bien
    console.log(usuario);
  
    // Guardamos en localStorage con clave "user" y stringify para convertir el objeto a string
    localStorage.setItem('user', JSON.stringify(usuario));
  });
  
// aquí se muestra el mensaje de que se guardó el usuario
function mostrarUsuario() {
    const usuarios = JSON.parse(localStorage.getItem('user'));  
    // Aquí estoy parseando el string que guardé en el localStorage para convertirlo de nuevo a objeto
    if (usuarios) {
                                   // le estoy diciendo que el id de la etiqueta donde quiero mostrarlo es userGuardado
                                  // y que el contenido de esa etiqueta sea un string con los valores del objeto
        document.getElementById('userGuardado').innerHTML = `<p><strong>Nombre:</strong> ${usuarios.Nombre}</p>
            <p><strong>Correo:</strong> ${usuarios.Correo}</p>
            <p><strong>Mensaje: </strong> ${usuarios.Mensaje}</p>`;
    }
};

mostrarUsuario(); // Aquí Llamo a la función para que se ejecute pero no sale sin recargar la web