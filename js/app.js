let posicionesAleatoriasBombas = [];
dibujarTabla();
$("td").click(numero_Bomba)
pusicionBomba();

function dibujarTabla() {

    for (let i = 0; i < 8; i++) {
        $("#tablerito").append(`<tr id='fila${i}'></tr>`);
        for (let j = 0; j < 8; j++) {
            $("#fila" + i).append(`<td id='${i}-${j}'></td>`);//posicion ${i}-${j}
        }
    }
}

function pusicionBomba() {
    Array.prototype.unique = function (a) { //Array Unique: eliminar valores duplicados de un array en Javascript
        return function () { return this.filter(a) }
    }(function (a, b, c) {
        return c.indexOf(a, b + 1) < 0
    });

    let numTd = $("td");
    let condicionBandera = true;
    //console.log(numTd)
    while (condicionBandera){
        posicionesAleatoriasBombas = [];
        for (let i = 0; i < 10; i++) {
            let indiceTD = Math.floor(Math.random() * numTd.length);
            posicionesAleatoriasBombas.push(numTd[indiceTD].id);
        }
        posicionesAleatoriasBombas = posicionesAleatoriasBombas.unique()//El resultado que obtenemos es un array cuyos valores duplicados han sido eliminados. Rápido, limpio y preciso.
        if (posicionesAleatoriasBombas.length==10) {
            condicionBandera = false;
            
        }
        console.log(posicionesAleatoriasBombas)
    }
    //console.log(posicionesAleatoriasBombas)
    
}


function numero_Bomba(e) {

let  guardaIdPosicionActual = (e.target.id);
// console.log(guardaIdPosicionActual)
let comprobarExistencia =$.inArray( guardaIdPosicionActual, posicionesAleatoriasBombas);//Busca un valor especificado dentro de una matriz y devuelve su índice (o -1 si no se encuentra).
if (comprobarExistencia!=-1) {
    $('#'+guardaIdPosicionActual).append('<i class="fa fa-bomb" aria-hidden="true"></i>');
}else{
    insertarNumero();
    console.log("escribirNumero");
}

//Busca un valor especificado dentro de una matriz y devuelve su índice (o -1 si no se encuentra).
// console.log(guardaIdPosicionActual)
    // console.log(e.target)
}

function insertarNumero (){
    let posicionesAlredor = [[-1, -1], [-1, 0], [-1, 1],
                             [0, -1], [0, 0], [0, 1],
                             [1, -1], [1, 0], [1, 1]];

}




