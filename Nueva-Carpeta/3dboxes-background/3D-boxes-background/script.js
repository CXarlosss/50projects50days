
//Creamos las constantes para luego poder declararlas y utilizarlas
const boxesContainer = document.getElementById('boxes') //Recogemos el valor de la caja
const btn = document.getElementById('btn') //Recogemos el valor del boton
//Permitimos dinamicamente que el boton cuando se le haga click realice la funcion adquirida en el css de crecer o desplazarse
btn.addEventListener('click',() => boxesContainer.classList.toggle('big'))


// Función para crear una cuadrícula de cajas (divs)
function createBoxes() {
  // Iterar 4 veces para las filas
  for (let i = 0; i < 4; i++) {
    // Iterar 4 veces para las columnas
    for (let j = 0; j < 4; j++) {
      // Crear un nuevo elemento 'div'
      const box = document.createElement('div');
      
      // Agregar la clase 'box' al div creado
      box.classList.add('box');
      
      // Establecer la posición del fondo para cada caja, calculada con las posiciones de fila (i) y columna (j)
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      
      // Agregar el div creado al contenedor principal llamado 'boxesContainer'
      boxesContainer.appendChild(box);
    }
  }
}

//LLamar a la funcion para crear las cajas
createBoxes();

