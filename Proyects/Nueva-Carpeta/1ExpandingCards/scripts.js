
//Creamos el archivo para seleccionar los paneles
const panels = document.querySelectorAll('.panel')
//Vamos a crear la funcion click cuando se haga click en la foto, Se removeran las clases que tengan y se le añade la clase active
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
//Ahora para terminar se crea la funciionpara remover las clases que existan en las fotos

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}