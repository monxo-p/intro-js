
//Variables 

const slider = document.querySelector('#slider');
const btnSlider = document.querySelector('#btnSlider');
const sliderContent = document.querySelector('#sliderContent');


//Funciones 

function cambioSlider(event){
    if(event.target.textContent == 1){
        slider.children[0].src = './slide01.jpg';
        sliderContent.children[0].className = 'bi bi-vimeo fs-1';
        sliderContent.children[1].textContent = 'Imagen 1';
        sliderContent.children[2].textContent = 'Parrafo 1 desde javascript';

    }else if(event.target.textContent == 2){
        slider.children[0].src = './slide02.jpg';
        sliderContent.children[0].className = 'bi bi-toggles fs-1';
        sliderContent.children[1].textContent = 'Imagen 2';
        sliderContent.children[2].textContent = 'Parrafo 2 desde javascript';

    }else if(event.target.textContent == 3){
        slider.children[0].src = './slide03.jpg';
        sliderContent.children[0].className = 'bi bi-ticket-detailed fs-1';
        sliderContent.children[1].textContent = 'Imagen 3';
        sliderContent.children[2].textContent = 'Parrafo 3 desde javascript';

    }else if(event.target.textContent == 4){
        slider.children[0].src = './slide04.jpg';
        sliderContent.children[0].className = 'bi bi-telephone-x fs-1';
        sliderContent.children[1].textContent = 'Imagen 4';
        sliderContent.children[2].textContent = 'Parrafo 4 desde javascript';

    }
}


//Llamar a funciones
btnSlider.addEventListener('click',cambioSlider);