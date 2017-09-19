let bombas = [];
llenadotabla();
$("td").click(pusicionBomba);
//pusicionBomba();

function llenadotabla() {

    for (let i = 0; i < 8; i++) {
        $("#tablerito").append(`<tr id='fila${i}'></tr>`);
        for (let j = 0; j < 8; j++) {
            $("#fila" + i).append(`<td id='${i}-${j}'></td>`);//posicion ${i}-${j}
        }
    }
}

function pusicionBomba(e) {
    let bombas = [];
    let numTd = $("td");
    for (let i = 0; i < 10; i++) {
        let numeroTd = Math.floor(Math.random() * numTd.length);
        console.log((numTd[numeroTd]));
        bombas.push(numTd[numeroTd]);

    }
    $(bombas[3]).append(`<i class="fa fa-bomb"></i>`);
console.log(bombas)
//console.log(numTd)
console.log(e)
}

