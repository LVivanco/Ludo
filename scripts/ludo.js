const espacios = document.querySelectorAll('.casilla');
//botones
const dado = document.getElementById('dado');
const start = document.getElementById('start');
const reiniciar = document.getElementById('reiniciar');
//texto
const text = document.getElementById('valor');
const turno_text = document.getElementById('turno');
const winner = document.getElementById('winner');

var valor = 0;
//var valor_i = 0;
var position = positionInit;
var walk = routes;
/*turno: 0 = rojo; 1 = yellow ; 2 = green; 3 = azul*/
var turno = 0;
var players = ["red", "yellow", "green", "blue"];
var fichas = [{
        color: 'red',
        image: '<img id="fichaRed" src="./images/fichas/red.svg" alt="">',
        win: false,
        current: 0,
        currentX: 0,
        currentY: 0
    },
    {
        color: 'yellow',
        image: '<img src="./images/fichas/yellow.svg" alt="">',
        win: false,
        current: 0,
        currentX: 0,
        currentY: 0
    },
    {
        color: 'green',
        image: '<img src="./images/fichas/green.svg" alt="">',
        win: false,
        current: 0,
        currentX: 0,
        currentY: 0
    },
    {
        color: 'blue',
        image: '<img src="./images/fichas/blue.svg" alt="">',
        win: false,
        current: 0,
        currentX: 0,
        currentY: 0
    }
];

start.addEventListener('click', (ev) => {
    dado.style.visibility = 'visible';
    turno_text.innerHTML = players[turno];
    start.style.visibility = 'hidden';
});

reiniciar.addEventListener('click', (ev) => {
    location.reload();
});


function tiroDado() {
    let num = Math.floor(Math.random() * (7 - 1) + 1);
    text.innerHTML = num;
    valor = num;
}

function step(initial, next, turn) {
    let walk;

    walk = initial + parseInt(next);
    if (walk <= 56) {
        espacios.forEach((e) => {
            switch (turn) {
                case 0:
                    //Red
                    if (e.dataset.routeRed == walk) {
                        //console.log(e);
                        walk = e.dataset.routeRed;
                        e.innerHTML = fichas[0].image;
                        let image = document.getElementById('fichaRed');
                        image.dataset.position = walk;
                        if (walk == 56) {
                            fichas[0].win = true;
                        }
                    }
                    break;
                case 1:
                    //yellow
                    if (e.dataset.routeYellow == walk) {
                        //console.log(e);
                        walk = e.dataset.routeYellow;
                        e.innerHTML = fichas[1].image;
                        let image = document.getElementById('fichaRed');
                        image.dataset.position = walk;
                        if (walk == 56) {
                            fichas[1].win = true;
                        }
                    }
                    break;
                case 2:
                    //green
                    if (e.dataset.routeGreen == walk) {
                        //console.log(e);
                        walk = e.dataset.routeGreen;
                        e.innerHTML = fichas[2].image;
                        let image = document.getElementById('fichaRed');
                        image.dataset.position = walk;
                        if (walk == 56) {
                            fichas[2].win = true;
                        }
                    }
                    break;
                case 3:
                    //blue
                    if (e.dataset.routeBlue == walk) {
                        //console.log(e);
                        walk = e.dataset.routeBlue;
                        e.innerHTML = fichas[3].image;
                        let image = document.getElementById('fichaRed');
                        image.dataset.position = walk;
                        if (walk == 56) {
                            fichas[3].win = true;
                        }
                    }
                    break;
                default:
                    console.log("Error function Step");
                    break;
            }
        });

        espacios.forEach((e) => {
            switch (turn) {
                case 0:
                    if (e.dataset.routeRed == initial) {
                        //console.log(e);
                        walk = e.dataset.routeRed;
                        e.innerHTML = "";
                    }
                    break;
                case 1:
                    if (e.dataset.routeYellow == initial) {
                        //console.log(e);
                        walk = e.dataset.routeRed;
                        e.innerHTML = "";
                    }
                    break;
                case 2:
                    if (e.dataset.routeGreen == initial) {
                        //console.log(e);
                        walk = e.dataset.routeRed;
                        e.innerHTML = "";
                    }
                    break;
                case 3:
                    if (e.dataset.routeBlue == initial) {
                        //console.log(e);
                        walk = e.dataset.routeRed;
                        e.innerHTML = "";
                    }
                    break;
                default:
                    break;
            }
        });

    } else {
        //console.log(initial);
        //que ignore el valor del dado hasta que le de 56
        valor = 0;
    }

}

function ready() {
    //console.log("salio 6");
}

function play() {

}

dado.addEventListener('click', (ev) => {
    tiroDado();
    if (valor == 6) {
        ready();
    }


    play();
    step(fichas[turno].current, valor, turno);


    fichas.forEach((e) => {
        if (e.win) {
            winner.innerHTML = 'WIN!: ' + e.color;
            dado.style.visibility = 'hidden';
            reiniciar.style.visibility = 'visible';
        }
    });

    //console.log(fichas[turno].color + ": " + fichas[turno].current);
    fichas[turno].current = fichas[turno].current + valor;
    //console.log(fichas[turno].color + ": " + fichas[turno].current);

    turno = (turno + 1) % 4;
    turno_text.innerHTML = fichas[turno].color;
});