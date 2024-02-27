var contenedor = document.querySelector(".contenedor")
var llanta = document.querySelector(".llanta")
var llanta2 = document.querySelector(".llanta2")
var luz = document.querySelector(".LuzMover")
var luz = document.querySelector(".luz")
var sprite = document.querySelector(".sprite")


contenedor.addEventListener('click', contendorMover)

function contendorMover(){
    contenedor.classList.add("contendorMover")

    llanta.classList.add("llantaMover")
    llanta2.classList.add("llantaMover2")

    luz.classList.remove('Luzoculto')
    luz.classList.add('LuzMover')

    sprite.classList.remove('spriteOculto')
    sprite.classList.add('spriteMover')

}









