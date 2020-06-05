const tablero = document.getElementById('ludo');
var cordsX = 0;
var cordsY = 0;
var routes = {
    red: [201, 186, 171, 156, 141, 125, 124, 123, 122, 121, 120, 105, 90, 91, 92, 93, 94, 95, 81, 66, 51, 36, 21, 6, 7, 8, 23, 38, 53, 68, 83, 99, 100, 101, 102, 103, 104, 119, 134, 133, 132, 131, 130, 129, 143, 158, 173, 188, 203, 218, 217, 202, 187, 172, 157, 142, 127],
    green: [23, 38, 53, 68, 83, 99, 100, 101, 102, 103, 104, 119, 134, 133, 132, 131, 130, 129, 143, 158, 173, 188, 203, 218, 217, 216, 201, 186, 171, 156, 141, 125, 124, 123, 122, 121, 120, 105, 90, 91, 92, 93, 94, 95, 81, 66, 51, 36, 21, 6, 7, 22, 37, 52, 67, 82, 97],
    blue: [133, 132, 131, 130, 129, 143, 158, 173, 188, 203, 218, 217, 216, 201, 186, 171, 156, 141, 125, 124, 123, 122, 121, 120, 105, 90, 91, 92, 93, 94, 95, 81, 66, 51, 36, 21, 6, 7, 8, 23, 38, 53, 68, 83, 99, 100, 101, 102, 103, 104, 119, 118, 117, 116, 115, 114, 113],
    yellow: [91, 92, 93, 94, 95, 81, 66, 51, 36, 21, 6, 7, 8, 23, 38, 53, 68, 83, 99, 100, 101, 102, 103, 104, 119, 134, 133, 132, 131, 130, 129, 143, 158, 173, 188, 203, 218, 217, 216, 201, 186, 171, 156, 141, 125, 124, 123, 122, 121, 120, 105, 106, 107, 108, 109, 110, 111]
}
var positionInit = {
    red: [151,154,196,199],
    yellow:[16,19,61,64],
    blue:[25,28,70,73],
    green:[160,163,205,208]
}

function mapa(elemento) {
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            var cuadro = document.createElement('div');
            //cuadro.style.backgroundColor = 'blue';
            cuadro.style.borderStyle = 'solid';
            cuadro.classList.add('casilla');
            //cuadro.innerHTML = i + ',' + j;
            cuadro.dataset.coordsX = i;
            cuadro.dataset.coordsY = j;

            cordsX = i;
            cordsY = j;

            //Tablero

            if ((cordsX <= 5 && cordsY <= 5) || (cordsY <= 5 && cordsY > 0 && cordsX == 7) || (cordsX == 6 && cordsY == 1)) {
                cuadro.style.backgroundColor = 'yellow';
                if (cordsX == 1 && cordsY == 4 || cordsX == 4 && cordsY == 4 || cordsX == 1 && cordsY == 1 || cordsX == 4 && cordsY == 1) {
                    cuadro.style.backgroundColor = 'white';
                    cuadro.innerHTML = '<img src="./images/fichas/yellow.svg" alt="">';
                }
            }

            if ((cordsX <= 5 && cordsY >= 9) || (cordsY == 7 && cordsX <= 5 && cordsX > 0) || (cordsX == 1 && cordsY == 8)) {
                cuadro.style.backgroundColor = 'green';
                if (cordsX == 1 && cordsY == 10 || cordsX == 1 && cordsY == 13 || cordsX == 4 && cordsY == 10 || cordsX == 4 && cordsY == 13) {
                    cuadro.style.backgroundColor = 'white';
                    cuadro.innerHTML = '<img src="./images/fichas/green.svg" alt="">';
                }
            }

            if ((cordsX >= 9 && cordsY <= 5) || (cordsX >= 9 && cordsY == 7 && cordsX < 14) || (cordsX == 13 && cordsY == 6)) {
                cuadro.style.backgroundColor = 'red';
                if (cordsX == 10 && cordsY == 1 || cordsX == 10 && cordsY == 4 || cordsX == 13 && cordsY == 1 || cordsX == 13 && cordsY == 4) {
                    cuadro.style.backgroundColor = 'white';
                    cuadro.innerHTML = '<img src="./images/fichas/red.svg" alt="">';
                }
            }

            if ((cordsX >= 9 && cordsY >= 9) || (cordsX == 7 && cordsY >= 9 && cordsY < 14) || (cordsX == 8 && cordsY == 13)) {
                cuadro.style.backgroundColor = 'blue';
                if (cordsX == 10 && cordsY == 10 || cordsX == 10 && cordsY == 13 || cordsX == 13 && cordsY == 10 || cordsX == 13 && cordsY == 13) {
                    cuadro.style.backgroundColor = 'white';
                    cuadro.innerHTML = '<img src="./images/fichas/blue.svg" alt="">';
                }
            }

            if ((cordsX >= 6 && cordsX <= 8) && cordsY >= 6 && cordsY <= 8) {
                cuadro.style.backgroundColor = 'orange';
            }

            elemento.appendChild(cuadro);
        }
    }
}

