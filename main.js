
function tocaSom (selectorAudio) {

    const elemento = document.querySelector(selectorAudio);
    if (elemento === null) {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }
    if (elemento != null) {
        if (elemento.localName ==='audio') {
    elemento.play();
        }

    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];
   
    const idAudio = `#som_${instrumento}`; // tamplte string
    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    console.log(contador);

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code ==='Enter') {
             tecla.listaDeTeclas.add('ativa');
        }
       
    }
    tecla.onkeyup = function () {
        tecla.listaDeTeclas.remove('ativa');
    }
}