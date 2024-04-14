function generarContraseña(longitud) {
    
    while (longitud < 1 || longitud > 20 || longitud === null || longitud === "" ) {
      alert("La longitud de la contraseña debe ser mayor a cero y menor o igual a 20.");
      longitud = prompt("Ingresa la longitud deseada de la contraseña:");
    }
  
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const caracteresEspeciales = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  
    let contraseña = "";
  
    for (let i = 0; i < longitud; i++) {
      const seleccion = Math.floor(Math.random() * 3);
  
      if (seleccion === 0) {
        contraseña += letras.charAt(Math.floor(Math.random() * letras.length));
      } else if (seleccion === 1) {
        contraseña += numeros.charAt(Math.floor(Math.random() * numeros.length));
      } else {
        contraseña += caracteresEspeciales.charAt(Math.floor(Math.random() * caracteresEspeciales.length));
      }
    }
  
    return contraseña;
}
  
  const longitudContraseña = prompt("Ingresa la longitud deseada de la contraseña:");
  const contraseñaGenerada = generarContraseña(parseInt(longitudContraseña));
  alert("La contraseña generada es: " + contraseñaGenerada);