function addStep(n, squares, color, show, p) {
    switch (color) {
        case "red":
            squares[n].dataset.routeRed = p;
            if (show) {
                squares[n].innerHTML = squares[n].dataset.routeRed;
            }
            break;
        case "yellow":
            squares[n].dataset.routeYellow = p;
            if (show) {
                squares[n].innerHTML = squares[n].dataset.routeYellow;
            }
            break;
        case "blue":
            squares[n].dataset.routeBlue = p;
            if (show) {
                squares[n].innerHTML = squares[n].dataset.routeBlue;
            }
            break;
        case "green":
            squares[n].dataset.routeGreen = p;
            if (show) {
                squares[n].innerHTML = squares[n].dataset.routeGreen;
            }
            break;
        default:
            console.log("Error");
            break;
    }
}

function numerationSteps(n, squares, ruteColor, color, show = false) {
    if (n == ruteColor[0]) {
        addStep(n, squares, color, show, 0);
    }
    if (n == ruteColor[1]) {
        addStep(n, squares, color, show, 1);
    }
    if (n == ruteColor[2]) {
        addStep(n, squares, color, show, 2);
    }
    if (n == ruteColor[3]) {
        addStep(n, squares, color, show, 3);
    }
    if (n == ruteColor[4]) {
        addStep(n, squares, color, show, 4);
    }
    if (n == ruteColor[5]) {
        addStep(n, squares, color, show, 5);
    }
    if (n == ruteColor[6]) {
        addStep(n, squares, color, show, 6);
    }
    if (n == ruteColor[7]) {
        addStep(n, squares, color, show, 7);
    }
    if (n == ruteColor[8]) {
        addStep(n, squares, color, show, 8);
    }
    if (n == ruteColor[9]) {
        addStep(n, squares, color, show, 9);
    }
    if (n == ruteColor[10]) {
        addStep(n, squares, color, show, 10);
    }
    if (n == ruteColor[11]) {
        addStep(n, squares, color, show, 11);
    }
    if (n == ruteColor[12]) {
        addStep(n, squares, color, show, 12);
    }
    if (n == ruteColor[13]) {
        addStep(n, squares, color, show, 13);
    }
    if (n == ruteColor[14]) {
        addStep(n, squares, color, show, 14);
    }
    if (n == ruteColor[15]) {
        addStep(n, squares, color, show, 15);
    }
    if (n == ruteColor[16]) {
        addStep(n, squares, color, show, 16);
    }
    if (n == ruteColor[17]) {
        addStep(n, squares, color, show, 17);
    }
    if (n == ruteColor[18]) {
        addStep(n, squares, color, show, 18);
    }
    if (n == ruteColor[19]) {
        addStep(n, squares, color, show, 19);
    }
    if (n == ruteColor[20]) {
        addStep(n, squares, color, show, 20);
    }
    if (n == ruteColor[21]) {
        addStep(n, squares, color, show, 21);
    }
    if (n == ruteColor[22]) {
        addStep(n, squares, color, show, 22);
    }
    if (n == ruteColor[23]) {
        addStep(n, squares, color, show, 23);
    }
    if (n == ruteColor[24]) {
        addStep(n, squares, color, show, 24);
    }
    if (n == ruteColor[25]) {
        addStep(n, squares, color, show, 25);
    }
    if (n == ruteColor[26]) {
        addStep(n, squares, color, show, 26);
    }
    if (n == ruteColor[27]) {
        addStep(n, squares, color, show, 27);
    }
    if (n == ruteColor[28]) {
        addStep(n, squares, color, show, 28);
    }
    if (n == ruteColor[29]) {
        addStep(n, squares, color, show, 29);
    }
    if (n == ruteColor[30]) {
        addStep(n, squares, color, show, 30);
    }
    if (n == ruteColor[31]) {
        addStep(n, squares, color, show, 31);
    }
    if (n == ruteColor[32]) {
        addStep(n, squares, color, show, 32);
    }
    if (n == ruteColor[33]) {
        addStep(n, squares, color, show, 33);
    }
    if (n == ruteColor[34]) {
        addStep(n, squares, color, show, 34);
    }
    if (n == ruteColor[35]) {
        addStep(n, squares, color, show, 35);
    }
    if (n == ruteColor[36]) {
        addStep(n, squares, color, show, 36);
    }
    if (n == ruteColor[37]) {
        addStep(n, squares, color, show, 37);
    }
    if (n == ruteColor[38]) {
        addStep(n, squares, color, show, 38);
    }
    if (n == ruteColor[39]) {
        addStep(n, squares, color, show, 39);
    }
    if (n == ruteColor[40]) {
        addStep(n, squares, color, show, 40);
    }
    if (n == ruteColor[41]) {
        addStep(n, squares, color, show, 41);
    }
    if (n == ruteColor[42]) {
        addStep(n, squares, color, show, 42);
    }
    if (n == ruteColor[43]) {
        addStep(n, squares, color, show, 43);
    }
    if (n == ruteColor[44]) {
        addStep(n, squares, color, show, 44);
    }
    if (n == ruteColor[45]) {
        addStep(n, squares, color, show, 45);
    }
    if (n == ruteColor[46]) {
        addStep(n, squares, color, show, 46);
    }
    if (n == ruteColor[47]) {
        addStep(n, squares, color, show, 47);
    }
    if (n == ruteColor[48]) {
        addStep(n, squares, color, show, 48);
    }
    if (n == ruteColor[49]) {
        addStep(n, squares, color, show, 49);
    }
    if (n == ruteColor[50]) {
        addStep(n, squares, color, show, 50);
    }
    if (n == ruteColor[51]) {
        addStep(n, squares, color, show, 51);
    }
    if (n == ruteColor[52]) {
        addStep(n, squares, color, show, 52);
    }
    if (n == ruteColor[53]) {
        addStep(n, squares, color, show, 53);
    }
    if (n == ruteColor[54]) {
        addStep(n, squares, color, show, 54);
    }
    if (n == ruteColor[55]) {
        addStep(n, squares, color, show, 55);
    }
    if (n == ruteColor[56]) {
        addStep(n, squares, color, show, 56);
    }
}

function rutas() {
    var casillas = document.querySelectorAll('.casilla');
    for (let i = 0; i < casillas.length; i++) {
        //casillas[i].innerHTML = i;

        cordsX = casillas[i].dataset.cordsX;
        cordsY = casillas[i].dataset.cordsY;

        //red
        numerationSteps(i, casillas, routes.red, "red");

        //green
        numerationSteps(i, casillas, routes.green, "green");

        //blue
        numerationSteps(i, casillas, routes.blue, "blue");

        //yellow
        numerationSteps(i, casillas, routes.yellow, "yellow");

    }
}

mapa(tablero);
rutas();