let boton = document.getElementById('resumen');
let respuesta = document.getElementById('respuesta');
let floatingSelect = document.getElementById('floatingSelect');

boton=addEventListener('click',hacerMulti);


function hacerMulti() {
    let cantidad = (document.getElementById('cantidad'));
    let cantidad2 = cantidad.value;
    let multi = cantidad2 * 200;
    let descuentoAplicado;


    let nivelDeProfesional = floatingSelect.value;
    switch (nivelDeProfesional) {
        case 'estudiante':

            descuentoAplicado = multi - multi * 0.8;


            break;

        case 'trainee':

            descuentoAplicado = multi - multi * 0.5;


            break;

        case 'junior':

            descuentoAplicado = multi - multi * 0.15;


            break;
        default:
            descuentoAplicado = multi;
            break;
    }
    respuesta.innerHTML = `Total a pagar: ${descuentoAplicado}$`;
    console.log(multi)
    console.log(nivelDeProfesional)
}

