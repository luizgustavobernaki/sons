// Pom-----------------------------------------------------
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}


const ListaDeteclas = document.querySelectorAll('.tecla');

ListaDeteclas[0] .onclick = tocaSomPom;