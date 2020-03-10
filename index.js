/*window esto cargara*/
/*El evento onload ocurre cuando un objeto ha sido cargado. */
window.onload = function () {
    /*Arreglo que contiene  */
    var images = [
        './imagenes/witcher1.jpg',
        './imagenes/witcher2.jpg',
        './imagenes/witcher3.jpg',
        './imagenes/witcher4.jpg',
        './imagenes/witcher5.jpg',
        './imagenes/witcher6.jpg',
        './imagenes/witcher7.jpg'
    ];

    var index = 0;
    /*Devuelve lo que contiene la etiqueta botton del html en los dos casos: bottonPrevious, bottonNext*/
    var bottonPrevious = document.querySelector('.previous');
    var bottonNext = document.querySelector('.next');
    
    /*Devuelve lo que contienen los botones barras */
    bars = [
        document.querySelector('.b1'), 
        document.querySelector('.b2'),
        document.querySelector('.b3'),
        document.querySelector('.b4'),
        document.querySelector('.b5'),
        document.querySelector('.b6'),
        document.querySelector('.b7')
    ];

    /*Devuelve la etiqueta imagen seleccionada*/
    var image = document.querySelector('.image');
    console.log(image)
    image.style.backgroundImage = 'url('+ images[index] +')';

    /*Funcion que cambia la foto en la siguiente posicion e impide que aumenta al acabar de mostrar todas las fotos*/
    function nextPhotos() {
        if(index >= images.length-1) {
            index = images.length-1;
        } else {
            index++;
        }
    }

    /*Funcion que cambia la foto a la anterior posicion e impide que disminuya al acabar de mostrar todas las fotos*/
    function previousPhoto() {
        if(index <= 0) {
            index = 0;
        } else {
            index--;
        }   
    }

    /*Funcion que actualiza la etiqueta imagen con la foto nueva, dependiendo de posicionActual*/
    bottonPrevious.addEventListener("click",()=>{
        previousPhoto();
        image.style.backgroundImage = 'url('+ images[index] +')';
    });
    
    /*Funcion que actualiza la etiqueta imagen con la foto nueva, dependiendo de posicionActual*/
    bottonNext.addEventListener("click", ()=>{
        nextPhotos();
        image.style.backgroundImage = 'url('+ images[index] +')';
    });

    bars.forEach((bar,index) => {
        bar.addEventListener("click", ()=>{
            image.style.backgroundImage = 'url('+ images[index] +')';
        });
    });
    
}  