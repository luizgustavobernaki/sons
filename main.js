
function tocaSom (idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//para
for (contador < listaDeTeclas.length) {

const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];
    // tamplte string
    const idAudio = `#som_${instrumento}`;
   // console.log(idAudio);
    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    contador = contador + 1;
    
    //console.log(contador);
}