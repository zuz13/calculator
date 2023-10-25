const screen_value = document.getElementById("screen__id");
let equals_button = document.getElementById("equals"),
    decimal_button = document.getElementById("decimal"),
    button__0 = document.getElementById("button__0"),
    add_button = document.getElementById("add"),
    button__3 = document.getElementById("button__3"),
    button__2 = document.getElementById("button__2"),
    button__1 = document.getElementById("button__1"),
    subtract_button = document.getElementById("subtract"),
    button__6 = document.getElementById("button__6"),
    button__5 = document.getElementById("button__5"),
    button__4 = document.getElementById("button__4"),
    multiply_button = document.getElementById("multiply"),
    button__9 = document.getElementById("button__9"),
    button_8 = document.getElementById("button__8"),
    button__7 = document.getElementById("button__7"),
    divide_button = document.getElementById("divide"),
    arrow__back_button = document.getElementById("arrow__back"),
    button__C = document.getElementById("button__C"),
    cache_1 = null,
    operator = null,
    write = true,writeDecimal = true;

function characterLimit() {
    let letter_number = screen_value.innerHTML.length;
    if (letter_number == 13) {
        write = false;
    } else {
        write = true;
    }
}

// Event Listeners
button__1.onclick = function () {
    characterLimit();
    if (write) {
        if (screen_value.innerHTML == "0.") {
            screen_value.innerHTML = screen_value.innerHTML + 1;
        }
        if (screen_value.innerHTML == 0) {
            screen_value.innerHTML = "";
            screen_value.innerHTML = screen_value.innerHTML + 1;
        }else 
        if (screen_value.innerHTML != 0) {
            screen_value.innerHTML = screen_value.innerHTML + 1;
        }
    }
}
button__2.onclick = function () {
    characterLimit();
    let number = 2;
    if (write) {
        if (screen_value.innerHTML == "0.") {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
        if (screen_value.innerHTML == 0) {
            screen_value.innerHTML = "";
            screen_value.innerHTML = screen_value.innerHTML + number;
        }else
        if (screen_value.innerHTML != 0) {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
    }
}
button__3.onclick = function () {
    characterLimit();
    let number = 3;
    if (write) {
        if (screen_value.innerHTML == "0.") {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
        if (screen_value.innerHTML == 0) {
            screen_value.innerHTML = "";
            screen_value.innerHTML = screen_value.innerHTML + number;
        }else 
        if (screen_value.innerHTML != 0) {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
    }
}

button__4.onclick = function () {
    characterLimit();
    let number = 4;
    if (write) {
        if (screen_value.innerHTML == "0.") {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
        if (screen_value.innerHTML == 0) {
            screen_value.innerHTML = "";
            screen_value.innerHTML = screen_value.innerHTML + number;
        }else 
        if (screen_value.innerHTML != 0) {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
    }
}

button__5.onclick = function () {
    characterLimit();
    let number = 5;
    if (write) {
        if (screen_value.innerHTML == "0.") {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
        if (screen_value.innerHTML == 0) {
            screen_value.innerHTML = "";
            screen_value.innerHTML = screen_value.innerHTML + number;
        }else 
        if (screen_value.innerHTML != 0) {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
    }
}
button__6.onclick = function () {
    characterLimit();
    let number = 6;
    if (write) {
        if (screen_value.innerHTML == "0.") {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
        if (screen_value.innerHTML == 0) {
            screen_value.innerHTML = "";
            screen_value.innerHTML = screen_value.innerHTML + number;
        }else 
        if (screen_value.innerHTML != 0) {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
    }
}
button__7.onclick = function () {
    characterLimit();
    let number = 7;
    if (write) {
        if (screen_value.innerHTML == "0.") {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
        if (screen_value.innerHTML == 0) {
            screen_value.innerHTML = "";
            screen_value.innerHTML = screen_value.innerHTML + number;
        }else 
        if (screen_value.innerHTML != 0) {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
    }
}
button__8.onclick = function () {
    characterLimit();
    let number = 8;
    if (write) {
        if (screen_value.innerHTML == "0.") {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
        if (screen_value.innerHTML == 0) {
            screen_value.innerHTML = "";
            screen_value.innerHTML = screen_value.innerHTML + number;
        }else 
        if (screen_value.innerHTML != 0) {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
    }
}
button__9.onclick = function () {
    characterLimit();
    let number = 9;
    if (write) {
        if (screen_value.innerHTML == "0.") {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
        if (screen_value.innerHTML == 0) {
            screen_value.innerHTML = "";
            screen_value.innerHTML = screen_value.innerHTML + number;
        }else 
        if (screen_value.innerHTML != 0) {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
    }
}
button__0.onclick = function () {
    characterLimit();
    let number = 0;
    if (write) {
        if (screen_value.innerHTML == "0.") {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
        if (screen_value.innerHTML != 0) {
            screen_value.innerHTML = screen_value.innerHTML + number;
        }
    }
}
decimal.onclick = function () {
    characterLimit();
    if (write && writeDecimal === true) {
        writeDecimal=false;
        screen_value.innerHTML = screen_value.innerHTML + ".";
    }
}
button__C.onclick = function () {
    screen_value.innerHTML = 0;
    cache_1 = null;
    operator = null;
    writeDecimal=true;
}
arrow__back_button.onclick = function () {
    let letter_number = screen_value.innerHTML.length;
    if (letter_number == 1) {
        screen_value.innerHTML = 0;
    } else {
        let decimal = false;
        for (let index = 0; index < screen_value.innerHTML.length - 1; index++) {
            if(screen_value.innerHTML.substring(index,index+1) == "."){
                decimal = true;
            }
        }
        if (!decimal){
            writeDecimal=true;
        }
        // if (screen_value.innerHTML.substring(0,screen_value.innerHTML.length - 1) == ".") {
        //     writeDecimal=true;
        // }
        screen_value.innerHTML = screen_value.innerHTML.substring(0, screen_value.innerHTML.length - 1);
    }
}
add_button.onclick = function () {
    calculate();
    cache_1 = parseFloat(screen_value.innerHTML);
    operator = "+";
    screen_value.innerHTML = 0;
    writeDecimal=true;
}
subtract_button.onclick = function () {
    calculate();
    cache_1 = parseFloat(screen_value.innerHTML);
    operator = "-";
    screen_value.innerHTML = 0;
    writeDecimal=true;
}
multiply_button.onclick = function () {
    calculate();
    cache_1 = parseFloat(screen_value.innerHTML);
    operator = "*";
    screen_value.innerHTML = 0;
    writeDecimal=true;
}
divide_button.onclick = function () {
    calculate();
    cache_1 = parseFloat(screen_value.innerHTML);
    operator = "/";
    screen_value.innerHTML = 0;
    writeDecimal=true;
}
equals_button.onclick = function () {
    calculate();
    writeDecimal=true;
}

function calculate() {
    if (cache_1 !== null && operator !== null) {
        let number = parseFloat(screen_value.innerHTML);
        let result;
        switch (operator) {
            case "+":
                result = cache_1 + number;
                break;
            case "-":
                result = cache_1 - number;
                break;
            case "*":
                result = cache_1 * number;
                break;
            case "/":
                result = cache_1 / number;
                break;
        }
        screen_value.innerHTML = result;
        cache_1 = result;
        operator = null;
    }
}


var toggle = document.getElementById("container");
var body = document.querySelector('body');
var button = document.querySelector('button');

toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    changeTheme();
});

function changeTheme() {
    var bodyClassList = body.classList;
    if (bodyClassList.contains('active')) {
        // Cambiar a tema oscuro
        body.style.backgroundColor = '#272727';
        body.style.color = '#fff';
    } else {
        // Cambiar a tema claro
        body.style.backgroundColor = '#ffefdc';
        body.style.color = '#c9a783';
    }
}
