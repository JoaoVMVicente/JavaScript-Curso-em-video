const display = document.getElementById("display");

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = "";
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
}

// Captura teclas do teclado
document.addEventListener("keydown", function(event) {

    const tecla = event.key;

    // Números
    if (!isNaN(tecla)) {
        adicionar(tecla);
    }

    // Enter = calcular
    else if (tecla === "Enter") {
        calcular();
    }

    // Backspace = apagar último caractere
    else if (tecla === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    // Escape = limpar tudo
    else if (tecla === "c") {
        limpar();
    }

    // Operadores matemáticos
    if (tecla === "+" || tecla === "-" || tecla === "*" || tecla === "/" || tecla === ".") {
        adicionar(tecla);
    }
});